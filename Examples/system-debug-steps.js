// Step-by-step data for System Debug Search Function
const steps = [
    {
        title: "Step 1: Click Cluster Overview",
        content: `
            <div class="step-text-content">
                <h4>Step 1: Click Cluster Overview</h4>
                <p>Click on Cluster Overview to enter the cluster management interface</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/system-debug--search-function/system-debug-step-01.png" alt="System Debug Step 1" />
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
        title: "Step 2: Search for Images or Pods",
        content: `
            <div class="step-text-content">
                <h4>Step 2: Search for Images or Pods</h4>
                <p>Use the search function to find specific image names or pod names in your cluster</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/system-debug--search-function/system-debug-step-02.png" alt="System Debug Step 2" />
                </div>
                <div class="step-navigation">
                    <button class="nav-btn prev-btn" onclick="previousStep()">
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
        title: "Step 3: View Pod Logs",
        content: `
            <div class="step-text-content">
                <h4>Step 3: View Pod Logs</h4>
                <p>Enter the pod you want to examine and click "View Logs" to check the pod's status and troubleshoot issues</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/system-debug--search-function/system-debug-step-03.png" alt="System Debug Step 3" />
                </div>
                <div class="step-navigation">
                    <button class="nav-btn prev-btn" onclick="previousStep()">
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
        title: "Step 4: Check Pod Status",
        content: `
            <div class="step-text-content">
                <h4>Step 4: Check Pod Status</h4>
                <p>Review the pod's current status, including resource usage, health checks, and any error messages</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/system-debug--search-function/system-debug-step-04.png" alt="System Debug Step 4" />
                </div>
                <div class="step-navigation">
                    <button class="nav-btn prev-btn" onclick="previousStep()">
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
        title: "Step 5: View Pod Images",
        content: `
            <div class="step-text-content">
                <h4>Step 5: View Pod Images</h4>
                <p>Examine the container images used by the pod, including image versions, tags, and registry information</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/system-debug--search-function/system-debug-step-05.png" alt="System Debug Step 5" />
                </div>
                <div class="step-navigation">
                    <button class="nav-btn prev-btn" onclick="previousStep()">
                        ← Previous
                    </button>
                    <button class="nav-btn next-btn" onclick="nextStep()">
                        Complete
                    </button>
                </div>
            </div>
        `
    }
];

let currentStep = 0;

function showStep(stepIndex) {
    const stepContent = document.getElementById('step-content');
    const currentStepNumber = document.getElementById('current-step-number');
    const progressFill = document.getElementById('progress-fill');
    
    stepContent.innerHTML = steps[stepIndex].content;
    currentStepNumber.textContent = stepIndex + 1;
    
    // Update progress bar
    const progressPercentage = ((stepIndex + 1) / steps.length) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    
    // Add animation classes
    const textContent = stepContent.querySelector('.step-text-content');
    const imageContent = stepContent.querySelector('.step-image');
    
    if (textContent) {
        setTimeout(() => textContent.classList.add('active'), 100);
    }
    if (imageContent) {
        setTimeout(() => imageContent.classList.add('active'), 300);
    }
    
    // Update navigation buttons
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
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

// Initialize the first step when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showStep(currentStep);
});