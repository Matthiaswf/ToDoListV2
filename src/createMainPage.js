//Creating the Root Homepage
function createMainpage() {
  createHeader();
}
//Creates and attaches the Header
function createHeader() {
  //Create DOM Element
  const mainContainer = document.querySelector(".mainContainer");
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("headerContainer");
  headerContainer.setAttribute("headerContainer");
  mainContainer.appendChild(headerContainer);

  //Add Visual Elements
  const heading = document.createElement("h1");
  heading.classList("h1");
  heading.setAttribute("h1");
  heading.textContent = "To Do List";
  headerContainer.appendChild(heading);
}

export { createMainpage };
