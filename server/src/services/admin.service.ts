import AdminJS from 'adminjs';
import MongoStore from 'connect-mongo';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import { UserModel } from '../models/User.model.js';
import mongoose from 'mongoose';

export class AdminService {
    private readonly DEFAULT_ADMIN = {
        email: 'admin@example.com',
        password: 'password',
    };
    private readonly adminOptions = {
        resources: [UserModel],
    };
    public readonly admin: any;
    public readonly adminRouter: any;
    constructor() {

        AdminJS.registerAdapter({
            Resource: AdminJSMongoose.Resource,
            Database: AdminJSMongoose.Database,
        });

        const sessionStore =  MongoStore.create({
            client: mongoose.connection.getClient(),
            collectionName: "session",
            stringify: false,
            autoRemove: "interval",
            autoRemoveInterval: 1
        });
        this.admin = new AdminJS(this.adminOptions);
        this.adminRouter = AdminJSExpress.buildAuthenticatedRouter(
            this.admin,
            {
                authenticate: this.authenticate,
                cookieName: 'adminjs',
                cookiePassword: 'sessionsecret',
            },
            null,
            {
                store: sessionStore,
                resave: true,
                saveUninitialized: true,
                secret: 'sessionsecret',
                cookie: {
                    httpOnly: process.env.NODE_ENV === 'production',
                    secure: process.env.NODE_ENV === 'production',
                },
                name: 'adminjs',
            }
        );
    }

    authenticate(email: string, password: string) {
        if (email === this.DEFAULT_ADMIN.email && password === this.DEFAULT_ADMIN.password) {
            return Promise.resolve(this.DEFAULT_ADMIN);
        }
        return null;
    }
}
