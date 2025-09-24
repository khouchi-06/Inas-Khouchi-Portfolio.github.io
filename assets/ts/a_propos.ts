document.addEventListener("scroll", () => {
  const section = document.querySelector(".scroll-section") as HTMLElement;
  const content = document.querySelector(".scroll-content") as HTMLElement;

  const rect = section.getBoundingClientRect();
  const scrollProgress = Math.min(Math.max(-rect.top / rect.height, 0), 1);

  // Translate horizontal en fonction du scroll
  const translateX = -(scrollProgress * (content.scrollWidth - window.innerWidth));
  content.style.transform = `translateX(${translateX}px)`;
});
