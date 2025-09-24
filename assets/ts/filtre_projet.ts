document.addEventListener("DOMContentLoaded", () => {
  const filterSelect = document.getElementById("filtre") as HTMLSelectElement;
  const projects = document.querySelectorAll(".project");

  filterSelect.addEventListener("change", () => {
    const selectedFilter = filterSelect.value;

    projects.forEach(project => {
      const category = project.getAttribute("data-category");
      if (
        selectedFilter === "Tous" ||
        category?.toLowerCase() === selectedFilter.toLowerCase()
      ) {
        (project as HTMLElement).style.display = "block";
      } else {
        (project as HTMLElement).style.display = "none";
      }
    });
  });
});

/* 
compiler avec :
npx tsc
*/
