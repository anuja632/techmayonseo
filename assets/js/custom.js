const testimonials = [
    {
        quote: `Appear instantly at the top of Google search results when potential customers are actively looking for your services. Our Search Ads ensure high-intent users see your business first, helping you capture quality leads and outperform competitors with precise keyword targeting.`,
        name: "Search Ads",
        designation: "Service 1",
        src: "assets/img/search-ads.jpg",
    },
    {
        quote: `Show visually attractive ads across millions of websites, apps, and YouTube. Our Display Ads increase brand recall, widen your reach, and keep your business in front of the audience even when they’re not actively searching — perfect for boosting awareness and visibility.`,
        name: "Display Ads",
        designation: "Service 2",
        src: "assets/img/display-ads.jpg",
    },
    {
        quote: `Deliver compelling video ads to your ideal audience on YouTube, based on their interests, behavior, search patterns, and viewing habits. Our YouTube Ad strategies help build brand impact, increase engagement, and drive stronger actions through powerful visual storytelling.`,
        name: "YouTube Ads",
        designation: "Service 3",
        src: "assets/img/youtube-ads.jpg",
    },
    {
        quote: `Reconnect with people who have already visited your website or interacted with your brand but didn’t convert. Remarketing Ads significantly reduce CPL and increase ROI by reminding warm audiences to return, complete a purchase, or submit an inquiry.`,
        name: "Remarketing Ads",
        designation: "Service 4",
        src: "assets/img/remarketing.jpg",
    },
    {
        quote: `Showcase your products directly at the top of Google with visually rich Shopping Ads that include images, prices, and product details. Ideal for e-commerce brands looking to drive more sales, attract high-intent shoppers, and boost visibility instantly.`,
        name: "Shopping Ads",
        designation: "Service 5",
        src: "assets/img/shopping-ads.jpg",
    },
    {
        quote: `Increase app installs and in-app engagement with highly optimized App Promotion Ads. We help you reach the right users across Google Search, YouTube, Display Network, and the Play Store to boost installs, usage, and long-term retention.`,
        name: "App Promotion Ads",
        designation: "Service 6",
        src: "assets/img/app-promotion.jpg",
    },
    {
        quote: `Track every click, call, lead, purchase, or install with a complete conversion tracking setup. Our analytics-driven approach ensures accurate performance data and continuous optimization, helping you maximize your return on ad spend with clarity and precision.`,
        name: "Conversion Tracking & Analytics",
        designation: "Service 7",
        src: "assets/img/analytics.jpg",
    },
    {
        quote: `Boost your conversions with optimized landing pages designed for speed, clarity, relevance, and persuasion. We refine layouts, headlines, CTA positions, and content flow to ensure every visitor moves smoothly from clicking your ad to taking action.`,
        name: "Landing Page Optimization",
        designation: "Service 8",
        src: "assets/img/landing-optimization.jpg",
    },
];
        let activeIndex = 0;
        const imageContainer = document.getElementById('image-container');
        const nameElement = document.getElementById('name');
        const designationElement = document.getElementById('designation');
        const quoteElement = document.getElementById('quote');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        function updateTestimonial(direction) {
            const oldIndex = activeIndex;
            activeIndex = (activeIndex + direction + testimonials.length) % testimonials.length;

            testimonials.forEach((testimonial, index) => {
                let img = imageContainer.querySelector(`[data-index="${index}"]`);
                if (!img) {
                    img = document.createElement('img');
                    img.src = testimonial.src;
                    img.alt = testimonial.name;
                    img.classList.add('testimonial-image');
                    img.dataset.index = index;
                    imageContainer.appendChild(img);
                }

                const offset = index - activeIndex;
                const absOffset = Math.abs(offset);
                const zIndex = testimonials.length - absOffset;
                const opacity = index === activeIndex ? 1 : 0.7;
                const scale = 1 - (absOffset * 0.15);
                const translateY = offset === -1 ? '-20%' : offset === 1 ? '20%' : '0%';
                const rotateY = offset === -1 ? '15deg' : offset === 1 ? '-15deg' : '0deg';

                img.style.zIndex = zIndex;
                img.style.opacity = opacity;
                img.style.transform = `translateY(${translateY}) scale(${scale}) rotateY(${rotateY})`;
            });

            nameElement.textContent = testimonials[activeIndex].name;
            designationElement.textContent = testimonials[activeIndex].designation;
            quoteElement.innerHTML = testimonials[activeIndex].quote.split(' ').map(word => `<span class="word">${word}</span>`).join(' ');

            animateWords();
        }

        function animateWords() {
            const words = quoteElement.querySelectorAll('.word');
            words.forEach((word, index) => {
                word.style.opacity = '0';
                word.style.transform = 'translateY(10px)';
                word.style.filter = 'blur(10px)';
                setTimeout(() => {
                    word.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out';
                    word.style.opacity = '1';
                    word.style.transform = 'translateY(0)';
                    word.style.filter = 'blur(0)';
                }, index * 20);
            });
        }

        function handleNext() {
            updateTestimonial(1);
        }

        function handlePrev() {
            updateTestimonial(-1);
        }

        prevButton.addEventListener('click', handlePrev);
        nextButton.addEventListener('click', handleNext);

        // Initial setup
        updateTestimonial(0);

        // Autoplay functionality
        const autoplayInterval = setInterval(handleNext, 5000);

        // Stop autoplay on user interaction
        [prevButton, nextButton].forEach(button => {
            button.addEventListener('click', () => {
                clearInterval(autoplayInterval);
            });
        });
        

const scrollBtn = document.getElementById("scroll-top");

// Show / Hide on Scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

// Smooth scroll to top
scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
    var swiper = new Swiper('.team-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    nav:false,
    autoplay: {
        delay: 1800,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
    }
});

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent default form submission

        // Submit the form data using FormSubmit
        fetch(form.action, {
            method: form.method,
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                alert("Thank you for contacting us! Your message has been sent.");
                form.reset(); // Reset form fields
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            alert("Oops! Something went wrong. Please try again.");
            console.error(error);
        });
    });
        const form2 = document.getElementById('contactForm2');

    form2.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        fetch(form2.action, {
            method: form2.method,
            body: new FormData(form2)
        })
        .then(response => {
            if (response.ok) {
                alert("Thank you! Your message has been sent.");
                form2.reset(); // Reset form fields
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            alert("Oops! Something went wrong. Please try again.");
            console.error(error);
        });
    });


    const cards = document.querySelectorAll(".card");


