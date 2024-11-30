# **Modachi Fashion App: Evaluation Document**

This document serves as a guide to evaluate the features, code, and requirements of the Modachi Fashion App project.

---

## **Evaluation Criteria**

### **1. Prototype and Vision Document**
- **Description:**  
  Confirm the submission of the prototype and vision document detailing:  
  - The app's use case (What does it do?).  
  - APIs utilized, categorized as:
    - At least 3 Expo APIs covered in class.  
    - At least 1 new Expo API not covered in class.  
  - Risks or challenges faced during implementation.  
- **Verification Checklist:**  
  - [ ] Prototype demonstrates app functionality visually.  
  - [ ] Vision document outlines use case, APIs, and risks.  

---

### **2. Functional Requirements**
#### **a. Expo API Usage**
- **Criteria:**  
  - At least 3 Expo APIs from class content are implemented.  
    Examples: `expo-location`, `expo-camera`, `expo-image-picker`.  
  - At least 1 Expo API not covered in class is used.  
    Examples: `expo-web-browser`, `expo-sensors`.  
- **Verification Checklist:**  
  - [ ] 3 Expo APIs from class are fully functional.  
  - [ ] 1 new Expo API is correctly implemented.  

#### **b. React Native Alerts**
- **Criteria:**  
  - Alerts are used for error handling or notifications (e.g., successful data upload, invalid inputs).  
- **Verification Checklist:**  
  - [ ] Alerts are implemented where required.  

#### **c. Firebase Authentication**
- **Criteria:**  
  - Users can sign up, log in, and manage their accounts securely.  
- **Verification Checklist:**  
  - [ ] Firebase Auth is correctly configured and functional.  

#### **d. Firebase Firestore or Realtime Database**
- **Criteria:**  
  - Data is stored and retrieved securely using Firestore or Realtime DB.  
  - Example: Storing Virtual Closet items or Moodboard content.  
- **Verification Checklist:**  
  - [ ] Database integration is complete and functional.

#### **e. Modular Code Structure**
- **Criteria:**  
  - React Native components are logically divided.  
  - Example: Separate screens for `VirtualCloset`, `Moodboard`, `Trends`.  
- **Verification Checklist:**  
  - [ ] Code is modular and well-organized.  

#### **f. Error-Free and Functional**
- **Criteria:**  
  - App runs on both Android and iOS using `expo start`.  
  - Console errors are resolved, and error handling is graceful.  
- **Verification Checklist:**  
  - [ ] App compiles and runs on Android.  
  - [ ] App compiles and runs on iOS.  
  - [ ] Console logs are free of errors.

---

### **3. Features Checklist**
| **Feature**         | **Implemented (Y/N)** | **Notes**                    |
|----------------------|-----------------------|------------------------------|
| **Authentication**  |                       |                              |
| **Dashboard**       |                       |                              |
| **Virtual Closet**  |                       |                              |
| **Moodboard**       |                       |                              |
| **Trend Insights**  |                       |                              |
| **Collaboration Hub** |                     |                              |

---

### **4. Presentation Requirements**
#### **a. Walkthrough Video**
- **Criteria:**  
  - A video demonstrating how each requirement was solved and showcasing app functionality.
  - Video duration: 5 minutes or less.  
- **Verification Checklist:**  
  - [ ] Video showcases each requirement and code solution.  
  - [ ] App demonstration is included.

#### **b. PowerPoint Presentation**
- **Criteria:**  
  - Screenshots showcasing the app’s UI and key features.  
- **Verification Checklist:**  
  - [ ] Presentation highlights UI and functionality.  

#### **c. Code Submission**
- **Criteria:**  
  - Cleaned project code (without `node_modules`).  
- **Verification Checklist:**  
  - [ ] Code is organized and cleaned for submission.  

---

## **Total Marks**
| **Requirement**                               | **Marks Awarded** | **Possible Marks** |
|-----------------------------------------------|-------------------|--------------------|
| Utilize at least 3 Expo APIs                  |                   | 30                 |
| Utilize at least 1 new Expo API               |                   | 10                 |
| React Native Alerts are used                 |                   | 5                  |
| React Native code is logically divided        |                   | 15                 |
| Firebase Auth is utilized correctly           |                   | 10                 |
| Firebase Firestore or Realtime DB is used     |                   | 10                 |
| App is original, styled, and functional       |                   | 10                 |
| Prototype and vision document are provided    |                   | 5                  |
| Errors in the console are gracefully handled  |                   | Up to -20          |
| **Total**                                     |                   | 95                 |

---

This evaluation document can guide you through reviewing your implementation step-by-step. Let me know if you’d like to add anything further!