import { projectStorage } from "./projectStorage";
import { clearPage } from "./utility";
import { createHeader, createProjectList } from "./createMainPage";
import { displayTaskForm } from "./displayTaskForm";

const mainDisplayContainer = document.querySelector(".mainDisplayContainer");

function displayProject(projectTasks, projectName) {
  clearPage();
  createHeader();
  createProjectList();
  const mainDisplayContent = document.createElement("div");
  mainDisplayContainer.classList.add("mainDisplayContainer");
  mainDisplayContainer.setAttribute("id", "mainDisplayContainer");
  mainDisplayContainer.appendChild(mainDisplayContent);
  //Project Heading
  const projectHeading = document.createElement("h2");
  projectHeading.classList.add("h2");
  projectHeading.setAttribute("id", "h2");
  projectHeading.textContent = projectName;
  mainDisplayContainer.appendChild(projectHeading);

  projectTasks.forEach((item) => {
    item.indexValue = projectTasks.indexOf(item);

    //Display the Task information
    const taskInfo = document.createElement("div");
    taskInfo.classList.add("taskInfo");
    taskInfo.setAttribute("id", "taskInfo");
    taskInfo.textContent = getTaskInfo(item);
    mainDisplayContainer.appendChild(taskInfo);
    mainDisplayContainer.appendChild(taskInfo);
  });

  //Create Task Button
  const createTaskButton = document.createElement("button");
  createTaskButton.setAttribute("id", "createTaskButton");
  createTaskButton.classList.add("createTaskButton");
  createTaskButton.textContent = "Create a Task";
  mainDisplayContainer.appendChild(createTaskButton);
  createTaskButton.addEventListener("click", () => {
    displayTaskForm(projectTasks, projectName);
  });
}
//Function has to be outside of the class because it can not be passed through JSON
function getTaskInfo(item) {
  return `${item.title},${item.description}`;
}
export { displayProject };
