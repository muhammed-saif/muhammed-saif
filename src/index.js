// html element selector ~
const rootElement = document.documentElement;
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const sidebarOpenBtn = document.querySelector("#sidebarOpenBtn");
const sidebarCloseBtn = document.querySelector("#sidebarCloseBtn");
const sidebar = document.querySelector("#sidebar");
const togglesBtn = document.querySelectorAll("#toggleBtn");
const typingElements = document.querySelectorAll("#typingAnimation");
const typingSources = document.querySelectorAll("#typingSource");

    const isDark = document.documentElement.classList.contains("dark");


    
// Sidebar open & close
sidebarOpenBtn.addEventListener("click", () => {
    sidebar.classList.remove(
        "translate-x-full",
        "opacity-0",
        "invisible"
    );
    sidebarOpenBtn.classList.add("hidden");
    sidebarCloseBtn.classList.remove("hidden");
});

sidebarCloseBtn.addEventListener("click", () => {
    sidebar.classList.add(
        "translate-x-full",
        "opacity-0",
        "invisible"
    );
    sidebarOpenBtn.classList.remove("hidden");
    sidebarCloseBtn.classList.add("hidden");
});




// Light and Dark theme Toggle function
togglesBtn.forEach((toggleBtn) =>{
    toggleBtn.addEventListener("click",() => {
        rootElement.classList.toggle("dark");
        try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch {}
    });
});

// restore saved theme on load
try {
    if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
    }
} catch {}


window.addEventListener("DOMContentLoaded", () => {
    // Check if the theme is dark and set the toggle button position accordingly
    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    rootElement.classList.toggle("dark", isDark || themeQuery.matches);


    // Initialize each animation
    typingElements.forEach((typingElement, index) => {

        const typingText = typingSources[index].textContent.trim();
        console.log(typingText);

        const typed = new Typed(typingElement, {
            strings: [typingText],
            typeSpeed: 70,
            backSpeed: 40,
            startDelay: 1000,
            backDelay: 1500,
            loop: true,
            showCursor: true,
        });
    });



});



const headerEffect = () => {
    const currentTheme = rootElement.classList.contains("dark") ? "dark" : "light";
    window.addEventListener("scroll", () => {
        const Theme = rootElement.classList.contains("dark") ? "dark" : "light";
        // if ((window.scrollY > 10) && (Theme === "light")) {
        //     header.classList.add("bg-[#FFFFFF]/80", "backdrop-blur-md", "shadow-lg", "shadow-[#4F46E5]/50", "shadow-[#7C3AED]/30");
        //     header.classList.remove("bg-linear-to-br", "from-[#4F46E5]", "to-[#7C3AED]");
        // } else if ((window.scrollY > 10) && (Theme === "dark")) {
        //     header.classList.add("bg-[#1E1B4B]/80", "backdrop-blur-md", "shadow-lg", "shadow-[#4F46E5]/50", "shadow-[#7C3AED]/30");
        //     header.classList.remove("bg-linear-to-br", "from-[#4F46E5]", "to-[#7C3AED]");7d6c9b
        // }

        // for light theme
        if (window.scrollY > 10) {
            header.classList.add("shadow-md", "backdrop-blur-md", "dark:shadow-[#5d5b7d]/30","dark:bg-[#1E1B4B]/30","shadow-[#7d6c9b]/50", "bg-[#6308ffd9]/50");
            header.classList.remove("bg-linear-to-br", "dark:from-[#1E1B4B]]", "dark:to-[#3730A3]","bg-linear-to-br", "from-[#4F46E5]", "to-[#7C3AED]");
        }// for dark theme
        else{
            header.classList.remove("shadow-md", "backdrop-blur-md", "dark:shadow-[#5d5b7d]/30","dark:bg-[#1E1B4B]/30","shadow-[#7d6c9b]/50", "bg-[#6308ffd9]/50");
            header.classList.add("bg-linear-to-br", "dark:from-[#1E1B4B]", "dark:to-[#3730A3]","bg-linear-to-br", "from-[#4F46E5]", "to-[#7C3AED]");
        } 
    });
};

headerEffect();


// Browser loading animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visibleAnimation");
            entry.target.classList.add("visibleProgressAnimation");
            entry.target.classList.remove("invisibleAnimation");
            entry.target.classList.remove("invisibleProgressAnimation");
        }else {
            entry.target.classList.remove("visibleAnimation");
            entry.target.classList.remove("visibleProgressAnimation");
            // entry.target.classList.add("invisibleAnimation");
        }
    });
},{
    threshold: 0.5
});


const browserElements = document.querySelectorAll(".invisibleAnimation,.invisibleProgressAnimation");
    browserElements.forEach((browserElement) => {
    observer.observe(browserElement);
});








