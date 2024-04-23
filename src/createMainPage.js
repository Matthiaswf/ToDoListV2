import { projectStorage } from "./projectStorage";
import { displayProjectForm } from "./displayProjectForm";
import { clearPage } from "./utility";
import { pageLoad } from "./pageLoad";
import { displayProject } from "./displayProject";

//Creating the Root Homepage
function createMainPage() {
  createHeader();
  createProjectList();
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
//Creates ProjectList section
function createProjectList() {
  const projectListContainer = document.getElementById("projectListContainer");
  //Heading
  const heading = document.createElement("h2");
  heading.setAttribute("id", "h2");
  heading.classList.add("h2");
  heading.textContent = "Current Projects";
  projectListContainer.appendChild(heading);

  //Displaying Projects
  projectStorage.forEach((item) => {
    //Needed for the display project function
    const projectTasks = item.tasks;
    //Dom Elements
    const projectInfo = document.createElement("div");
    projectInfo.classList.add("project");
    projectInfo.setAttribute("id", "project");
    projectInfo.textContent = getProjectInfo(item);
    projectListContainer.appendChild(projectInfo);

    //Display Project Button
    const displayProjectButton = document.createElement("button");
    displayProjectButton.classList.add("displayProjectButton");
    projectInfo.appendChild(displayProjectButton);
    displayProjectButton.textContent = "Display";
    displayProjectButton.addEventListener("click", () => {
      displayProject(projectTasks);
    });

    //Delete Project Button
    let deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("deleteProjectButton");
    projectInfo.appendChild(deleteProjectButton);
    deleteProjectButton.textContent = "Delete";
    deleteProjectButton.itemIndex = item.indexValue;
    deleteProjectButton.addEventListener("click", (event) => {
      projectStorage.splice(event.currentTarget.itemIndex, 1);
      localStorage.setItem("projectStorage", JSON.stringify(projectStorage));
      clearPage();
      pageLoad();
    });
  });

  //Create Project Button
  const createProjectButton = document.createElement("button");
  createProjectButton.classList.add("createProjectButton");
  createProjectButton.setAttribute("id", "createProjectButton");
  createProjectButton.textContent = "Create a new Project";
  projectListContainer.appendChild(createProjectButton);
  createProjectButton.addEventListener("click", () => {
    displayProjectForm();
  });
}
//Function has to be outside of the class because it can not be passed through JSON
function getProjectInfo(item) {
  return `${item.title},${item.description},${item.tasks.length}`;
}
export { createMainPage, createHeader, createProjectList };
