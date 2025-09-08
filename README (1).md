# 🛡️ Phishing Email Detector

An AI-powered cybersecurity tool that uses machine learning concepts and advanced text analysis to detect phishing emails in real-time.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/Made_with-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/Styled_with-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Powered_by-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

### 🔗 **[View Live Demo](https://gauthamnholla.github.io/phishing-email-detector)**

---

## 🎯 Project Overview

This project is a sophisticated phishing email detection system built for both educational purposes and practical cybersecurity awareness. It simulates a machine learning pipeline to analyze email content, identify malicious patterns, and classify emails as **Safe**, **Suspicious**, or **Phishing**. The goal is to provide a hands-on demonstration of how modern cybersecurity tools operate, all within a clean and interactive web interface.

## ✨ Key Features

-   🤖 **AI-Powered Analysis**: Simulates TF-IDF vectorization and ensemble ML models (Random Forest, SVM) to score email risk.
-   📊 **Real-time Analytics**: Delivers instant confidence scores, highlights risk indicators, and provides technical insights.
-   🎨 **Interactive UI/UX**: A clean, professional, and responsive user interface for a seamless experience on any device.
-   🎓 **Educational Insights**: Includes built-in tips and explanations to help users learn how to spot phishing attempts manually.
-   ⚡ **Instant Processing**: Analyzes email content in real-time with clear visual feedback and results.

## 🛠️ Tech Stack & Concepts

| Category      | Technologies & Concepts                                |
| :------------ | :----------------------------------------------------- |
| **Frontend**  | `HTML5`, `CSS3` (Flexbox, Grid), `JavaScript (ES6+)`  |
| **ML Concepts** | `TF-IDF Vectorization`, `Random Forest`, `SVM`, `Logistic Regression` |
| **Design**    | Responsive Design, Mobile-First Principles             |
| **Hosting**   | GitHub Pages (or any static site hosting)                |

## 🔍 How It Works

The detection process follows a simulated machine learning pipeline broken down into four main stages:

**1. Text Preprocessing & Normalization**
   -   The input email text is converted to lowercase to ensure case-insensitivity.
   -   Punctuation and special characters are handled to prepare the text for analysis.

**2. Feature Extraction & Indicator Analysis**
   -   **Keyword Analysis**: The system scans for common phishing keywords (`urgent`, `verify`, `password`, `account suspended`) and legitimate keywords (`newsletter`, `update`).
   -   **Pattern Recognition**: It simulates TF-IDF by assigning weights to words based on their frequency and relevance to known phishing patterns.

**3. Risk Scoring & Classification**
   -   A confidence score is calculated based on the number and severity of detected indicators.
   -   The email is classified into one of three categories:
        -   🟢 **Safe**: No significant risk factors detected.
        -   🟡 **Suspicious**: Contains some potential red flags that warrant caution.
        -   🔴 **Phishing**: High probability of being a malicious email.

**4. Results Visualization**
   -   The final classification, confidence score, and a list of detected indicators are presented to the user in an easy-to-understand format.

## 🚀 Getting Started

### Prerequisites
-   A modern web browser (e.g., Chrome, Firefox, Safari).
-   [Git](https://git-scm.com/) installed on your local machine.

### Installation & Setup

1.  **Clone the repository to your local machine:**
    ```
    git clone https://github.com/gauthamnholla/phishing-email-detector.git
    ```

2.  **Navigate to the project directory:**
    ```
    cd phishing-email-detector
    ```

3.  **Open `index.html` in your web browser.**
    -   You can simply double-click the `index.html` file, or if you have a local server extension (like Live Server in VS Code), you can use that.



## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/NewFeature`)
3.  Commit your Changes (`git commit -m 'Add some NewFeature'`)
4.  Push to the Branch (`git push origin feature/NewFeature`)
5.  Open a Pull Request

Please ensure your code follows the existing style and that you test your changes thoroughly.

## 📄 License

This project is distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

**Gautham N Holla**

-   **GitHub**: [@gauthamnholla](https://github.com/gauthamnholla)
-   **LinkedIn**: [in/gauthamnholla](https://www.linkedin.com/in/gauthamnholla/)
-   **Email**: [gauthamnholla@gmail.com](mailto:gauthamnholla@gmail.com)

---

**⭐ If you found this project useful, please consider giving it a star! ⭐**
