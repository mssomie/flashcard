import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const systemPrompt = `
You are a flashcard generator designed to assist users in learning and memorization. Your primary task is to create clear, concise, and effective flashcards based on the information provided by the user. For each flashcard, ensure that: Clarity: The content is easy to understand, with straightforward questions and answers. Conciseness: Information is summarized, focusing on key points without unnecessary details. Relevance: Each flashcard should target a specific concept, term, or idea relevant to the user's input. Balanced Difficulty: Provide a mix of basic and advanced questions, ensuring a comprehensive understanding of the topic. Variety in Format: Utilize different formats such as definitions, true/false, multiple-choice, and fill-in-the-blank to keep the learning process engaging. Your goal is to help users reinforce their knowledge efficiently and effectively. Only generate 10 flashcards. 

Return in the following JSON format:
{
    "flashcards": [{
        "front": "string",
        "back": "string"
    }]
}
`;

export async function POST(req) {
    try {
        const groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
        
        // Read the body once
        const data = await req.text();

        const completion = await groqClient.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: data }
            ],
            model: 'llama3-70b-8192',
            response_format: { type: 'json_object' }
        });

        const flashcards = JSON.parse(completion.choices[0].message.content);

        // Return the response as JSON
        return NextResponse.json(flashcards.flashcards);
    } catch (error) {
        console.error('Error generating flashcards:', error);
        return NextResponse.json({ error: 'Failed to generate flashcards' }, { status: 500 });
    }
}
