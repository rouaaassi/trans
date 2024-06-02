export const BACKEND_ROUTES = {
  streams: "/sessions",
  fetchStream: (hash: string) => `/sessions/${hash}`,
  playStream: `/sessions`,
  validateStream: `/sessions/validate`,
};
