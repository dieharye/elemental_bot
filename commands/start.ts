import { CommandContext, InlineKeyboard } from "grammy";
import { MyContext } from "../my-context";

const initMenu = new InlineKeyboard().url("Start Playing & Earn", "https://t.me/elementalblastbot?startapp=").row()

export const StartCommand = async (ctx: CommandContext<MyContext>) => {
    try {
        await ctx.reply(
            `Welcome to the ElementalBlast Bot! 🤖

<a href="https://t.me/+VQCblnmei7AxY2Fk">Group</a> | <a href="https://t.me/ElementalBlastNews">Channel</a> | <a href="https://x.com/elementalblast1">Twitter</a> | <a href="https://www.elementalblast.com/">Website</a>

🏆 We will make everyone a winner

Start playing games and performing tasks to win ELEMENT POINTS 💎 which you can later swap for real money 💸.

👇 Start earning now 👇`,
            {
                reply_markup: initMenu,
                parse_mode: 'HTML',
                // disable_web_page_preview: true, // Disable link preview
                link_preview_options: {
                    is_disabled: true,
                }
            },
        );
    } catch (error) {
        console.log(error)
    }
}


