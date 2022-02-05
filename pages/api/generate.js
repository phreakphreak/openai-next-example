import { generatePrompt, openAI } from "../../services";

export default async function handler(req, res) {
  const completion = await openAI.createCompletion("text-davinci-001", {
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}
