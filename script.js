// Thank you message handler
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('success');
    const name = urlParams.get('name');

    if (success === '1' && name) {
        alert(`Thank you ${decodeURIComponent(name)} for reaching out to us! We'll respond shortly.`);
        // Clean URL after showing message
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});
