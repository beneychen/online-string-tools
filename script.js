// script.js
function breakLines() {
    const articleInput = document.getElementById('article');
    const outputTextarea = document.getElementById('output');

    const articleLines = articleInput.value.split('\n');
    const result = articleLines.map(line => line + '\n').join('\n');

    outputTextarea.textContent = result;
    updatePreview();
}

function copyToClipboard() {
    const outputTextarea = document.getElementById('output');
    
    outputTextarea.select();
    document.execCommand('copy');

    alert('Result copied to clipboard!');
}
