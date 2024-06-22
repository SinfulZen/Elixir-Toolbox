document.addEventListener('DOMContentLoaded', () => {
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (isMobileDevice()) {

        document.body.classList.add('mobile');
        alert('You are using a mobile device!');
        
        let mobileStylesheet = document.createElement('link');
        mobileStylesheet.rel = 'stylesheet';
        mobileStylesheet.href = 'mobile-styles.css';
        document.head.appendChild(mobileStylesheet);
    } else {

        document.body.classList.add('desktop');
    }
});
