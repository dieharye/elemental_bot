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
exports.registerUser = exports.sendInviteCode = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const apiConfig = {
    headers: {
        Authorization: process.env.AUTH_TOKEN,
        "Content-Type": "application/json",
    },
};
const sendInviteCode = (_a) => __awaiter(void 0, [_a], void 0, function* ({ telegramUserId, inviteCode, }) {
    const { data } = yield axios_1.default.post(`${process.env.API_BASE_URL}:${process.env.CODE_INVITE}/invite/${inviteCode}`, {
        telegram_user_id: telegramUserId,
    }, apiConfig);
    return data;
});
exports.sendInviteCode = sendInviteCode;
const registerUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ telegramUserId, telegramUsername, }) {
    const { data } = yield axios_1.default.post(`${process.env.API_BASE_URL}:${process.env.CODE_REGISTER}/telegram_user`, {
        telegram_id: telegramUserId,
        username: telegramUsername,
    }, apiConfig);
    return data;
});
exports.registerUser = registerUser;
