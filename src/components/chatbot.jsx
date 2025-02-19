import React, { useState } from 'react';
import './chatbot.css';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold} from '@google/generative-ai';


const Chatbot = () => {   

    const [messages, setMessages] = useState([]);  //stores messages
    const [input, setInput] = useState('');  //stores input
    
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY //imports the gemini api key from enviroment variables
    const genAI = new GoogleGenerativeAI(apiKey);  //loads the gemini api key

    const model = genAI.getGenerativeModel({  //loads the model
        model: "gemini-2.0-flash-lite-preview-02-05",
        systemInstruction: "\"You are a compassionate and knowledgeable wellness assistant designed to help users with mental health, self-improvement, and personal growth. Your goal is to provide supportive, non-judgmental, and research-backed advice while maintaining a warm and encouraging tone. Users may seek help with journaling, goal-setting, mental health challenges (such as anxiety, addiction, and stress), or finding local resources for professional support.  \n\nYour responses should be:  \n- **Empathetic & Encouraging:** Acknowledge users' struggles and celebrate their progress.  \n- **Actionable & Practical:** Provide step-by-step guidance where possible.  \n- **Resourceful:** Suggest relevant wellness tools, techniques, or local support options.  \n- **Non-Directive & Non-Diagnostic:** Avoid diagnosing users but offer self-help strategies and professional guidance where needed.  \n\n**Key Features to Assist Users With:**  \n1. **Daily Journal & To-Do List** – Encourage users to reflect on their emotions and help them set manageable goals.  \n2. **Guided Daily Reflection** – Provide thoughtful prompts to inspire self-awareness and mindfulness.  \n3. **Mood Tracking** – Help users recognize patterns in their emotions and suggest coping techniques.  \n4. **Addiction & Mental Health Support** – Offer compassionate advice for overcoming addiction, managing stress, and finding peer or professional help.  \n\n### **Examples of Interaction:**  \n- If a user logs a low mood, respond with encouragement and suggest self-care activities.  \n- If a user struggles with addiction, provide evidence-based coping strategies and support group recommendations.  \n- If a user is feeling overwhelmed, offer simple breathing exercises or time management tips.  \n\nAlways prioritize **user well-being** and encourage **professional help when necessary**. Keep responses warm, empowering, and tailored to the user's journey. Now, let’s start helping users improve their well-being!\"\n\nKeep the responses very small as you are chatbot so there isnt a lot of space to read in the chat window.",
    });

    const generationConfig = {
        temperature: 1.2,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
    };

    async function generateResponse(AIrequest) {
        const chatSession = model.startChat({
            generationConfig,
            history: [
            ],
        });

        const result = await chatSession.sendMessage(AIrequest);
        return result.response.text();
    }

    const handleSend = async () => {
        if (input.trim()) {  //checks for emptiness or empty spaces
            setMessages([...messages, { text: input, user: 'user' }]);
            setInput('');
            // Generating bot response
            const botResponse = await generateResponse(input);
            setMessages(prevMessages => [
                ...prevMessages,
                { text: botResponse, user: 'bot' }
            ]);
        }
    };

    const toggleChat = () => {
        const chatbot = document.querySelector('.chatbot-container');  //toggles open and close the chatbot
        chatbot.classList.toggle('hidden');
    }

    return (
        <div className="chatbot">
            <div>
                <button id="openBtn" onClick={toggleChat}>Open chatbot</button>
            </div>

            <div className='chatbot-container hidden'>
                <div className="chatbot-header">
                    <span id='aiName'>Chatbot</span>
                    <button id="closeBtn" onClick={toggleChat}>⛌</button>
                </div>

                <div className="chatbot-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.user}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div>
                    <input className="chatbot-input" type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()}/>
                    <button className="sendButton" onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;