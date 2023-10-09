interface Application {
  use(middleware: RequestHandler | ErrorRequestHandler): void;
  use(path: string, middleware: RequestHandler | ErrorRequestHandler): void;
  get(path: string, ...middlewares: RequestHandler[]): void;
  listen(port: number, callback: () => void): void;
}
interface ZExpress {
  (): Application;
  json(): RequestHandler;
  urlencoded({ extended }: { extended: boolean }): RequestHandler;
  static(path: string): RequestHandler;
}
interface CookieParser {
  (secret: string): RequestHandler;
}
interface Session {
  ({ secret }: { secret: string }): RequestHandler;
}
interface Flash {
  (): RequestHandler;
}
interface Passport {
  initialize(): RequestHandler;
  session(): RequestHandler;
}
interface ZRequest<Param, Query, ReqBody> {
  params: Param;
  query: Query;
  body: ReqBody;
}
interface ZResponse<ResBody, Locals> {
  locals: Locals;
  json(data: ResBody): void;
}
interface NextFunction {
  (to?: string): void;
}
interface RequestHandler<Param = any, Query = any, ReqBody = any, ResBody = any, Locals = any> {
  (req: ZRequest<Param, Query, ReqBody>, res: ZResponse<ResBody, Locals>, next: NextFunction): void
}
interface ErrorRequestHandler<Param = any, Query = any, ReqBody = any, ResBody = any, Locals = any> {
  (err: Error, req: ZRequest<Param, Query, ReqBody>, res: ZResponse<ResBody, Locals>, next: NextFunction): void
}
interface Passport {
  initialize(): RequestHandler;
  session(): RequestHandler;
}
declare global {
  namespace ZExpress {
    interface Request {
      session: {
        sessionData: string;
      }
      user?: {
        zerocho: string;
      }
      flash(key?: string, value?: string): void;
    }
    interface Locals {
      hello: string;
    }
  }
  interface Error {
    status: number;
  }
}
declare const express: ZExpress;
declare const CookieParser: cookieParser;
declare const flash: Flash;
declare const session: Session;
declare const passport: Passport;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static('./public'));
app.use(cookieParser('SECRET'));
app.use(session({
  secret: 'SECRET',
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

const middleware: RequestHandler = (req, res, next) => {
  req.params.paramType;
  req.body.bodyType;
  req.query.queryType;
  res.locals.hello = 'world';
  req.session.sessionData;
  req.user?.zerocho;

  req.flash('플래시메시지');
  req.flash('1회성', '플래시메시지');
  req.flash();

  res.json({
    message: 'hello',
  });
};
app.get('/', (req, res, next) => {
  res.locals.hello;
  next('route');
}, middleware);

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err.status);  
};
app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('8080 포트에서 서버 실행 중');  
});