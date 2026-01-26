# GFGBQ-Team-team-vibes-z
## Repository for team vibes z - Vibe Coding Hackathon
# CallShield AI – Near Real-Time Scam Call Detection System
#### Team Members:
#### Naveen Kumar T 
#### Ashwin Kumar A

### PROBLEM STATEMENT:
In an Era Characterized by the proliferation of voice-based communication channels, there has been a marked and alarming escalation in telephonic fraud schemes, wherein malicious actors employ sophisticated social engineering tactics—such as impersonation, fabricated urgency, and psychological manipulation—to exploit vulnerable demographics, including elderly individuals, digitally inexperienced users, and first-time internet adopters. Traditional fraud detection frameworks remain predominantly reactive, relying on post-transactional analysis or text-based signal processing, thereby offering negligible protection during live audio interactions where the majority of financial and emotional harm transpires. This critical gap in real-time intervention necessitates the development of an advanced, AI-driven audio intelligence system capable of dynamically analyzing vocal patterns, linguistic cues, and contextual markers during active calls to instantaneously identify fraudulent intent. Such a solution must not only detect and flag scam conversations as they occur but also proactively safeguard users through timely alerts, guided interventions, and automated protective measures, thereby mitigating both monetary loss and psychological distress while restoring trust in telephonic communication ecosystems.

There is a critical need for a system that can analyze call conversations in real time, identify scam intent early, and warn users before irreversible damage happens.

### MOTIVATION:
Rising number of OTP scams and banking fraud calls
Elderly and non-technical users are most vulnerable
Lack of real-time intelligence during phone calls
Existing solutions focus on post-transaction analysis
#### Our goal: Prevent fraud before money is lost.

### PROPOSED SOLUTION:

CallShield AI is an AI-powered system that performs near real-time scam call detection by analyzing voice conversations and identifying fraud patterns as the call progresses.

##### The system:
1.Processes call audio in small chunks
2.Detects scam intent using NLP techniques
3.Generates a dynamic risk score
4.Alerts users instantly when risk crosses a threshold
5.This approach enables early intervention, not post-incident reporting.

### SYSTEM WORKING (FLOW):
User uploads call audio (or simulated live chunks)
Backend stores audio securely
Speech-to-text converts audio to text (mocked for demo)
Fraud analyzer identifies scam tactics
Risk engine computes a confidence-based score
Frontend displays warnings and risk indicators

### KEY FEATURES

1.Near Real-Time Scam Detection
2.Audio-based fraud analysis
3.Explainable AI decisions
4.Dynamic risk scoring (SAFE / SUSPICIOUS / SCAM)
5.Cloud-deployed & publicly accessible
6.Modular, telecom-ready architecture
7.SYSTEM ARCHITECTURE


### Architecture Description :

##### CallShield AI follows a two-stage pipeline architecture:

###### Stage 1 – Audio Ingestion
The frontend uploads call audio to a cloud-hosted backend API. The backend stores the audio and prepares it for analysis.

###### Stage 2 – Intelligence & Risk Analysis
The backend processes the audio transcript through a fraud analyzer and a risk scoring engine. Results are sent back to the frontend in real time for user alerting.

Frontend and backend are deployed independently and communicate securely over HTTPS.

### ARCHITECTURE DIAGRAM PROMPT:

<img width="1076" height="469" alt="image" src="https://github.com/user-attachments/assets/36fa478c-e01c-4446-bcca-7d6a319a3ab8" />


### Working Flow Diagram:
<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/3153e2df-cfe8-4389-99cf-4dd0b64500a3" />


### SAMPLE DATA:
A synthetic scam call audio sample is included for testing:
Urgency
Bank impersonation
OTP request
This allows judges to test the system without external setup.

### TECHNOLOGY STACK:
Backend
Python
FastAPI
REST APIs
Modular service-based design
Frontend
HTML, CSS, JavaScript
Glassmorphism UI
3D visualization elements
Deployment
Backend: Render (Cloud)
Frontend: Netlify (CDN)


### DEPLOYMENT:

The application is fully deployed online and accessible via public URLs.
Frontend: Public web interface
Backend: Cloud-hosted API
This enables live demonstration without local setup.

### IMPACT & USE CASES:

Prevents financial fraud before damage occurs
Protects elderly and vulnerable users
Can integrate with telecom platforms
Suitable for banks, fintech apps, and call centers

### FUTURE ENHANCEMENTS

Live call streaming via telecom APIs (Twilio / Exotel)
Multilingual scam detection (English, Tamil, Hindi)
Mobile application integration
Federated learning for privacy preservation
Real-time voice waveform analysis

### Validation Working Model :
Home page
<img width="1895" height="879" alt="image" src="https://github.com/user-attachments/assets/bedffa6c-a44f-49b7-8bff-305b7d3a1fd0" />
upload the audio to check 
<img width="1859" height="874" alt="image" src="https://github.com/user-attachments/assets/9d609f97-294d-4caf-a004-e00ff842725b" />
Analysis the audio
<img width="1838" height="856" alt="image" src="https://github.com/user-attachments/assets/dfd633b3-03cd-400a-be3c-1f93ae191549" />
Demo analysis
<img width="1827" height="870" alt="image" src="https://github.com/user-attachments/assets/3abcdc01-2b17-432b-9fea-0d85d3940c79" />

### CONCLUSION

CallShield AI demonstrates how real-time intelligence can transform fraud prevention.
By detecting scam intent during calls, the system shifts fraud defense from reactive to preventive, making digital communication safer and more trustworthy.


