// Step-by-step data - one action per step
const steps = [
    {
        title: "Step 1: Access Helm App Store",
        content: `
            <div class="step-text-content">
                <h4>Step 1: Access Helm App Store</h4>
                <p>Enter the initial page, click on Helm App Store</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-01.png" alt="Grafana Step 1" />
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
        title: "Step 2: Navigate to Helm Charts",
        content: `
            <div class="step-text-content">
                <h4>Step 2: Navigate to Helm Charts</h4>
                <p>Click on the dropdown menu of Helm App Store, select Helm Charts</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-03.png" alt="Grafana Step 3" />
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
        title: "Step 3: Click Add Repository",
        content: `
            <div class="step-text-content">
                <h4>Step 3: Click Add Repository</h4>
                <p>Click Add Repository in the top right corner</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-04.png" alt="Grafana Step 4" />
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
        title: "Step 4: Fill Repository URL",
        content: `
            <div class="step-text-content">
                <h4>Step 4: Fill Repository URL</h4>
                <p>Fill in the Repository URL with: <code>https://grafana.github.io/helm-charts</code>, click Add Repository</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-05.png" alt="Grafana Step 5" />
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
        title: "Step 5: Select Grafana Chart",
        content: `
            <div class="step-text-content">
                <h4>Step 5: Select Grafana Chart</h4>
                <p>Click on helm-charts/grafana</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-06.png" alt="Grafana Step 6" />
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
        title: "Step 6: Deploy Chart",
        content: `
            <div class="step-text-content">
                <h4>Step 6: Deploy Chart</h4>
                <p>Click Deploy Chart</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-07.png" alt="Grafana Step 7" />
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
        title: "Step 7: Configure Release",
        content: `
            <div class="step-text-content">
                <h4>Step 7: Configure Release</h4>
                <p>Fill in the Release Name, choose whether to create namespace, click Load Default Values</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-08.png" alt="Grafana Step 8" />
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
        title: "Step 8: Deploy Success",
        content: `
            <div class="step-text-content">
                <h4>Step 8: Deploy Success</h4>
                <p>Click Deploy Chart → Deployed Success</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-09.png" alt="Grafana Step 9" />
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
        title: "Step 9: Close Dialog",
        content: `
            <div class="step-text-content">
                <h4>Step 9: Close Dialog</h4>
            <p>Close the dialog by clicking the X in the top right corner</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-10.png" alt="Grafana Step 10" />
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
        title: "Step 10: Access Helm Releases",
        content: `
            <div class="step-text-content">
                <h4>Step 10: Access Helm Releases</h4>
            <p>Click Helm Releases</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-11.png" alt="Grafana Step 11" />
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
        title: "Step 11: Select Grafana Entry",
        content: `
            <div class="step-text-content">
                <h4>Step 11: Select Grafana Entry</h4>
            <p>Click on the grafana entry</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-12.png" alt="Grafana Step 12" />
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
        title: "Step 12: Click Upgrade",
        content: `
            <div class="step-text-content">
                <h4>Step 12: Click Upgrade</h4>
            <p>Click upgrade</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-13.png" alt="Grafana Step 13" />
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
        title: "Step 13: Select Chart to Upgrade",
        content: `
            <div class="step-text-content">
                <h4>Step 13: Select Chart to Upgrade</h4>
            <p>Click Select Chart to Upgrade To, choose helm-charts/grafana (helm-charts)</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-15.png" alt="Grafana Step 15" />
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
        title: "Step 14: Load Current Values",
        content: `
            <div class="step-text-content">
                <h4>Step 14: Load Current Values</h4>
            <p>Click Load Current Values</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-16.png" alt="Grafana Step 16" />
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
        title: "Step 15: Search for ClusterIP",
        content: `
            <div class="step-text-content">
                <h4>Step 15: Search for ClusterIP</h4>
            <p>In the Values (YAML) section, press <kbd>Cmd + F</kbd> to search for <code>ClusterIP</code></p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-18.png" alt="Grafana Step 18" />
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
        title: "Step 16: Change to NodePort",
        content: `
            <div class="step-text-content">
                <h4>Step 16: Change to NodePort</h4>
            <p>Change <code>ClusterIP</code> to <code>NodePort</code></p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-19.png" alt="Grafana Step 19" />
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
        title: "Step 17: Upgrade Release",
        content: `
            <div class="step-text-content">
                <h4>Step 17: Upgrade Release</h4>
            <p>Click Upgrade Release</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-20.png" alt="Grafana Step 20" />
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
        title: "Step 18: Navigate to Services",
        content: `
            <div class="step-text-content">
                <h4>Step 18: Navigate to Services</h4>
            <p>Click on Network in the left sidebar, then click Services</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-23.png" alt="Grafana Step 23" />
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
        title: "Step 19: Search Services",
        content: `
            <div class="step-text-content">
                <h4>Step 19: Search Services</h4>
            <p>Click the magnifying glass icon to search</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-24.png" alt="Grafana Step 24" />
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
        title: "Step 20: Find Grafana NodePort",
        content: `
            <div class="step-text-content">
                <h4>Step 20: Find Grafana NodePort</h4>
            <p>Enter <code>grafana</code> to see which NodePort the Grafana interface is using</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-26.png" alt="Grafana Step 26" />
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
        title: "Step 21: Access Grafana Web Interface",
        content: `
            <div class="step-text-content">
                <h4>Step 21: Access Grafana Web Interface</h4>
            <p>Access the Grafana web interface at: <code>$ClusterIP:$NodePort</code></p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-27.png" alt="Grafana Step 27" />
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
        title: "Step 22: Search for Grafana Secret",
        content: `
            <div class="step-text-content">
                <h4>Step 22: Search for Grafana Secret</h4>
                <p>Return to the Pilotwave web interface, press the <kbd>/</kbd> key to search for <code>grafana</code>, click on grafana Secret</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-29.png" alt="Grafana Step 29" />
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
        title: "Step 23: Show Decoded Password",
        content: `
            <div class="step-text-content">
                <h4>Step 23: Show Decoded Password</h4>
            <p>Click Show Decoded</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-30.png" alt="Grafana Step 30" />
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
        title: "Step 24: Copy Password",
        content: `
            <div class="step-text-content">
                <h4>Step 24: Copy Password</h4>
            <p>Copy the grafana password</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-31.png" alt="Grafana Step 31" />
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
        title: "Step 25: Enter Login Credentials",
        content: `
            <div class="step-text-content">
                <h4>Step 25: Enter Login Credentials</h4>
                <p>Fill in the login credentials: Email or username: <code>admin</code>, Password: [paste the copied grafana password]</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-32.png" alt="Grafana Step 32" />
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
        title: "Step 26: Login Success",
        content: `
            <div class="step-text-content">
                <h4>Step 26: Login Success</h4>
            <p>Login Success - You can now access Grafana!</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-33.png" alt="Grafana Step 33" />
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
        title: "Step 27: Grafana Dashboard",
        content: `
            <div class="step-text-content">
                <h4>Step 27: Grafana Dashboard</h4>
            <p>Welcome to Grafana! You have successfully deployed and accessed Grafana via Pilotwave.</p>
            </div>
            <div class="step-image-group">
                <div class="step-image">
                    <img src="../grafana-images/grafana-step-34.png" alt="Grafana Step 34" />
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