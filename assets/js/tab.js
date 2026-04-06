document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const tabGroups = document.querySelectorAll(".tab-group"); // Wrapper for each tab group

    tabGroups.forEach(group => {
        console.log(group);
        const tabButtons = group.querySelectorAll(".tab-nav");
        const tabs = group.querySelectorAll(".ul-tab");

        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                const tabId = button.getAttribute("data-tab");

                // Activate the correct tab
                tabs.forEach(tab => {
                    if (tab.id === tabId) {
                        tab.classList.add("active");
                    } else {
                        tab.classList.remove("active");
                    }
                });

                // Manage active class for buttons
                tabButtons.forEach(btn => {
                    btn.classList.remove("active");
                });
                button.classList.add("active");
            });
        });
    });

});


const whyexpoData = [
  {
    number: "01",
    title: "Fully Custom Solutions",
    text: "We create software tailored to your exact workflow and business objectives.  Each solution is built to meet your unique operational needs with precision.  Boost productivity, streamline processes, and achieve your business goals efficiently.",
    img: "./assets/img/custom-solutions.jpg"
  },
  {
    number: "02",
    title: "Scalable Architecture",
    text: "Our applications are designed to grow with your business while maintaining smooth performance.  Flexible architecture ensures you can adapt quickly to new challenges and market demands.  Reliable, robust, and future-proof solutions for long-term success.",
    img: "./assets/img/scalable-architecture.jpg"
  },
  {
    number: "03",
    title: "End-to-End Service",
    text: "From ideation and UI/UX design to development, testing, deployment, and support.  We manage every step to ensure your project runs smoothly from start to finish.  Comprehensive solutions that save time, reduce stress, and guarantee results.",
    img: "./assets/img/end-to-end-service.jpg"
  },
  {
    number: "04",
    title: "Modern Technology Stack",
    text: "We leverage the latest frameworks, cloud platforms, and industry best practices.  Our approach ensures secure, high-performance, and scalable software solutions.  Build future-ready applications that stay ahead of technological trends.",
    img: "./assets/img/modern-tech.jpg"
  }
];


const container = document.getElementById("whyexpo-content");
const buttons = document.querySelectorAll(".whyexpo-filters button");
let current = 0;
let autoplay;

function showWhyexpo(i) {
  const s = whyexpoData[i];
  container.classList.add("fade-out");
  setTimeout(() => {
    container.innerHTML = `
      <div class="whyexpo-text" data-aos="slide-up">
        <div class="whyexpo-number">${s.number}</div>
        <div class="whyexpo-content">
          <h3>${s.title}</h3>
          <p>${s.text}</p>
        </div>
      </div>
      <div class="whyexpo-image" data-aos="slide-up">
        <img src="${s.img}" alt="${s.title}">
      </div>
    `;
    buttons.forEach(b => b.classList.remove("active"));
    buttons[i].classList.add("active");
    container.classList.remove("fade-out");
    AOS.refreshHard();
  }, 400);
}

// autoplay every 6s
function startWhyexpoAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => {
    current = (current + 1) % whyexpoData.length;
    showWhyexpo(current);
  }, 6000);
}

// manual switch
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    current = parseInt(btn.dataset.index);
    showWhyexpo(current);
    startWhyexpoAutoplay();
  });
});

// init
showWhyexpo(current);
startWhyexpoAutoplay();



          $(".industry-stats-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 800,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 }
      }
    });