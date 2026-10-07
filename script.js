/* =========================================================
   HEMALATHA R - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* Close mobile menu after clicking a link */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("open");
        }

        if (menuBtn) {

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});



/* =========================================================
   DARK / LIGHT THEME
   ========================================================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

}


function updateThemeIcon() {

    if (!themeBtn) return;

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light-theme")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

}


updateThemeIcon();


if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const isLight =
            document.body.classList.contains("light-theme");

        localStorage.setItem(
            "portfolioTheme",
            isLight ? "light" : "dark"
        );

        updateThemeIcon();

    });

}



/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
   ========================================================= */

const sections = document.querySelectorAll("section[id]");


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 160;


    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${sectionId}`
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

}


window.addEventListener("scroll", updateActiveNav);



/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================================================
   BACK TO TOP BUTTON
   ========================================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}



/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !subject || !message) {

            alert(
                "Please fill in all the fields before sending your message."
            );

            return;

        }


        alert(
            `Thank you, ${name}!\n\nYour message has been received.\n\nI will get back to you soon.`
        );


        contactForm.reset();

    });

}



/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}



/* =========================================================
   SMOOTH SCROLL FOR INTERNAL LINKS
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});



/* =========================================================
   BUTTON RIPPLE EFFECT
   ========================================================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(button => {

    button.addEventListener("click", function (event) {

        const ripple =
            document.createElement("span");


        ripple.classList.add("button-ripple");


        const rect =
            button.getBoundingClientRect();


        ripple.style.left =
            `${event.clientX - rect.left}px`;

        ripple.style.top =
            `${event.clientY - rect.top}px`;


        button.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});



/* =========================================================
   PROJECT CARD INTERACTION
   ========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.setProperty(
            "transform",
            "translateY(-8px)"
        );

    });


    card.addEventListener("mouseleave", () => {

        card.style.removeProperty("transform");

    });

});



/* =========================================================
   TYPING-STYLE HERO EFFECT
   ========================================================= */

const heroTitle =
    document.querySelector(".hero h1");


if (heroTitle) {

    heroTitle.style.opacity = "1";

}



/* =========================================================
   PAGE LOADED
   ========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

    updateActiveNav();

});



/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
    "Hemalatha R Portfolio | B.Tech IT | 2028"
);

console.log(
    "Portfolio loaded successfully."
);