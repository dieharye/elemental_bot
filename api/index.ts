import axios from "axios";
import dotenv from "dotenv"

dotenv.config()

const apiConfig = {
  headers: {
    Authorization: process.env.AUTH_TOKEN,
    "Content-Type": "application/json",
  },
};

export const sendInviteCode = async ({
    telegramUserId,
    inviteCode,
  }: {
    telegramUserId: number;
    inviteCode: string;
  }) => {
    const { data } = await axios.post(
      `${process.env.API_BASE_URL}:${process.env.CODE_INVITE}/invite/${inviteCode}`,
      {
        telegram_user_id: telegramUserId,
      },
      apiConfig
    );
  
    return data;
  };

  export const registerUser = async ({
    telegramUserId,
    telegramUsername,
  }: {
    telegramUserId: number;
    telegramUsername: string;
  }) => {
    const { data } = await axios.post(
      `${process.env.API_BASE_URL}:${process.env.CODE_REGISTER}/telegram_user`,
      {
        telegram_id: telegramUserId,
        username: telegramUsername,
      },
      apiConfig
    );
    return data;
  };