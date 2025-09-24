document.addEventListener("scroll", function () {
    var section = document.querySelector(".scroll-section");
    var content = document.querySelector(".scroll-content");
    var rect = section.getBoundingClientRect();
    var scrollProgress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
    // Translate horizontal en fonction du scroll
    var translateX = -(scrollProgress * (content.scrollWidth - window.innerWidth));
    content.style.transform = "translateX(".concat(translateX, "px)");
});
