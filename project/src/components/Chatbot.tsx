import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, ChevronRight } from 'lucide-react';

interface Message {
  id: string; // Changed from number to string to ensure uniqueness
  text: string;
  sender: 'bot' | 'user';
  options?: string[];
}

const initialQuestions: (Message | ((prevResponse: string) => Message))[] = [
  {
    id: 'q1',
    text: "Hi there, I'd like to ask you a few questions to better understand your situation. What's your name?",
    sender: 'bot'
  },
  (prevResponse) => ({
    id: 'q2',
    text: `Nice to meet you, ${prevResponse}. How old are you?`,
    sender: 'bot',
    options: ['Under 18', '18-30', '31-45', '46-60', 'Over 60']
  }),
  {
    id: 'q3',
    text: "Have you noticed any pain or discomfort in your tongue or mouth?",
    sender: 'bot',
    options: ['Yes, severe pain', 'Yes, mild discomfort', 'Occasional discomfort', 'No pain at all']
  },
  {
    id: 'q4',
    text: "How long have you had these symptoms?",
    sender: 'bot',
    options: ['Less than a week', '1-4 weeks', '1-3 months', 'More than 3 months', 'Not applicable']
  },
  {
    id: 'q5',
    text: "Do you have any history of oral cancer in your family?",
    sender: 'bot',
    options: ['Yes', 'No', 'Not sure']
  },
  {
    id: 'q6',
    text: "Do you smoke or consume alcohol regularly?",
    sender: 'bot',
    options: ['I smoke regularly', 'I drink regularly', 'Both smoking and drinking', 'Occasionally', 'Neither']
  },
  {
    id: 'q7',
    text: "Have you noticed any changes in your tongue's appearance recently?",
    sender: 'bot',
    options: ['Color changes', 'Texture changes', 'Swelling', 'Unusual spots', 'Multiple changes', 'No changes']
  },
  {
    id: 'q8',
    text: "Based on your responses, I recommend consulting with a healthcare professional as soon as possible. They can provide a proper diagnosis and treatment plan. Would you like me to provide information about specialists in your area?",
    sender: 'bot',
    options: ['Yes, please', 'No, thank you']
  }
];

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { ...initialQuestions[0] as Message }
  ]);
  const [input, setInput] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [lastResponse, setLastResponse] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (text: string = input) => {
    if (text.trim() === '') return;

    // Save the response for potential use in next question
    setLastResponse(text);
    
    // Add user message with a unique ID
    const newUserMessage: Message = {
      id: `user-${Date.now()}`, // Ensure unique ID with timestamp
      text: text,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setShowOptions(false);

    // Add bot response after a short delay
    setTimeout(() => {
      if (currentQuestion < initialQuestions.length) {
        const nextQuestion = initialQuestions[currentQuestion];
        let newBotMessage: Message;
        
        if (typeof nextQuestion === 'function') {
          newBotMessage = nextQuestion(text);
        } else {
          newBotMessage = { ...nextQuestion };
        }
        
        // Ensure the bot message has a unique ID
        if (typeof newBotMessage.id === 'string' && messages.some(m => m.id === newBotMessage.id)) {
          newBotMessage.id = `${newBotMessage.id}-${Date.now()}`;
        }
        
        setMessages(prev => [...prev, newBotMessage]);
        setCurrentQuestion(prev => prev + 1);
        
        if (newBotMessage.options && newBotMessage.options.length > 0) {
          setShowOptions(true);
        }
      }
    }, 1000);
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[500px] border rounded-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-xl p-4 shadow-sm ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                    : 'bg-white border border-indigo-100 text-gray-800'
                } animate-fadeIn`}
              >
                <div className="flex items-start">
                  {message.sender === 'bot' && (
                    <Bot className="mr-2 mt-1 text-indigo-600 flex-shrink-0" size={18} />
                  )}
                  {message.sender === 'user' && (
                    <User className="mr-2 mt-1 text-white flex-shrink-0" size={18} />
                  )}
                  <p className="leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {showOptions && messages[messages.length - 1].options && (
        <div className="bg-white p-3 border-t border-indigo-100">
          <p className="text-sm text-indigo-700 mb-2 font-medium">Choose an option:</p>
          <div className="flex flex-wrap gap-2">
            {messages[messages.length - 1].options?.map((option, index) => (
              <button
                key={`option-${index}-${option.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => handleOptionClick(option)}
                className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-3 py-2 rounded-lg text-sm font-medium transition flex items-center"
              >
                {option}
                <ChevronRight size={16} className="ml-1" />
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="border-t bg-white p-4">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your response..."
            className="flex-1 border border-indigo-200 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button
            onClick={() => handleSendMessage()}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-4 rounded-r-lg transition"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;