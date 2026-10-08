const BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export class ApiError extends Error {
  constructor(
    public status: number,
    /** Field name → message, for 422 validation errors. */
    public fields: Record<string, string> = {},
    message = `API error ${status}`,
  ) {
    super(message);
  }
}

export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}/api${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
  });
  if (!res.ok) {
    const fields: Record<string, string> = {};
    let message: string | undefined;
    try {
      const body = await res.json();
      if (Array.isArray(body.detail)) {
        for (const d of body.detail) {
          const key = String(d.loc?.[d.loc.length - 1] ?? "form");
          fields[key] = String(d.msg).replace(/^Value error, /, "");
        }
      } else if (typeof body.detail === "string") message = body.detail;
    } catch {}
    throw new ApiError(res.status, fields, message);
  }
  return res.json() as Promise<T>;
}
