import { configDotenv } from "dotenv";
configDotenv();
export const config = {
    API_KEY: process.env.APIKEY
}