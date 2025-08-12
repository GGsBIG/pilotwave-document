// UI installer step-by-step data
const steps = [
    {
        title: "Step 0: Architecture Overview",
        content: `
            <div class="step-text-content">
                <h4>Step 0: Architecture Overview</h4>
                <p>Understand the Pilotwave+ architecture and how the UI installer interacts with your Kubernetes cluster.</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/installation/ui-installer/struct.png" alt="Pilotwave+ Architecture" />
                </div>
            </div>
            <div class="step-navigation">
                <button class="nav-btn prev-btn" onclick="previousStep()" disabled>
                    ← Previous
                </button>
                <button class="nav-btn next-btn" onclick="nextStep()">
                    Next →
                </button>
            </div>
        `
    },
    {
        title: "Step 1: Download and Launch Installer",
        content: `
            <div class="step-text-content">
                <h4>Step 1: Download and Launch Installer</h4>
                <p>Download and run the Pilotwave+ UI installer. The installer will launch with the welcome screen.</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/installation/ui-installer/step-1.png" alt="UI Installer Step 1" />
                </div>
            </div>
            <div class="step-navigation">
                <button class="nav-btn prev-btn" onclick="previousStep()">
                    ← Previous
                </button>
                <button class="nav-btn next-btn" onclick="nextStep()">
                    Next →
                </button>
            </div>
        `
    },
    {
        title: "Step 2: EULA Agreement",
        content: `
            <div class="step-text-content">
                <h4>Step 2: Sign EULA Agreement</h4>
                <p>Review and sign the End User License Agreement (EULA) to proceed with the installation.</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/installation/ui-installer/step-2.png" alt="UI Installer Step 2" />
                </div>
                <div class="step-image">
                    <img src="../images/installation/ui-installer/step-2-error-accept.png" alt="UI Installer Step 2 Error Accept" />
                </div>
            </div>
            <div class="step-navigation">
                <button class="nav-btn prev-btn" onclick="previousStep()">
                    ← Previous
                </button>
                <button class="nav-btn next-btn" onclick="nextStep()">
                    Next →
                </button>
            </div>
        `
    },
    {
        title: "Step 3: Select K8s Cluster",
        content: `
            <div class="step-text-content">
                <h4>Step 3: Select and Configure Kubernetes Cluster</h4>
                <p>Choose and configure your Kubernetes cluster for Pilotwave+ installation.</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/installation/ui-installer/step-3.png" alt="UI Installer Step 3" />
                </div>
            </div>
            <div class="step-navigation">
                <button class="nav-btn prev-btn" onclick="previousStep()">
                    ← Previous
                </button>
                <button class="nav-btn next-btn" onclick="nextStep()">
                    Next →
                </button>
            </div>
        `
    },
    {
        title: "Step 4: Permission Check",
        content: `
            <div class="step-text-content">
                <h4>Step 4: Check Permissions</h4>
                <p>Verify and validate permissions for Kubernetes cluster access and Pilotwave+ installation.</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/installation/ui-installer/step-4-1.png" alt="UI Installer Step 4-1" />
                </div>
                <div class="step-image">
                    <img src="../images/installation/ui-installer/step-4-2.png" alt="UI Installer Step 4-2" />
                </div>
            </div>
            <div class="step-navigation">
                <button class="nav-btn prev-btn" onclick="previousStep()">
                    ← Previous
                </button>
                <button class="nav-btn next-btn" onclick="nextStep()">
                    Next →
                </button>
            </div>
        `
    },
    {
        title: "Step 5: Installation Settings",
        content: `
            <div class="step-text-content">
                <h4>Step 5: Installation Settings</h4>
                <p>Configure installation settings including component selection and deployment parameters.</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/installation/ui-installer/step-5-1.png" alt="UI Installer Step 5-1" />
                </div>
                <div class="step-image">
                    <img src="../images/installation/ui-installer/step-5-2.png" alt="UI Installer Step 5-2" />
                </div>
            </div>
            <div class="step-navigation">
                <button class="nav-btn prev-btn" onclick="previousStep()">
                    ← Previous
                </button>
                <button class="nav-btn next-btn" onclick="nextStep()">
                    Next →
                </button>
            </div>
        `
    },
    {
        title: "Step 6: Installation Progress",
        content: `
            <div class="step-text-content">
                <h4>Step 6: Installation Progress</h4>
                <p>The installation process will begin. Monitor the progress and wait for completion.</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/installation/ui-installer/step-6-1.png" alt="UI Installer Step 6-1" />
                </div>
                <div class="step-image">
                    <img src="../images/installation/ui-installer/step-6-2.png" alt="UI Installer Step 6-2" />
                </div>
            </div>
            <div class="step-navigation">
                <button class="nav-btn prev-btn" onclick="previousStep()">
                    ← Previous
                </button>
                <button class="nav-btn next-btn" onclick="nextStep()">
                    Next →
                </button>
            </div>
        `
    },
    {
        title: "Step 7: Installation Complete",
        content: `
            <div class="step-text-content">
                <h4>Step 7: Installation Complete</h4>
                <p>Congratulations! Pilotwave+ has been successfully installed. You can now access the dashboard.</p>
                <p><strong>Access Information:</strong></p>
                <ul>
                    <li><strong>URL:</strong> <code>http://&lt;cluster-node-ip&gt;:30030</code></li>
                    <li><strong>Username:</strong> admin</li>
                    <li><strong>Password:</strong> admin123</li>
                </ul>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../images/installation/ui-installer/step-7.png" alt="UI Installer Step 7" />
                </div>
            </div>
            <div class="step-navigation">
                <button class="nav-btn prev-btn" onclick="previousStep()">
                    ← Previous
                </button>
                <button class="nav-btn next-btn" onclick="nextStep()">
                    Complete
                </button>
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
    document.getElementById('current-step-number').textContent = currentStep;
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