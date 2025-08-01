// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Update active nav dot
        updateActiveNavDot(sectionId);
    }
}

// Update active navigation dot
function updateActiveNavDot(sectionId) {
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = ['home', 'personal', 'about', 'contact'];
    const index = sections.indexOf(sectionId);
    
    navDots.forEach(dot => dot.classList.remove('active'));
    if (navDots[index]) {
        navDots[index].classList.add('active');
    }
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.98)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Navigation dots interaction
const navDots = document.querySelectorAll('.nav-dot');
navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const sections = ['home', 'personal', 'about', 'contact'];
        scrollToSection(sections[index]);
    });
});

// Animated counter for stats
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text);
                
                if (!isNaN(number)) {
                    let current = 0;
                    const increment = number / 50;
                    const suffix = text.replace(number.toString(), '');
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            target.textContent = number + suffix;
                            clearInterval(timer);
                        } else {
                            target.textContent = Math.floor(current) + suffix;
                        }
                    }, 30);
                }
                
                observer.unobserve(target);
            }
        });
    });
    
    statValues.forEach(stat => observer.observe(stat));
}

// Scroll-triggered animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.info-card, .stat-item, .skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        animateStats();
        initScrollAnimations();
    }, 2000);
});

// Add hover effects to nav items
document.querySelectorAll('.nav-item, .sidebar-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});



// Contact section scroll detection
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, .hero');
    const navDots = document.querySelectorAll('.nav-dot');
    const navItems = document.querySelectorAll('.nav-item');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    // Update navigation dots
    navDots.forEach((dot, index) => {
        dot.classList.remove('active');
        const sections = ['home', 'personal', 'about', 'contact'];
        if (sections[index] === current) {
            dot.classList.add('active');
        }
    });
    
    // Update navigation items
    navItems.forEach((item, index) => {
        item.classList.remove('active');
        const sections = ['home', 'personal', 'about'];
        if (sections[index] === current) {
            item.classList.add('active');
        }
    });
    
    // Update sidebar items
    sidebarItems.forEach((item, index) => {
        item.classList.remove('active');
        const sections = ['home', 'personal', 'about'];
        if (sections[index] === current) {
            item.classList.add('active');
        }
    });
});



// Language Toggle Functionality
const langSelector = document.querySelector('.lang-selector');
let isVietnamese = true;

// Language content object
const translations = {
    vi: {
        // Navigation
        home: 'Trang chủ',
        personal: 'Thông tin cá nhân',
        about: 'Giới thiệu',
        
        // Personal Info Labels
        fullName: 'Họ và tên:',
        birthDate: 'Ngày sinh:',
        hometown: 'Quê quán:',
        education: 'Học vấn:',
        major: 'Chuyên ngành:',
        
        // Personal Info Values
        nameValue: 'Phan Công Luận',
        birthValue: '20/10/2005',
        hometownValue: 'Đồng Tháp, Việt Nam',
        educationValue: 'Sinh viên Đại học',
        majorValue: 'Công nghệ thông tin',
        
        // Skills Section
        technicalSkills: 'Kỹ năng kỹ thuật',
        
        // About Section
        greeting: 'Xin chào! Tôi là sinh viên năm cuối, đam mê lập trình dù chưa có nhiều kinh nghiệm. Hành trình của tôi bắt đầu từ sự tò mò về công nghệ và khao khát tạo ra những sản phẩm ý nghĩa.',
        mission: 'Mục tiêu của tôi',
        missionText: 'Tôi tin rằng công nghệ có thể giải quyết các vấn đề thực tiễn và cải thiện cuộc sống. Mỗi dòng code tôi viết đều hướng tới việc tạo ra giá trị thực sự.',
        whatIDo: 'Những gì tôi làm',
        whatIDoText: 'Tôi đang học và khám phá lập trình web, làm việc với các công nghệ như HTML, CSS, JavaScript và các nền tảng cơ bản. Tôi thích tham gia vào quá trình phát triển sản phẩm từ ý tưởng đến thực thi.',
        beyondCoding: 'Ngoài lập trình',
        beyondCodingText: 'Khi không học code, tôi tìm hiểu về công nghệ mới, tham gia các dự án nhỏ hoặc chia sẻ kiến thức với cộng đồng. Tôi cũng quan tâm đến thiết kế giao diện để mang lại trải nghiệm người dùng tốt hơn.',
        connect: 'Kết nối với tôi',
        connectText: 'Tôi luôn sẵn sàng học hỏi và hợp tác trong các dự án thú vị. Nếu bạn muốn trao đổi về công nghệ hoặc có ý tưởng dự án, hãy liên hệ với tôi!'
    },
    en: {
        // Navigation
        home: 'Home',
        personal: 'Personal Info',
        about: 'About',
        
        // Personal Info Labels
        fullName: 'Full Name:',
        birthDate: 'Birth Date:',
        hometown: 'Hometown:',
        education: 'Education:',
        major: 'Major:',
        
        // Personal Info Values
        nameValue: 'Phan Cong Luan',
        birthValue: '20/10/2005',
        hometownValue: 'Dong Thap, Vietnam',
        educationValue: 'University Student',
        majorValue: 'Information Technology',
        
        // Skills Section
        technicalSkills: 'Technical Skills',
        
        // About Section
        greeting: 'Hello! I\'m a final-year student passionate about programming despite limited experience. My journey began with curiosity about technology and a desire to create meaningful products.',
        mission: 'My Mission',
        missionText: 'I believe technology can solve real-world problems and improve lives. Every line of code I write aims to create something impactful.',
        whatIDo: 'What I Do',
        whatIDoText: 'I\'m learning and exploring web development, working with technologies like HTML, CSS, JavaScript, and basic platforms. I enjoy the process from ideation to execution.',
        beyondCoding: 'Beyond Coding',
        beyondCodingText: 'When not coding, I explore new technologies, contribute to small projects, or share knowledge with the community. I\'m also interested in UI/UX design for better user experiences.',
        connect: 'Let\'s Connect',
        connectText: 'I\'m eager to learn and collaborate on exciting projects. Feel free to reach out for tech discussions or project ideas!'
    }
};

// Function to update all text content
function updateLanguage(lang) {
    const t = translations[lang];
    
    // Add blur out effects to all elements
    const aboutText = document.querySelector('.about-text');
    const navItems = document.querySelectorAll('.nav-item');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const infoLabels = document.querySelectorAll('.info-label');
    const infoValues = document.querySelectorAll('.info-value');
    const skillsTitle = document.querySelector('.skills-title');
    
    // Apply blur out effects
    if (aboutText) aboutText.classList.add('fade-out');
    navItems.forEach(item => item.classList.add('blur-out'));
    sidebarItems.forEach(item => item.classList.add('blur-out'));
    infoLabels.forEach(item => item.classList.add('blur-out'));
    infoValues.forEach(item => item.classList.add('blur-out'));
    if (skillsTitle) skillsTitle.classList.add('blur-out');
    
    // Wait for blur out, then update content
    setTimeout(() => {
        // Update navigation
        navItems.forEach((item, index) => {
            if (index === 0) item.textContent = t.home;
            if (index === 1) item.textContent = t.personal;
            if (index === 2) item.textContent = t.about;
        });
        
        // Update sidebar
        sidebarItems.forEach((item, index) => {
            if (index === 0) item.textContent = t.home.toUpperCase();
            if (index === 1) item.textContent = 'INFO';
            if (index === 2) item.textContent = t.about.toUpperCase();
        });
        
        // Update personal info labels
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });
        
        // Update personal info values
        infoValues.forEach((value, index) => {
            if (index === 0) value.textContent = t.nameValue;
            if (index === 1) value.textContent = t.birthValue;
            if (index === 2) value.textContent = t.hometownValue;
            if (index === 3) value.textContent = t.educationValue;
            if (index === 4) value.textContent = t.majorValue;
        });
        
        // Update skills section
        if (skillsTitle) {
            skillsTitle.textContent = t.technicalSkills;
        }
        
        // Update about section
        if (aboutText) {
            aboutText.innerHTML = `
                <p>${t.greeting}</p>
                <h3>${t.mission}</h3>
                <p>${t.missionText}</p>
                <h3>${t.whatIDo}</h3>
                <p>${t.whatIDoText}</p>
                <h3>${t.beyondCoding}</h3>
                <p>${t.beyondCodingText}</p>
                <h3>${t.connect}</h3>
                <p>${t.connectText}</p>
            `;
        }
        
        // Apply blur in effects
        if (aboutText) {
            aboutText.classList.remove('fade-out');
            aboutText.classList.add('fade-in');
        }
        navItems.forEach(item => {
            item.classList.remove('blur-out');
            item.classList.add('blur-in');
        });
        sidebarItems.forEach(item => {
            item.classList.remove('blur-out');
            item.classList.add('blur-in');
        });
        infoLabels.forEach(item => {
            item.classList.remove('blur-out');
            item.classList.add('blur-in');
        });
        infoValues.forEach(item => {
            item.classList.remove('blur-out');
            item.classList.add('blur-in');
        });
        if (skillsTitle) {
            skillsTitle.classList.remove('blur-out');
            skillsTitle.classList.add('blur-in');
        }
        
        // Remove blur-in classes after transition completes
        setTimeout(() => {
            navItems.forEach(item => item.classList.remove('blur-in'));
            sidebarItems.forEach(item => item.classList.remove('blur-in'));
            infoLabels.forEach(item => item.classList.remove('blur-in'));
            infoValues.forEach(item => item.classList.remove('blur-in'));
            if (skillsTitle) skillsTitle.classList.remove('blur-in');
            if (aboutText) aboutText.classList.remove('fade-in');
        }, 400);
        
    }, 300); // Slightly longer for better blur effect
}

langSelector.addEventListener('click', () => {
    isVietnamese = !isVietnamese;
    const langIcon = langSelector.querySelector('i');
    const langText = langSelector.querySelector('span');
    
    if (isVietnamese) {
        // Vietnamese
        langText.textContent = 'VI';
        langIcon.classList.remove('fa-language');
        langIcon.classList.add('fa-globe');
        updateLanguage('vi');
    } else {
        // English
        langText.textContent = 'EN';
        langIcon.classList.remove('fa-globe');
        langIcon.classList.add('fa-language');
        updateLanguage('en');
    }
});

// Initialize with Vietnamese
updateLanguage('vi');

// Set default active section to home on page load
window.addEventListener('load', () => {
    // Set home as active section
    const navItems = document.querySelectorAll('.nav-item');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    
    // Remove active class from all items
    navItems.forEach(item => item.classList.remove('active'));
    sidebarItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to home items (first items)
    if (navItems[0]) navItems[0].classList.add('active');
    if (sidebarItems[0]) sidebarItems[0].classList.add('active');
    
    // Scroll to home section
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
});