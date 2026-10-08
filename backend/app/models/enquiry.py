import enum
from datetime import date, datetime

from sqlalchemy import Date, DateTime, Enum, Integer, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column

from ..db import Base


class Service(str, enum.Enum):
    houseboat = "houseboat"
    day_cruise = "day-cruise"
    shikkara = "shikkara"
    kayaking = "kayaking"


class EnquiryStatus(str, enum.Enum):
    new = "new"
    contacted = "contacted"
    confirmed = "confirmed"
    cancelled = "cancelled"


class Enquiry(Base):
    __tablename__ = "enquiries"

    id: Mapped[int] = mapped_column(primary_key=True)
    reference: Mapped[str] = mapped_column(String(12), unique=True, index=True)
    service: Mapped[Service] = mapped_column(Enum(Service, values_callable=lambda e: [m.value for m in e], name="service"))
    travel_date: Mapped[date] = mapped_column(Date)
    guests: Mapped[int] = mapped_column(Integer)
    name: Mapped[str] = mapped_column(String(120))
    phone: Mapped[str] = mapped_column(String(32))
    email: Mapped[str] = mapped_column(String(254))
    message: Mapped[str] = mapped_column(Text, default="")
    status: Mapped[EnquiryStatus] = mapped_column(
        Enum(EnquiryStatus, values_callable=lambda e: [m.value for m in e], name="enquiry_status"),
        default=EnquiryStatus.new,
    )
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
