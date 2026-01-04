// --- app.js ---

// Select Elements
const uploadZone = document.getElementById('uploadZone');
const audioInput = document.getElementById('audioInput');
const dropText = document.getElementById('dropText');
const uploadBtn = document.getElementById('uploadBtn');
const analyzeBtn = document.getElementById('analyzeBtn');
const loadingOverlay = document.getElementById('loadingOverlay');

// Only run this logic if we are on index.html
if (uploadZone) {
    
    // 1. Click to Open File Dialog
    uploadZone.addEventListener('click', () => {
        audioInput.click();
    });

    // 2. Handle File Selection
    audioInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            const fileName = e.target.files[0].name;
            dropText.innerHTML = `<span style="color:var(--primary)">${fileName}</span>`;
            dropText.style.fontWeight = "bold";
            
            // Unlock Upload Button
            uploadBtn.disabled = false;
            uploadBtn.classList.remove('disabled');
        }
    });

    // 3. Upload Action
    uploadBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent re-triggering file input
        uploadBtn.innerHTML = '<i class="fa-solid fa-check"></i> Upload Complete';
        uploadBtn.style.backgroundColor = 'var(--success)';
        uploadBtn.disabled = true;

        // Show Analyze Button
        uploadBtn.classList.add('hidden');
        analyzeBtn.classList.remove('hidden');
    });

    // 4. Analyze Action (The Page Switch)
    analyzeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Show Loading Animation
        loadingOverlay.classList.remove('hidden');

        // Wait 2 seconds, then switch pages
        setTimeout(() => {
            window.location.href = 'results.html';
        }, 2000);
    });
}