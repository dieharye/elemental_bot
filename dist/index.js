"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const grammy_1 = require("grammy");
const dotenv_1 = __importDefault(require("dotenv"));
const start_1 = require("./commands/start");
const api_1 = require("./api");
const saveUser_1 = require("./saveUser");
dotenv_1.default.config();
const app = (0, express_1.default)();
const bot = new grammy_1.Bot(process.env.BOT_TOKEN);
app.get("/", (req, res) => {
    res.json({ msg: "hello" });
});
let count = 0;
bot.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    count++;
    console.log("total user", count);
    console.log(ctx.from);
    yield (0, saveUser_1.addUser)(ctx.from);
    const inviteCode = ctx.match;
    const telegramUserId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
    const telegramUsername = (_b = ctx.from) === null || _b === void 0 ? void 0 : _b.username;
    if (inviteCode !== "" && telegramUserId && telegramUsername) {
        try {
            yield (0, api_1.registerUser)({ telegramUserId, telegramUsername });
        }
        catch (error) {
            console.log(error);
        }
        try {
            yield (0, api_1.sendInviteCode)({ telegramUserId, inviteCode });
        }
        catch (error) {
            console.log(error);
        }
    }
    (0, start_1.StartCommand)(ctx);
}));
bot.start({
    onStart(botInfo) {
        console.log(new Date(), "Bot started running,", botInfo.username);
    }
});
