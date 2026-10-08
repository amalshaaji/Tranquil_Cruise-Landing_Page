import re
from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, EmailStr, Field, field_validator

from .models import EnquiryStatus, Service

_PHONE = re.compile(r"^\+?[0-9][0-9 \-]{6,18}[0-9]$")


class EnquiryCreate(BaseModel):
    service: Service
    travel_date: date
    guests: int = Field(ge=1, le=100)
    name: str = Field(min_length=2, max_length=120)
    phone: str
    email: EmailStr
    message: str = Field(default="", max_length=2000)

    @field_validator("name", "message")
    @classmethod
    def strip(cls, v: str) -> str:
        return v.strip()

    @field_validator("phone")
    @classmethod
    def phone_ok(cls, v: str) -> str:
        v = v.strip()
        if not _PHONE.match(v):
            raise ValueError("Enter a valid phone number, e.g. +91 98765 43210")
        return v

    @field_validator("travel_date")
    @classmethod
    def not_past(cls, v: date) -> date:
        if v < date.today():
            raise ValueError("Date can't be in the past")
        return v


class EnquiryConfirmation(BaseModel):
    """Public view, looked up by reference. Deliberately omits contact details."""

    model_config = ConfigDict(from_attributes=True)

    reference: str
    service: Service
    travel_date: date
    guests: int
    first_name: str


class EnquiryAdmin(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    reference: str
    service: Service
    travel_date: date
    guests: int
    name: str
    phone: str
    email: str
    message: str
    status: EnquiryStatus
    created_at: datetime
