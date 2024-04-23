import { projectStorage } from "./projectStorage";
import { pageLoad } from "./pageLoad";
import { clearPage } from "./utility";
import { displayProject } from "./displayProject";

const displayTaskForm = (projectTasks) => {
  const mainDisplayContainer = document.querySelector(".mainDisplayContainer");

  const form = document.createElement("form");
  form.classList.add("createtaskForm");
  form.setAttribute("id", "createtaskForm");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.setAttribute("id", "titleInput");
  titleInput.setAttribute("name", "title");
  form.appendChild(titleInput);

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.setAttribute("id", "descriptionInput");
  descriptionInput.setAttribute("name", "description");
  form.appendChild(descriptionInput);

  //Create a new task Button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  form.appendChild(submitButton);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    projectTasks.push(obj);
    localStorage.setItem("projectStorage", JSON.stringify(projectStorage));
    clearPage();
    pageLoad();
    displayProject(projectTasks);
  });

  mainDisplayContainer.appendChild(form);
};

export { displayTaskForm };
