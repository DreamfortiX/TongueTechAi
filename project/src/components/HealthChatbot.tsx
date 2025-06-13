import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, Download, User, Bot } from 'lucide-react';
import { PathologyReport } from './report';

type Message = {
  id: string;
  type: 'bot' | 'user';
  content: string | React.ReactNode;
  options?: string[];
};

type HealthData = {
  name?: string;
  dob?: string;
  sex?: string;
  race?: string;
  address?: string;
  tin?: string;
  age?: string;
  pain?: string;
  symptomDuration?: string;
  familyHistory?: string;
  lifestyle?: string;
  tongueChanges?: string;
  difficultySwallowing?: string;
  difficultySpeaking?: string;
  difficultyTasting?: string;
  lesionLocation?: string;
  lesionSize?: string;
  lesionColor?: string;
  lesionShape?: string;
  lesionDuration?: string;
  previousBiopsy?: string;
  medicalConditions?: string;
  medications?: string;
};

export function HealthChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your oral pathology assistant. To provide better insights, I'd like to ask you a few questions. What's your name?",
    },
  ]);
  const [input, setInput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [healthData, setHealthData] = useState<HealthData>({});
  const [isChatComplete, setIsChatComplete] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const questions = [
    {
      question: "What is your date of birth? (MM/DD/YYYY)",
    },
    {
      question: "What is your sex?",
      options: ['Male', 'Female', 'Other'],
    },
    {
      question: "What is your race/ethnicity?",
      options: ['White', 'Black or African American', 'Asian', 'Hispanic or Latino', 'Native American', 'Other'],
    },
    {
      question: "What is your address? (Street, City, State, ZIP)",
    },
    {
      question: "Do you have a Tax Identification Number (TIN)? If yes, please provide.",
    },
    {
      question: "Have you noticed any pain or discomfort in your tongue or mouth?",
      options: ['Yes, severe pain', 'Yes, mild discomfort', 'Occasional discomfort', 'No pain at all'],
    },
    {
      question: "How long have you had these symptoms?",
      options: ['Less than a week', '1-4 weeks', '1-3 months', 'More than 3 months'],
    },
    {
      question: "Do you have any history of oral cancer in your family?",
      options: ['Yes', 'No', 'Not sure'],
    },
    {
      question: "Do you smoke or consume alcohol regularly?",
      options: ['I smoke regularly', 'I drink regularly', 'Both smoking and drinking', 'Occasionally', 'Neither'],
    },
    {
      question: "Have you noticed any changes in your tongue's appearance recently?",
      options: ['Color changes', 'Texture changes', 'Swelling', 'Unusual spots', 'Multiple changes', 'No changes'],
    },
    {
      question: "Have you noticed any difficulty swallowing or eating?",
      options: ['Yes', 'No'],
    },
    {
      question: "Have you noticed any difficulty speaking or articulating words?",
      options: ['Yes', 'No'],
    },
    {
      question: "Have you noticed any difficulty tasting food?",
      options: ['Yes', 'No'],
    },
    {
      question: "Where is the lesion located?",
      options: ['Tongue', 'Gums', 'Soft palate', 'Hard palate', 'Cheek', 'Lips', 'Other'],
    },
    {
      question: "What is the approximate size of the lesion?",
      options: ['Less than 0.5 cm', '0.5-1 cm', '1-2 cm', 'More than 2 cm'],
    },
    {
      question: "What color is the lesion?",
      options: ['White', 'Red', 'Mixed white and red', 'Brown', 'Black', 'Other'],
    },
    {
      question: "What is the shape of the lesion?",
      options: ['Flat', 'Raised', 'Ulcerated', 'Warty', 'Other'],
    },
    {
      question: "How long has the lesion been present?",
      options: ['Less than a week', '1-4 weeks', '1-3 months', 'More than 3 months'],
    },
    {
      question: "Have you had a previous biopsy of this lesion?",
      options: ['Yes', 'No'],
    },
    {
      question: "Do you have any other medical conditions?",
    },
    {
      question: "Are you currently taking any medications?",
    },
    {
      question: "Thank you for providing this information. Would you like to view your pathology report?",
      options: ['Yes, view report', 'No, thank you'],
    },
  ];

  const handleSendMessage = (selectedOption?: string) => {
    let userInput = selectedOption || input.trim();
    if (!userInput && currentStep === 0) return;

    const newMessages: Message[] = [...messages];

    if (currentStep === 0) {
      // User name
      newMessages.push({
        id: Date.now().toString(),
        type: 'user',
        content: userInput,
      });
      setHealthData((prev) => ({ ...prev, name: userInput }));
      
      // Push the next question after setting the name
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: questions[currentStep].question,
        }]);
      }, 100);
    } else {
      newMessages.push({
        id: Date.now().toString(),
        type: 'user',
        content: userInput,
      });
    
      // Update health data based on step
      switch (currentStep) {
        case 1:
          setHealthData((prev) => ({ ...prev, dob: userInput }));
          break;
        case 2:
          setHealthData((prev) => ({ ...prev, sex: userInput }));
          break;
        case 3:
          setHealthData((prev) => ({ ...prev, race: userInput }));
          break;
        case 4:
          setHealthData((prev) => ({ ...prev, address: userInput }));
          break;
        case 5:
          setHealthData((prev) => ({ ...prev, tin: userInput }));
          break;
        case 6:
          setHealthData((prev) => ({ ...prev, pain: userInput }));
          break;
        case 7:
          setHealthData((prev) => ({ ...prev, symptomDuration: userInput }));
          break;
        case 8:
          setHealthData((prev) => ({ ...prev, familyHistory: userInput }));
          break;
        case 9:
          setHealthData((prev) => ({ ...prev, lifestyle: userInput }));
          break;
        case 10:
          setHealthData((prev) => ({ ...prev, tongueChanges: userInput }));
          break;
        case 11:
          setHealthData((prev) => ({ ...prev, difficultySwallowing: userInput }));
          break;
        case 12:
          setHealthData((prev) => ({ ...prev, difficultySpeaking: userInput }));
          break;
        case 13:
          setHealthData((prev) => ({ ...prev, difficultyTasting: userInput }));
          break;
        case 14:
          setHealthData((prev) => ({ ...prev, lesionLocation: userInput }));
          break;
        case 15:
          setHealthData((prev) => ({ ...prev, lesionSize: userInput }));
          break;
        case 16:
          setHealthData((prev) => ({ ...prev, lesionColor: userInput }));
          break;
        case 17:
          setHealthData((prev) => ({ ...prev, lesionShape: userInput }));
          break;
        case 18:
          setHealthData((prev) => ({ ...prev, lesionDuration: userInput }));
          break;
        case 19:
          setHealthData((prev) => ({ ...prev, previousBiopsy: userInput }));
          break;
        case 20:
          setHealthData((prev) => ({ ...prev, medicalConditions: userInput }));
          break;
        case 21:
          setHealthData((prev) => ({ ...prev, medications: userInput }));
          break;
        case 22:
          if (userInput === 'Yes, view report') {
            setShowReport(true);
          }
          setIsChatComplete(true);
          break;
      }
    
      // Ask next question or show summary
      if (currentStep < questions.length - 1) {
        setTimeout(() => {
          setMessages(prev => [...prev, {
            id: (Date.now() + 1).toString(),
            type: 'bot',
            content: questions[currentStep + 1].question,
            options: questions[currentStep + 1].options,
          }]);
        }, 100);
      }
    }    

    setMessages(newMessages);
    setInput('');
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  const handleEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const downloadHealthReport = () => {
    const reportLines: string[] = [];
  
    reportLines.push("Tongue Tech Ai CONSULTANTS - HEALTH PROFILE REPORT");
    reportLines.push("---------------------------------------");
    reportLines.push(`Date: ${new Date().toLocaleDateString()}`);
    reportLines.push("");

  
    reportLines.push("Patient Information Summary:");
    reportLines.push(`- Name: ${healthData.name || 'Not specified'}`);
    reportLines.push(`- Date of Birth: ${healthData.dob || 'Not specified'}`);
    reportLines.push(`- Sex: ${healthData.sex || 'Not specified'}`);
    reportLines.push(`- Race/Ethnicity: ${healthData.race || 'Not specified'}`);
    reportLines.push(`- Address: ${healthData.address || 'Not specified'}`);
    reportLines.push(`- TIN: ${healthData.tin || 'Not specified'}`);
    reportLines.push(`- Pain/Discomfort: ${healthData.pain || 'Not specified'}`);
    reportLines.push(`- Duration: ${healthData.symptomDuration || 'Not specified'}`);
    reportLines.push(`- Family History: ${healthData.familyHistory || 'Not specified'}`);
    reportLines.push(`- Lifestyle: ${healthData.lifestyle || 'Not specified'}`);
    reportLines.push(`- Tongue Changes: ${healthData.tongueChanges || 'Not specified'}`);
    reportLines.push(`- Difficulty Swallowing: ${healthData.difficultySwallowing || 'Not specified'}`);
    reportLines.push(`- Difficulty Speaking: ${healthData.difficultySpeaking || 'Not specified'}`);
    reportLines.push(`- Difficulty Tasting: ${healthData.difficultyTasting || 'Not specified'}`);
    reportLines.push(`- Lesion Location: ${healthData.lesionLocation || 'Not specified'}`);
    reportLines.push(`- Lesion Size: ${healthData.lesionSize || 'Not specified'}`);
    reportLines.push(`- Lesion Color: ${healthData.lesionColor || 'Not specified'}`);
    reportLines.push(`- Lesion Shape: ${healthData.lesionShape || 'Not specified'}`);
    reportLines.push(`- Lesion Duration: ${healthData.lesionDuration || 'Not specified'}`);
    reportLines.push(`- Previous Biopsy: ${healthData.previousBiopsy || 'Not specified'}`);
    reportLines.push(`- Medical Conditions: ${healthData.medicalConditions || 'Not specified'}`);
    reportLines.push(`- Medications: ${healthData.medications || 'Not specified'}`);
    reportLines.push("");
  
    reportLines.push("Clinical Recommendations:");
    reportLines.push("- Consultation with an oral pathologist is recommended for further evaluation.");
    reportLines.push("- Consider biopsy if lesion persists for more than 2 weeks.");
    reportLines.push("- Maintain good oral hygiene and avoid irritants like tobacco and alcohol.");
    reportLines.push("- Monitor the lesion for any changes in size, color, or symptoms.");
    reportLines.push("- Follow up with your dentist or oral surgeon as recommended.");
    reportLines.push("");
  
    const report = reportLines.join('\n');
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'oral-pathology-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generatePathologyReportData = () => {
    return {
      patientData: {
        name: healthData.name || 'Not specified',
        dob: healthData.dob || 'Not specified',
        sex: healthData.sex || 'Not specified',
        race: healthData.race || 'Not specified',
        address: healthData.address || 'Not specified',
        tin: healthData.tin || 'Not specified',
      },
      reportData: {
        accessionNumber: `PAT-${Math.floor(1000 + Math.random() * 9000)}`,
        dateReceived: new Date().toLocaleDateString(),
        dateOfReport: new Date().toLocaleDateString(),
        grossDescription: `Lesion located at ${healthData.lesionLocation || 'oral cavity'} measuring approximately ${healthData.lesionSize || 'unknown size'}. Color: ${healthData.lesionColor || 'not specified'}. Shape: ${healthData.lesionShape || 'not specified'}.`,
        diagnosis: healthData.tongueChanges ? `Oral lesion with ${healthData.tongueChanges}` : 'Oral lesion, unspecified',
        diagnosisCode: "K13.29",
        cptCode: "88305",
        location: healthData.lesionLocation || 'Oral cavity, unspecified',
        comments: [
          "Microscopic examination shows epithelial changes consistent with clinical findings.",
          "Clinical correlation is recommended.",
          healthData.familyHistory === 'Yes' ? "Positive family history of oral cancer noted. Increased surveillance recommended." : "",
          healthData.lifestyle?.includes('smoke') ? "Patient reports tobacco use. Smoking cessation counseling recommended." : "",
        ].filter(Boolean),
        slidesReviewed: "3 slides with 5 sections",
      },
      pathologist: {
        name: "Dr. Rania Younis",
        credentials: "BDS, MDS, PhD",
      },
    };
  };

  if (showReport) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setShowReport(false)}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200"
          >
            Back to Chat
          </button>
          <button
            onClick={downloadHealthReport}
            className="flex items-center px-4 py-2 bg-white text-teal-800 border border-teal-600 rounded-lg hover:bg-gray-50 transition duration-200"
          >
            <Download className="w-5 h-5 mr-2" /> Download Report
          </button>
        </div>
        <PathologyReport {...generatePathologyReportData()} />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto">
      <div className="p-5 border-b bg-gradient-to-r from-teal-500 to-teal-600 text-white flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-6 h-6" />
          <h3 className="text-lg font-semibold">Oral Pathology Assistant</h3>
        </div>
        {isChatComplete && (
          <button
            onClick={() => setShowReport(true)}
            className="flex items-center px-4 py-2 text-teal-800 bg-white hover:bg-gray-100 rounded-lg shadow-md transition duration-200"
          >
            View Report
          </button>
        )}
      </div>

      <div ref={chatContainerRef} className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'bg-teal-100' : 'bg-gray-100'}`}>
                {message.type === 'user' ? <User className="w-5 h-5 text-teal-600" /> : <Bot className="w-5 h-5 text-teal-600" />}
              </div>
              <div className={`rounded-lg p-3 ${message.type === 'user' ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                {message.content}
                {message.options && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.options.map((option) => (
                      <button 
                        key={option} 
                        onClick={() => handleOptionClick(option)} 
                        className="px-3 py-1 text-sm bg-white text-gray-700 rounded-full hover:bg-gray-50 border border-gray-200 transition duration-150"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {!isChatComplete && (
        <div className="p-4 border-t flex items-center bg-white">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Type your response..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEnterPress}
          />
          <button
            onClick={() => handleSendMessage()}
            className="ml-2 p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200 flex items-center justify-center"
            disabled={!input.trim() && currentStep === 0}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}