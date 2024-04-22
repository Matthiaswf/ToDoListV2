//Creating the Root Homepage
function createMainPage() {
  createHeader();
}
//Creates and attaches the Header
function createHeader() {
  //Create DOM Element
  const mainContainer = document.querySelector(".mainContainer");
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("headerContainer");
  headerContainer.setAttribute("id", "headerContainer");
  mainContainer.appendChild(headerContainer);

  //Add Visual Elements
  const heading = document.createElement("h1");
  heading.classList.add("h1");
  heading.setAttribute("id", "h1");
  heading.textContent = "To Do List";
  headerContainer.appendChild(heading);
}

export { createMainPage };
