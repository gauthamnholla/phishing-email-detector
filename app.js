// Phishing Email Detector - JavaScript Functionality

// Sample email data
const emailSamples = {
    safe: `Subject: Team Meeting Tomorrow

Hi John,

Just a reminder that we have our weekly team meeting tomorrow at 2 PM in the conference room. Please bring your project updates and any questions you might have.

Let me know if you can't make it.

Best regards,
Sarah Johnson
Project Manager`,

    phishing: `Subject: URGENT: Your Account Will Be Suspended

Dear Customer,

Your account has been flagged for suspicious activity and will be SUSPENDED within 24 hours unless you verify your identity immediately.

CLICK HERE to verify: http://secure-bank-verify.net/login

Failure to act will result in permanent account closure.

Urgent action required!

Bank Security Team`,

    suspicious: `Subject: Congratulations! You've Won!

Hello,

You have been selected as a winner in our monthly drawing. You've won $5,000!

To claim your prize, please provide your banking details by replying to this email.

Congratulations again!

Promotion Team`
};

// Phishing indicators and safe indicators
const phishingIndicators = [
    'urgent', 'immediate', 'expire', 'suspended', 'verify', 'click', 'act now',
    'limited time', 'congratulations', 'winner', 'prize', 'free', 'guarantee',
    'security alert', 'account locked', 'unauthorized access', 'confirm identity',
    'expires', 'immediately', 'action required', 'click here', 'verify now',
    'account closure', 'flagged', 'suspicious activity', 'bank security',
    'update payment', 'confirm password', 'reactivate', 'suspended account',
    'temporary suspension', 'security breach', 'unusual activity'
];

const safeIndicators = [
    'meeting', 'reminder', 'update', 'project', 'team', 'schedule', 'regards',
    'sincerely', 'thank you', 'please let me know', 'best wishes', 'conference',
    'weekly', 'discussion', 'agenda', 'follow up', 'quarterly', 'department',
    'colleague', 'manager', 'office', 'presentation', 'report'
];

// Model information (simulated)
const modelInfo = {
    accuracy: 94.2,
    precision: 93.8,
    recall: 94.6,
    f1Score: 94.2,
    bestModel: 'Random Forest',
    features: 'TF-IDF Vectorization (5000 features)'
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const emailInput = document.getElementById('emailInput');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const btnText = document.querySelector('.btn-text');
    const btnLoading = document.querySelector('.btn-loading');
    const resultsSection = document.getElementById('resultsSection');
    const predictionBadge = document.getElementById('predictionBadge');
    const predictionLabel = document.getElementById('predictionLabel');
    const confidenceText = document.getElementById('confidenceText');
    const confidenceFill = document.getElementById('confidenceFill');
    const confidencePercentage = document.getElementById('confidencePercentage');
    const indicatorsList = document.getElementById('indicatorsList');
    const processingTime = document.getElementById('processingTime');

    // Sample email buttons
    const loadSafeEmailBtn = document.getElementById('loadSafeEmail');
    const loadPhishingEmailBtn = document.getElementById('loadPhishingEmail');
    const loadSuspiciousEmailBtn = document.getElementById('loadSuspiciousEmail');

    // Event listeners for sample email buttons
    loadSafeEmailBtn.addEventListener('click', () => {
        emailInput.value = emailSamples.safe;
        emailInput.focus();
    });

    loadPhishingEmailBtn.addEventListener('click', () => {
        emailInput.value = emailSamples.phishing;
        emailInput.focus();
    });

    loadSuspiciousEmailBtn.addEventListener('click', () => {
        emailInput.value = emailSamples.suspicious;
        emailInput.focus();
    });

    // Main analyze function
    analyzeBtn.addEventListener('click', async function() {
        const emailText = emailInput.value.trim();
        
        if (!emailText) {
            alert('Please enter some email content to analyze.');
            return;
        }

        // Start analysis
        startAnalysis();
        
        // Simulate processing time
        const startTime = Date.now();
        await new Promise(resolve => setTimeout(resolve, 2000));
        const endTime = Date.now();
        const processingTimeMs = endTime - startTime;

        // Analyze the email
        const analysis = analyzeEmail(emailText);
        
        // Display results
        displayResults(analysis, processingTimeMs);
    });

    function startAnalysis() {
        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        analyzeBtn.disabled = true;
        
        // Hide previous results
        resultsSection.style.display = 'none';
        
        // Scroll to button
        analyzeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function analyzeEmail(emailText) {
        const text = emailText.toLowerCase();
        
        // Find phishing indicators
        const foundPhishingIndicators = phishingIndicators.filter(indicator => 
            text.includes(indicator.toLowerCase())
        );
        
        // Find safe indicators
        const foundSafeIndicators = safeIndicators.filter(indicator => 
            text.includes(indicator.toLowerCase())
        );
        
        // Additional suspicious patterns
        const suspiciousPatterns = [
            /http:\/\/[^\/]*(?:secure|bank|verify|login|account)[^\/]*\.[^\/]+/gi,
            /click\s+here/gi,
            /urgent.*(?:action|response)/gi,
            /account.*(?:suspended|locked|flagged)/gi,
            /verify.*(?:immediately|now|account)/gi
        ];
        
        const foundSuspiciousPatterns = suspiciousPatterns.filter(pattern => 
            pattern.test(emailText)
        );
        
        // Calculate risk score
        let riskScore = 0;
        
        // Add points for phishing indicators
        riskScore += foundPhishingIndicators.length * 15;
        
        // Add points for suspicious patterns
        riskScore += foundSuspiciousPatterns.length * 20;
        
        // Subtract points for safe indicators (but not below 0)
        riskScore = Math.max(0, riskScore - (foundSafeIndicators.length * 8));
        
        // Additional risk factors
        if (text.includes('dear customer') || text.includes('dear user')) {
            riskScore += 10;
        }
        
        if (text.includes('limited time') || text.includes('expires soon')) {
            riskScore += 15;
        }
        
        if (text.includes('congratulations') && (text.includes('winner') || text.includes('prize'))) {
            riskScore += 25;
        }
        
        // Cap the score at 100
        riskScore = Math.min(100, riskScore);
        
        // Determine classification
        let classification, confidence;
        if (riskScore >= 60) {
            classification = 'phishing';
            confidence = Math.min(95, 70 + (riskScore - 60) * 0.6);
        } else if (riskScore >= 30) {
            classification = 'suspicious';
            confidence = Math.min(85, 50 + riskScore * 0.8);
        } else {
            classification = 'safe';
            confidence = Math.min(92, 85 - riskScore * 2);
        }
        
        return {
            classification,
            confidence: Math.round(confidence),
            riskScore,
            phishingIndicators: foundPhishingIndicators,
            safeIndicators: foundSafeIndicators,
            suspiciousPatterns: foundSuspiciousPatterns.length
        };
    }

    function displayResults(analysis, processingTimeMs) {
        // Hide loading state
        btnLoading.style.display = 'none';
        btnText.style.display = 'flex';
        analyzeBtn.disabled = false;
        
        // Show results section
        resultsSection.style.display = 'block';
        
        // Update prediction badge
        predictionBadge.className = `prediction-badge ${analysis.classification}`;
        
        let labelText, confidenceTextContent;
        switch (analysis.classification) {
            case 'phishing':
                labelText = '🚨 PHISHING DETECTED';
                confidenceTextContent = 'High risk - This appears to be a phishing attempt';
                break;
            case 'suspicious':
                labelText = '⚠️ SUSPICIOUS';
                confidenceTextContent = 'Medium risk - Exercise caution with this email';
                break;
            case 'safe':
                labelText = '✅ APPEARS SAFE';
                confidenceTextContent = 'Low risk - This appears to be a legitimate email';
                break;
        }
        
        predictionLabel.textContent = labelText;
        confidenceText.textContent = confidenceTextContent;
        
        // Update confidence meter
        confidenceFill.style.width = `${analysis.confidence}%`;
        confidencePercentage.textContent = `${analysis.confidence}%`;
        
        // Update indicators
        updateIndicators(analysis);
        
        // Update processing time
        processingTime.textContent = `${processingTimeMs}ms`;
        
        // Scroll to results
        setTimeout(() => {
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    function updateIndicators(analysis) {
        indicatorsList.innerHTML = '';
        
        // Add phishing indicators
        analysis.phishingIndicators.forEach(indicator => {
            const tag = document.createElement('span');
            tag.className = 'indicator-tag phishing';
            tag.textContent = `🚨 ${indicator}`;
            indicatorsList.appendChild(tag);
        });
        
        // Add safe indicators
        analysis.safeIndicators.forEach(indicator => {
            const tag = document.createElement('span');
            tag.className = 'indicator-tag safe';
            tag.textContent = `✅ ${indicator}`;
            indicatorsList.appendChild(tag);
        });
        
        // Add suspicious pattern info
        if (analysis.suspiciousPatterns > 0) {
            const tag = document.createElement('span');
            tag.className = 'indicator-tag phishing';
            tag.textContent = `🔗 ${analysis.suspiciousPatterns} suspicious link(s)`;
            indicatorsList.appendChild(tag);
        }
        
        // If no indicators found
        if (analysis.phishingIndicators.length === 0 && 
            analysis.safeIndicators.length === 0 && 
            analysis.suspiciousPatterns === 0) {
            const tag = document.createElement('span');
            tag.className = 'indicator-tag';
            tag.style.background = '#f3f4f6';
            tag.style.color = '#6b7280';
            tag.textContent = 'ℹ️ No specific indicators detected';
            indicatorsList.appendChild(tag);
        }
    }

    // Add some sample content on page load
    emailInput.placeholder = `Paste your email content here... 

Try clicking one of the sample email buttons above to see how the detector works!

Example:
Subject: Your account verification needed
Dear customer, your account will be suspended unless you verify...`;
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to sample buttons
    const sampleButtons = document.querySelectorAll('.sample-buttons .btn');
    sampleButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add typing effect to placeholder (optional enhancement)
    const emailInput = document.getElementById('emailInput');
    emailInput.addEventListener('focus', function() {
        if (this.value === '') {
            this.style.borderColor = '#3b82f6';
        }
    });

    emailInput.addEventListener('blur', function() {
        this.style.borderColor = '#e2e8f0';
    });
});