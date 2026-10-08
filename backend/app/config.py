from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    database_url: str = "postgresql+psycopg://tranquil:tranquil@localhost:5432/tranquil"
    cors_origins: list[str] = ["http://localhost:3000"]
    # Required (X-Admin-Key header) to list enquiries. Leave empty to disable listing.
    admin_key: str = ""


settings = Settings()
