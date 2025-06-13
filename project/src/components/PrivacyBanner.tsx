import { Shield, Lock, Server } from 'lucide-react';

export function PrivacyBanner() {
  return (
    <div className="bg-gradient-to-r from-teal-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Your Privacy Matters</h2>
          <p className="mt-4 text-lg text-gray-600">We take data security seriously and protect your information</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Uploads</h3>
            <p className="text-gray-600">All image uploads are encrypted using industry-standard SSL/TLS protocols</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Protection</h3>
            <p className="text-gray-600">Your medical data is protected and never shared with third parties</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <Server className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Storage</h3>
            <p className="text-gray-600">Images are automatically deleted after analysis for your privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
}