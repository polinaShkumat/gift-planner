document.addEventListener('DOMContentLoaded', () => {
    
    const calendarSection = document.getElementById('calendar-section');
    calendarSection.style.opacity = 0;
    calendarSection.style.transition = 'opacity 2s ease-in-out';
    setTimeout(() => {
        calendarSection.style.opacity = 1;
    }, 500);

   
    const tabs = document.querySelectorAll('.tab-button');
    const tabContent = document.getElementById('tab-content');

    const tabData = {
        purchases: "<p>No purchases made yet.</p>",
        holidays: "<p>Upcoming holidays will be shown here.</p>",
        languages: "<p>Languages: English, Spanish.</p>",
        info: "<p>Additional information about the user.</p>"
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
           
            tabs.forEach(btn => btn.classList.remove('active-tab'));
            
            tab.classList.add('active-tab');

           
            const selectedTab = tab.getAttribute('data-tab');
            tabContent.innerHTML = tabData[selectedTab];

           
            tabContent.style.opacity = 0;
            tabContent.style.transition = 'opacity 0.5s ease-in-out';
            setTimeout(() => {
                tabContent.style.opacity = 1;
            }, 100);
        });
    });

    // Анимация для всех элементов профиля при прокрутке
    const profileElements = document.querySelectorAll('.profile-header, .profile-tabs, .calendar-section');
    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    profileElements.forEach(element => observer.observe(element));
});