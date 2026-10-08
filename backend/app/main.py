from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from . import models  # noqa: F401  (registers tables on Base.metadata)
from .config import settings
from .db import Base, engine
from .routers import enquiries, health


@asynccontextmanager
async def lifespan(_: FastAPI):
    # Simple bootstrap; move to Alembic migrations before the schema starts changing.
    Base.metadata.create_all(engine)
    yield


app = FastAPI(title="Tranquil Cruise API", version="0.1.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api")
app.include_router(enquiries.router, prefix="/api")
