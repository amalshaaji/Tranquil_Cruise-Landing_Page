import secrets
from typing import Annotated

from fastapi import APIRouter, Depends, Header, HTTPException, status
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from ..config import settings
from ..db import get_db
from ..models import Enquiry
from ..schemas import EnquiryAdmin, EnquiryConfirmation, EnquiryCreate

router = APIRouter(prefix="/enquiries", tags=["enquiries"])

# No 0/O/1/I so references are easy to read out over the phone.
_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"


def _new_reference() -> str:
    return "TC-" + "".join(secrets.choice(_ALPHABET) for _ in range(6))


def _confirmation(e: Enquiry) -> EnquiryConfirmation:
    return EnquiryConfirmation(
        reference=e.reference,
        service=e.service,
        travel_date=e.travel_date,
        guests=e.guests,
        first_name=e.name.split()[0],
    )


@router.post("", response_model=EnquiryConfirmation, status_code=status.HTTP_201_CREATED)
def create_enquiry(payload: EnquiryCreate, db: Session = Depends(get_db)) -> EnquiryConfirmation:
    for _ in range(5):
        enquiry = Enquiry(reference=_new_reference(), **payload.model_dump())
        db.add(enquiry)
        try:
            db.commit()
            return _confirmation(enquiry)
        except IntegrityError:  # reference collision — extremely unlikely, retry
            db.rollback()
    raise HTTPException(status_code=500, detail="Could not save your enquiry. Please try again.")


@router.get("/{reference}", response_model=EnquiryConfirmation)
def get_enquiry(reference: str, db: Session = Depends(get_db)) -> EnquiryConfirmation:
    enquiry = db.scalar(select(Enquiry).where(Enquiry.reference == reference.upper()))
    if enquiry is None:
        raise HTTPException(status_code=404, detail="Enquiry not found")
    return _confirmation(enquiry)


@router.get("", response_model=list[EnquiryAdmin])
def list_enquiries(
    x_admin_key: Annotated[str | None, Header()] = None,
    db: Session = Depends(get_db),
) -> list[Enquiry]:
    if not settings.admin_key or not x_admin_key or not secrets.compare_digest(x_admin_key, settings.admin_key):
        raise HTTPException(status_code=401, detail="Invalid admin key")
    return list(db.scalars(select(Enquiry).order_by(Enquiry.created_at.desc())))
