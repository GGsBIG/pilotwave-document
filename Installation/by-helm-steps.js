// Helm installation step-by-step data
const steps = [
    {
        title: "Step 1: Create Namespace",
        content: `
            <div class="step-text-content">
                <h4>Step 1: Create Namespace</h4>
                <p>Create a dedicated namespace for Pilotwave+ installation:</p>
                <pre><code class="language-bash">kubectl create namespace pilotwave-plus</code></pre>
            </div>
            <div class="step-image-group">
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
        title: "Step 2: Create Docker Registry Secret",
        content: `
            <div class="step-text-content">
                <h4>Step 2: Create Docker Registry Secret</h4>
                <p>Create a secret for accessing the GitHub Container Registry:</p>
                <pre><code class="language-bash">kubectl create secret docker-registry pwp-ghcr-cert \\
  --docker-server=ghcr.io \\
  --docker-username=your-username \\
  --docker-password='your-token' \\
  --namespace=pilotwave-plus</code></pre>
                <p>Replace <strong>your-username</strong> and <strong>your-token</strong> with your GitHub credentials.</p>
            </div>
            <div class="step-image-group">
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
        title: "Step 3: Install Helm",
        content: `
            <div class="step-text-content">
                <h4>Step 3: Install Helm</h4>
                <p>Install Helm if not already installed:</p>
                <pre><code class="language-bash">curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash</code></pre>
                <p>Login to Helm Registry:</p>
                <pre><code class="language-bash">helm registry login ghcr.io \\
  --username your-username \\
  --password 'your-token'</code></pre>
            </div>
            <div class="step-image-group">
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
        title: "Step 4: Create Configuration File",
        content: `
            <div class="step-text-content">
                <h4>Step 4: Create Configuration File</h4>
                <p>Create a values.yaml file to configure image pull secrets:</p>
                <p><strong>values.yaml</strong></p>
                <pre><code class="language-yaml">global:
  imagePullSecrets:
  - pwp-ghcr-cert</code></pre>
                <p>Save this content to a file named <code>values.yaml</code> in your current directory.</p>
            </div>
            <div class="step-image-group">
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
        title: "Step 5: Install PilotWave Plus",
        content: `
            <div class="step-text-content">
                <h4>Step 5: Install PilotWave Plus</h4>
                <p>Install PilotWave Plus using Helm:</p>
                <pre><code class="language-bash">helm install pwp -n pilotwave-plus --create-namespace \\
  oci://ghcr.io/brobridgeorg/charts/brobridge-pilotwave-plus \\
  --version 1.0.0 -f values.yaml</code></pre>
                <p>Monitor the installation progress:</p>
                <pre><code class="language-bash">kubectl get pods -n pilotwave-plus -w</code></pre>
            </div>
            <div class="step-image-group">
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
        title: "Step 6: Access the Service",
        content: `
            <div class="step-text-content">
                <h4>Step 6: Access the Service</h4>
                <p>The service will be available through NodePort 30030:</p>
                <p><strong>Access URL:</strong> <code>http://&lt;cluster-node-ip&gt;:30030</code></p>
                <p><strong>Default credentials:</strong></p>
                <ul>
                    <li><strong>Username:</strong> admin</li>
                    <li><strong>Password:</strong> admin123</li>
                </ul>
                <p>Verify the service is running:</p>
                <pre><code class="language-bash">kubectl get svc -n pilotwave-plus</code></pre>
            </div>
            <div class="step-image-group">
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