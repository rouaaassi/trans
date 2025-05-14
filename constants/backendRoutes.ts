export const BACKEND_ROUTES = {
  users: "/users",
  login: "/auth/login",
  register: "/auth/register",
  streams: "/streams",
  validateStream: "/streams/validate",
  transcripts: "/transcripts",
  payments: "/payments",
  settings: "/settings",
} as const;
