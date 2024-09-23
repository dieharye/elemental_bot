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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartCommand = void 0;
const grammy_1 = require("grammy");
const initMenu = new grammy_1.InlineKeyboard().url("Start Playing & Earn", "https://t.me/elementalblastbot?startapp=").row();
const StartCommand = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ctx.reply(`Welcome to the ElementalBlast Bot! 🤖

<a href="https://t.me/+VQCblnmei7AxY2Fk">Group</a> | <a href="https://t.me/ElementalBlastNews">Channel</a> | <a href="https://x.com/elementalblast1">Twitter</a> | <a href="https://www.elementalblast.com/">Website</a>

🏆 We will make everyone a winner

Start playing games and performing tasks to win ELEMENT POINTS 💎 which you can later swap for real money 💸.

👇 Start earning now 👇`, {
            reply_markup: initMenu,
            parse_mode: 'HTML',
            // disable_web_page_preview: true, // Disable link preview
            link_preview_options: {
                is_disabled: true,
            }
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.StartCommand = StartCommand;
