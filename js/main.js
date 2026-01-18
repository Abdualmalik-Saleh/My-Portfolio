// // Add class Active to header on scroll

// let header = document.querySelector("header");

// window.onscroll = function () {
//     if (this.scrollY >= 50) {
//         header.classList.add("active")
//     } else {
//         header.classList.remove("active")
//     }
// }

// let nav_links = document.getElementById("links");

// function Open_colose_Menu () {
//     nav_links.classList.toggle("active")
// }

// ***************
// The New Code (include the old code)

// 1. قاموس الترجمة (Texts Dictionary)
const translations = {
    en: {
        // Navbar
        home: "Home",
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",

        // Hero Section
        hello: "Hello I'm",
        name: "Dev.Abdulmalik Saleh",
        job: "Web Developer",
        hero_desc: "I am a passionate developer dedicated to building responsive, user-friendly websites and web applications that solve real-world problems.",
        hire: "Hire Me",
        resume: "Download Resume",

        // About Section
        about_small_title: "About Me",
        about_big_title: "I'm a Developer",
        about_sub_title: "Developing Web Applications that Help People",
        about_desc: "I specialize in front-end and back-end development. I enjoy turning complex problems into simple, beautiful, and intuitive interface designs.",
        skill_web: "Web Developer",
        skill_mobile: "Mobile App Developer",
        skill_ui: "UI/UX Designer",
        skill_marketing: "Digital Marketing",
        btn_cv: "Download CV",

        // Services Section
        services_title: "My Services",
        // Box 1
        serv_web_design: "Web Design",
        serv_web_desc: "Creating modern and responsive designs that look great on all devices.",
        read_more: "Read More",
        // Box 2
        serv_dev: "Web Development",
        serv_dev_desc: "Building fast, secure, and dynamic websites using the latest technologies.",
        // Box 3
        serv_seo: "SEO Optimization",
        serv_seo_desc: "Improving your website ranking to appear at the top of search results.",

        // Projects Section
        projects_title: "Explore My Last Projects",
        // Project 1
        proj_cat_design: "Product Design",
        proj_title_1: "E-Commerce Website",
        proj_desc_1: "A fully functional online store with a modern user interface and payment gateway integration.",
        // Project 2
        proj_cat_app: "Web Application",
        proj_title_2: "Dashboard Panel",
        proj_desc_2: "An admin dashboard to manage users, products, and analyze data efficiently.",
        // Project 3
        proj_cat_marketing: "Landing Page",
        proj_title_3: "Product Landing Page",
        proj_desc_3: "A high-converting landing page designed to showcase a specific product.",
        // Project 4
        proj_cat_portfolio:" Design Portfolio",
        proj_title_4:"Portfolio Website",
        proj_desc_4: "A personal portfolio website to showcase skills and projects professionally.",

        // Contact Section
        contact_title: "Contact Me",
        follow_me: "Follow Me On",
        // Form Placeholders (هذه للحقول)
        ph_name: "Full Name",
        ph_email: "Email Address",
        ph_phone: "Phone Number",
        ph_subject: "Subject",
        ph_message: "Your Message Here...",
        btn_send: "Send Message",
        // إضافات التواصل الاجتماعي
        social_wa: "Whatsapp",
        social_tg: "Telegram",
        social_email: "Email",
        social_git: "Github",
        social_fb: "Facebook",
    },
    ar: {
        // القائمة العلوية
        home: "الرئيسية",
        about: "من أنا",
        services: "خدماتي",
        portfolio: "أعمالي",
        contact: "تواصل معي",

        // قسم البداية
        hello: "مرحباً، أنا",
        name: "المطور عبدالملك صالح",
        job: "مطور مواقع ويب",
        hero_desc: "أنا مطور شغوف مكرس لبناء مواقع وتطبيقات ويب متجاوبة وسهلة الاستخدام تساهم في حل المشكلات الحقيقية.",
        hire: "وظفني",
        resume: "تحميل السيرة الذاتية",

        // قسم من أنا
        about_small_title: "نبذة عني",
        about_big_title: "أنا مطور برمجيات",
        about_sub_title: "أطور تطبيقات ويب تخدم الناس",
        about_desc: "أنا متخصص في تطوير الواجهات الخلفية والأمامية. أستمتع بتحويل المشاكل المعقدة إلى تصاميم واجهات بسيطة وجميلة وبديهية.",
        skill_web: "مطور ويب",
        skill_mobile: "مطور تطبيقات جوال",
        skill_ui: "مصمم واجهات UI/UX",
        skill_marketing: "تسويق رقمي",
        btn_cv: "تحميل الـ CV",

        // قسم الخدمات
        services_title: "خدماتي",
        // صندوق 1
        serv_web_design: "تصميم المواقع",
        serv_web_desc: "إنشاء تصاميم عصرية ومتجاوبة تظهر بشكل رائع على جميع الأجهزة.",
        read_more: "اقرأ المزيد",
        // صندوق 2
        serv_dev: "تطوير الويب",
        serv_dev_desc: "بناء مواقع سريعة وآمنة وديناميكية باستخدام أحدث التقنيات.",
        // صندوق 3
        serv_seo: "تحسين محركات البحث",
        serv_seo_desc: "تحسين ترتيب موقعك ليظهر في مقدمة نتائج البحث.",

        // قسم المشاريع
        projects_title: "تصفح آخر مشاريعي",
        // مشروع 1
        proj_cat_design: "تصميم منتج",
        proj_title_1: "متجر إلكتروني",
        proj_desc_1: "متجر إلكتروني متكامل الوظائف بواجهة مستخدم عصرية وربط مع بوابات الدفع.",
        // مشروع 2
        proj_cat_app: "تطبيق ويب",
        proj_title_2: "لوحة تحكم",
        proj_desc_2: "لوحة تحكم للمسؤول لإدارة المستخدمين والمنتجات وتحليل البيانات بكفاءة.",
        // مشروع 3
        proj_cat_marketing: "صفحة هبوط",
        proj_title_3: "صفحة ترويج منتج",
        proj_desc_3: "صفحة هبوط ذات معدل تحويل عالي مصممة لعرض منتج معين.",
        // مشروع 4
        proj_cat_portfolio:"موقع لعرض الاعمال",
        proj_title_4: "موقع شخصي",
        proj_desc_4: "موقع معرض أعمال شخصي لعرض المهارات والمشاريع بشكل احترافي.",

        // قسم التواصل
        contact_title: "تواصل معي",
        follow_me: "تابعني على",
        // نصوص الحقول
        ph_name: "الاسم الكامل",
        ph_email: "البريد الإلكتروني",
        ph_phone: "رقم الهاتف",
        ph_subject: "الموضوع",
        ph_message: "اكتب رسالتك هنا...",
        btn_send: "إرسال الرسالة", 
        // إضافات التواصل الاجتماعي
        social_wa: "واتساب",
        social_tg: "تيليجرام",
        social_email: "البريد الإلكتروني",
        social_git: "قت هب",
        social_fb: "فيسبوك",
    }
};

// عناصر نحتاجها
const langBtn = document.getElementById("lang-btn");
const themeBtn = document.getElementById("theme-btn");
const themeIcon = themeBtn.querySelector("i");
const header = document.querySelector("header");
const nav_links = document.getElementById("links");

// --- الكود القديم(Header Scroll) ---
window.onscroll = function () {
    if (this.scrollY >= 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
};

// --- الكود القديم(Mobile Menu) ---
function Open_colose_Menu() {
    nav_links.classList.toggle("active");
}

// --- 2. وظيفة تغيير اللغة (Language Switcher) ---
function toggleLanguage() {
    // التحقق من اللغة الحالية
    const currentLang = localStorage.getItem("lang") || "en";
    const newLang = currentLang === "en" ? "ar" : "en";
    
    // حفظ اللغة الجديدة
    localStorage.setItem("lang", newLang);
    
    // تطبيق اللغة
    applyLanguage(newLang);
}

// --- الدالة المحدثة (مهم جداً ) ---
function applyLanguage(lang) {
    // 1. تغيير إعدادات الصفحة
    if (lang === "ar") {
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", "ar");
        langBtn.innerText = "EN"; 
    } else {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.setAttribute("lang", "en");
        langBtn.innerText = "AR"; 
    }

    // 2. تغيير النصوص والـ Placeholders
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(element => {
        const key = element.getAttribute("data-lang");
        if (translations[lang][key]) {
            // التحقق: هل العنصر حقل إدخال (Input/Textarea) أم نص عادي؟
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', translations[lang][key]);
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });
}

// --- 3. وظيفة تغيير المظهر (Dark/Light Mode) ---
function toggleTheme() {
    document.body.classList.toggle("light-mode");
    
    // تغيير الأيقونة
    if (document.body.classList.contains("light-mode")) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    }
}

// --- 4. عند تحميل الصفحة (تطبيق الإعدادات المحفوظة) ---
window.onload = function() {
    // استرجاع اللغة
    const savedLang = localStorage.getItem("lang") || "en";
    applyLanguage(savedLang);

    // استرجاع المظهر
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
};
