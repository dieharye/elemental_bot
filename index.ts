import express from "express"
import { Bot } from "grammy"
import dotenv from 'dotenv';
import { StartCommand } from "./commands/start"
import { MyContext } from "./my-context";
import {registerUser, sendInviteCode} from "./api"
import { addUser } from "./saveUser";
import { User } from "./saveUser";

dotenv.config();
const app = express();
const bot = new Bot<MyContext>(process.env.BOT_TOKEN as any);

app.get("/", (req, res) => {
    res.json({ msg: "hello" })
});
let count = 0;

bot.command("start", async (ctx) => {
    count++;
    console.log("total user", count)
    console.log(ctx.from)
    await addUser(ctx.from as User);
    const inviteCode = ctx.match;
    const telegramUserId = ctx.from?.id;
    const telegramUsername = ctx.from?.username;
    if(inviteCode !== "" && telegramUserId && telegramUsername) {
        try{
            await registerUser({telegramUserId, telegramUsername})
        }catch(error){
            console.log(error)
        }

        try{
            await sendInviteCode({telegramUserId, inviteCode})
        } catch (error) {
            console.log(error)
        }
    }
    StartCommand(ctx);
})


bot.start({
    onStart(botInfo) {
        console.log(new Date(), "Bot started running,", botInfo.username);
    }
})