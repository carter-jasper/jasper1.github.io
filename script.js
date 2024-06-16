function filterProjects() {
    let input = document.getElementById('filterInput');
    let filter = input.value.toLowerCase();
    let projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        let text = project.textContent || project.innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            project.style.display = "";
        } else {
            project.style.display = "none";
        }
    });
}
