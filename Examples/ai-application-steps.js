// Step-by-step data - one action per step
const steps = [
    {
        title: "Step 1: Call AI Assistant",
        content: `
            <div class="step-text-content">
                <h4>Step 1: Call AI Assistant</h4>
                <p>Press Command + I to call AI assistant or click the AI icon in the bottom right corner</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/ai-application-images/ai-application-01.png" alt="AI Application Step 1" />
                </div>
                <div class="step-navigation">
                    <button class="nav-btn prev-btn" onclick="previousStep()" disabled>
                        ← Previous
                    </button>
                    <button class="nav-btn next-btn" onclick="nextStep()">
                        Next →
                    </button>
                </div>
            </div>
        `
    },
    {
        title: "Step 2: AI Assistant Activated",
        content: `
            <div class="step-text-content">
                <h4>Step 2: AI Assistant Activated</h4>
                <p>Successfully activate the AI assistant interface</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/ai-application-images/ai-application-02.png" alt="AI Application Step 2" />
                </div>
                <div class="step-navigation">
                    <button class="nav-btn prev-btn" onclick="previousStep()" disabled>
                        ← Previous
                    </button>
                    <button class="nav-btn next-btn" onclick="nextStep()">
                        Next →
                    </button>
                </div>
            </div>
        `
    },
    {
        title: "Step 3: Query Grafana Information",
        content: `
            <div class="step-text-content">
                <h4>Step 3: Query Grafana Information</h4>
                <p>Type "grafana" to query and view Grafana-related content</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/ai-application-images/ai-application-03.png" alt="AI Application Step 3" />
                </div>
                <div class="step-navigation">
                    <button class="nav-btn prev-btn" onclick="previousStep()" disabled>
                        ← Previous
                    </button>
                    <button class="nav-btn next-btn" onclick="nextStep()">
                        Next →
                    </button>
                </div>
            </div>
        `
    },
    {
        title: "Step 4: Get Grafana Information",
        content: `
            <div class="step-text-content">
                <h4>Step 4: Get Grafana Information</h4>
                <p>Successfully retrieve and display Grafana information</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/ai-application-images/ai-application-04.png" alt="AI Application Step 4" />
                </div>
                <div class="step-navigation">
                    <button class="nav-btn prev-btn" onclick="previousStep()" disabled>
                        ← Previous
                    </button>
                    <button class="nav-btn next-btn" onclick="nextStep()">
                        Next →
                    </button>
                </div>
            </div>
        `
    }
];

let currentStep = 0;

function updateStep() {
    // Update step content
    document.getElementById('step-content').innerHTML = steps[currentStep].content;
    
    // Add active class to trigger animations after a short delay
    setTimeout(() => {
        const textContent = document.querySelector('.step-text-content');
        const imageGroupContent = document.querySelector('.step-image-group');
        
        if (textContent) textContent.classList.add('active');
        if (imageGroupContent) imageGroupContent.classList.add('active');
    }, 50);
    
    // Update step number and progress
    document.getElementById('current-step-number').textContent = currentStep + 1;
    const progressPercent = ((currentStep + 1) / steps.length) * 100;
    document.getElementById('progress-fill').style.width = progressPercent + '%';
    
    // Update navigation buttons after content is loaded
    setTimeout(() => {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        if (prevBtn) {
            prevBtn.disabled = currentStep === 0;
        }
        
        if (nextBtn) {
            nextBtn.disabled = currentStep === steps.length - 1;
            if (currentStep === steps.length - 1) {
                nextBtn.textContent = 'Complete';
            } else {
                nextBtn.textContent = 'Next →';
            }
        }
    }, 60);
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
    }
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
}

// Initialize first step
document.addEventListener('DOMContentLoaded', function() {
    updateStep();
});