import { Context } from 'egg';
import { PassportStatic, AuthenticateOptions } from 'passport';

type EggPassport = PassportStatic & {
    verify(fn: (ctx: Context, user: any) => any): void;
    doVerify(req: Express.Request, user: any, done: (error: any, user?: any, options?: any) => void): void;
    mount(strategy: string | string[], options?: AuthenticateOptions & {
        loginURL?: string;
        callbackURL?: string;
    });
};

declare module 'egg' {

    interface Context {
        // egg-passport
        user: Express.User,
        isAuthenticated(): boolean;
        login(user: any, options?: any): void;
        logout(): void;
    }

    interface Application {
        passport: EggPassport;
    }

}