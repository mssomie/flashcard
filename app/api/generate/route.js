import {NextResponse} from 'next/server';
import Groq from 'groq-sdk';


const systemPrompt = `
You are a flashcard generator designed to assist users in learning and memorization. Your primary task is to create clear, concise, and effective flashcards based on the information provided by the user. For each flashcard, ensure that: Clarity: The content is easy to understand, with straightforward questions and answers. Conciseness: Information is summarized, focusing on key points without unnecessary details. Relevance: Each flashcard should target a specific concept, term, or idea relevant to the user's input. Balanced Difficulty: Provide a mix of basic and advanced questions, ensuring a comprehensive understanding of the topic. Variety in Format: Utilize different formats such as definitions, true/false, multiple-choice, and fill-in-the-blank to keep the learning process engaging.Your goal is to help users reinforce their knowledge efficiently and effectively.Only generate 10 flashcards 

Return in the following JSON format:
{
    "flashcards":[{
        "front": str,
        "back": str
    }]
}
`

export async function POST(req){
    const groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const data = await req.text()

    const completion = await openai.chat.completion.create(
        {
            messages: [
                {role: "system", content: systemPrompt},
                {role:"user", content: data}
            ],
            model: "gpt-4o",
            response_format: {type: 'json_object'}
        }
    )

    const flashcards = JSON.parse(completion.choices[0].message.content)

return NextResponse.json(flashcards.flashcard)
}