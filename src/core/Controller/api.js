const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');
const connectDB = require('../../resources/mongconnect');
const gitcalls = require('../../resources/github')
const gitdata = require('../Service/gitdata')

const cron = require('../Service/cron')

connectDB()
const app = new Koa();

const router = new Router({
    prefix: "/api/v1"
})

app.use(bodyParser());
app.use(cors());


router.get("/", async ctx => {
    console.log("Basic Route for Data Encrytpion and decryption")
    ctx.body = { messsage: 'Hello Data' }
})


router.get("/git/getprojects/:user", async ctx => {
    try {
        const res = await gitcalls.getprojects(ctx.params.user)
        if (res.data.length == 0) {
            ctx.response.status = 404
            ctx.body = {
                message: 'No Projects Found for Given User'
            }
        } else {
            ctx.body = res.data
        }
    } catch (ex) {
        ctx.status = ex.statusCode || ex.status || 500;
        ctx.body = {
            message: ex.message
        };
    }
})


router.get("/git/getrepos/:user", async ctx => {
    try {
        const res = await gitcalls.getgithubrepos(ctx.params.user)
        if (res.data.length == 0) {
            ctx.response.status = 404
            ctx.body = {
                message: 'No Repos Found for Given User'
            }
        } else {
            ctx.body = res.data
        }
    } catch (ex) {
        ctx.status = ex.statusCode || ex.status || 500;
        ctx.body = {
            message: ex.message
        };
    }
})


router.post("/git/createpr", async ctx => {
    try {
        const res = await gitdata.createPR(ctx.request.body)
        ctx.body = res
    } catch (ex) {
        ctx.status = ex.statusCode || ex.status || 500;
        ctx.body = {
            message: ex.message
        };
    }
})

router.post("/git/aprovepr", async ctx => {
    try {
        const res = await gitdata.aproverPR(ctx.request.body)
        ctx.body = res
    } catch (ex) {
        ctx.status = ex.statusCode || ex.status || 500;
        ctx.body = {
            message: ex.message
        };
    }
})


router.post("/git/mergepr/:id", async ctx => {
    try {
        const res = await gitdata.mergePR(ctx.params.id)
        ctx.body = res
    } catch (ex) {
        ctx.status = ex.statusCode || ex.status || 500;``
        ctx.body = {
            message: ex.message
        };
    }
})

router.post("/git/reject", async ctx => {
    try {
        const res = await gitdata.rejectPR(ctx.request.body)
        ctx.body = res
    } catch (ex) {
        ctx.status = ex.statusCode || ex.status || 500;
        ctx.body = {
            message: ex.message
        };
    }
})



app.use(router.routes())

const api = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on ${api.address().port}`)
})

module.exports = api

cron.job.invoke()