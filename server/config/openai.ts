import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.AI_API_KEY! as string,
  baseURL: "https://openrouter.ai/api/v1",
});

export default openai;
