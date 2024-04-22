//Creating the Root Homepage
function createMainPage() {
  createHeader();
}
//Creates and attaches the Header
function createHeader() {
  const headerContainer = document.querySelector(".headerContainer");
  const heading = document.createElement("h1");
  heading.classList.add("h1");
  heading.setAttribute("id", "h1");
  heading.textContent = "To Do List";
  headerContainer.appendChild(heading);
}

function createProjectList() {}
export { createMainPage };
