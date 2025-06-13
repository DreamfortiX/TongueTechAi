import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  BarChart,
  Stethoscope,
  Calendar
} from 'lucide-react';
import { HealthChatbot } from '../components/HealthChatbot';

export function PreviewPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const imageData = location.state?.image as string | undefined;
  const result = location.state?.result as {
    disease: string;
    confidence: number;
  } | undefined;

  if (!imageData || !result) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Image or Results Missing
          </h2>
          <p className="text-gray-600 mb-4">
            Please upload an image and try again.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const isCancer = result.disease?.toLowerCase() === 'cancer';

  const handleDownload = () => {
    const report = `
      Diagnosis Report
      ----------------
      Result     : ${result.disease}
      Confidence : ${result.confidence.toFixed(2)}%
      Date       : ${new Date().toLocaleString()}
    `;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'diagnosis_report.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(
      `Diagnosis Result: ${result.disease}\nConfidence: ${result.confidence.toFixed(2)}%`
    );
    alert('Copied report to clipboard. You can now paste it in your message to your doctor.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-gray-50 shadow-sm mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-900">
                  Uploaded Image
                </h2>
              </div>
              <div className="p-4">
                <img
                  src={imageData}
                  alt="Uploaded tongue"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Prediction */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-full ${
                      isCancer ? 'bg-red-100' : 'bg-green-100'
                    }`}
                  >
                    <CheckCircle
                      className={`w-8 h-8 ${
                        isCancer ? 'text-red-600' : 'text-green-600'
                      }`}
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {isCancer
                        ? 'Signs of Disease Detected'
                        : 'No Signs of Disease Detected'}
                    </h2>
                    <div className="mt-2 flex items-center">
                      <BarChart className="w-5 h-5 text-teal-600 mr-2" />
                      <span className="text-lg font-medium text-teal-600">
                        {result.confidence.toFixed(2)}% Confidence
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Steps */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recommended Next Steps
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {isCancer ? (
                  <>
                    <div className="flex items-start space-x-3">
                      <Stethoscope className="w-5 h-5 text-red-600 mt-1" />
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Consult a Specialist
                        </h5>
                        <p className="text-gray-600">
                          We recommend scheduling a medical consultation as
                          soon as possible.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-red-600 mt-1" />
                      <div>
                        <h5 className="font-medium text-gray-900">
                          Immediate Follow-up
                        </h5>
                        <p className="text-gray-600">
                          A follow-up scan is suggested within the next 2
                          weeks.
                        </p>

                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Stethoscope className="w-5 h-5 text-red-600 mt-1" />
                      <div>
                      <h5 className="font-medium text-gray-900">
                          Better Report
                        </h5>
                        <p className="text-gray-600">
                          Answer the Questions of Chatbot for better Report Generation
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-green-700 font-semibold text-lg">
                    ✅ Thank you for visiting! No further action is needed at
                    this time.
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleDownload}
                className="flex-1 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                Download Report
              </button>
              <button
                onClick={handleShare}
                className="flex-1 border border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors"
              >
                Share with Doctor
              </button>
            </div>

            {/* Show Chatbot only if Cancer */}
            {isCancer && <HealthChatbot />}
          </div>
        </div>
      </div>
    </div>
  );
}
