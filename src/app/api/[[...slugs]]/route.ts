import { Elysia } from "elysia";
import { auth } from "@/lib/auth";

const betterAuthPlugin = new Elysia({name:"better-auth"})
.mount(auth.handler)
.macro({
    auth:{
        async resolve({status, request:{headers}}) {
            const session = await auth.api.getSession({headers})
            if(!session) return status(401, 'DEADEND fr');
            return {user:session.user, session: session.session}
        }
    }
})

const app = new Elysia({prefix:"/api"})
.use(betterAuthPlugin)
.get("/me", ({user}) => user, {auth:true})
.get("/health", ()=>({ok:true}))


export const GET = app.handle;
export const POST = app.handle;
export const PUT = app.handle;
export const PATCH = app.handle;
export const DELETE = app.handle;
export const OPTIONS = app.handle;