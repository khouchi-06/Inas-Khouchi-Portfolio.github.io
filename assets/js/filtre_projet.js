document.addEventListener("DOMContentLoaded", function () {
    var filterSelect = document.getElementById("filtre");
    var projects = document.querySelectorAll(".project");
    filterSelect.addEventListener("change", function () {
        var selectedFilter = filterSelect.value;
        projects.forEach(function (project) {
            var category = project.getAttribute("data-category");
            if (selectedFilter === "Tous" ||
                (category === null || category === void 0 ? void 0 : category.toLowerCase()) === selectedFilter.toLowerCase()) {
                project.style.display = "block";
            }
            else {
                project.style.display = "none";
            }
        });
    });
});
/*
compiler avec :
npx tsc
*/
