declare global {
  namespace Express {
    interface User {
      zerocho: string;
    }
  }
}
declare module "express-session" {
  interface SessionData {
    sessionData: string;
  }
}

export {}