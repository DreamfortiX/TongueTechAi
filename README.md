TongueTechAI - Tongue Cancer Detection System
Project Overview
TongueTechAI is an AI-powered web application that detects early signs of tongue cancer through non-invasive tongue image analysis. Combining deep learning with medical diagnostics, the system helps identify potential malignant features and provides risk assessment with actionable insights.

Visual Demonstration
1. Main Interface
<img src="https://github.com/DreamfortiX/TongueTechAi/blob/main/TONGUE1.png" width="500" alt="Main Interface">
2. Cancer Detection Analysis
<img src="https://github.com/DreamfortiX/TongueTechAi/blob/main/TONGUE2.png" width="500" alt="Analysis Screen">
3. Results & Recommendations
<img src="https://github.com/DreamfortiX/TongueTechAi/blob/main/TONGU32.png" width="500" alt="Results Screen">

Key Features
✔ AI-Powered Cancer Detection – Uses YOLOv4-tiny (for lesion detection) and DenseNet-121 (for malignancy classification).
✔ Early Risk Assessment – Identifies suspicious lesions, discolorations, and abnormal textures.
✔ Medical Guidance Integration – Recommends next steps (doctor consultation, biopsy advice).
✔ Interactive Chatbot – Voiceflow-powered assistant explains results in simple terms.
✔ Secure & Private – Encrypted data storage compliant with HIPAA/GDPR.

Technology Stack
AI/ML Models
YOLOv4-tiny (Real-time lesion detection)

DenseNet-121 (Malignancy probability scoring)

XGBoost (Risk factor analysis)

Backend
Node.js + Express.js (API & server logic)

MongoDB (Secure patient data storage)

Frontend
React.js (Responsive UI)

Material-UI (Styling & components)

Additional Tools
OpenCV (Image preprocessing)

Voiceflow (AI chatbot for user guidance)

Installation & Setup
Prerequisites
Python 3.8+

Node.js 16+

MongoDB Atlas / Local MongoDB

1. Clone the Repository
bash
git clone https://github.com/DreamfortiX/TongueTechAi.git
2. Set Up Backend
bash
cd project
py -m uvicorn main:app --reload
3. Set Up Frontend
bash
cd project
npm install
npm run dev  # Runs on http://localhost:3000
Dataset & Training
Curated Tongue Cancer Dataset (5,000+ annotated images)

Features:

Lesion borders

Color asymmetry

Ulceration patterns

Augmentation: Rotation, flipping, contrast adjustments

Performance Metrics
Model	Accuracy	Precision	Recall	F1-Score
YOLOv4-tiny	92.3%	89.5%	91.2%	90.3%
DenseNet-121	94.7%	93.1%	94.0%	93.5%
XGBoost	91.8%	90.6%	92.4%	91.5%
Future Work
🔹 Mobile App Integration (iOS/Android)
🔹 3D Tongue Scanning Support
🔹 Multi-Language Chatbot
🔹 Integration with EHR Systems

Contributors
Naseeb Sultan (@DreamfortiX)
Aoun Abbas
Manahil Fatima
License
This project is licensed under the MIT License.
