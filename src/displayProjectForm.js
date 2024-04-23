import { projectStorage } from "./projectStorage";
import { pageLoad } from "./pageLoad";
import { clearPage } from "./utility";

const displayProjectForm = () => {
  const projectListContainer = document.querySelector(".projectListContainer");

  const form = document.createElement("form");
  form.classList.add("createProjectForm");
  form.setAttribute("id", "createProjectForm");

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

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  form.appendChild(submitButton);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    console.log(obj);
    obj.tasks = [];
    projectStorage.push(obj);
    localStorage.setItem("projectStorage", JSON.stringify(projectStorage));
    clearPage();
    pageLoad();
  });

  projectListContainer.appendChild(form);
};

export { displayProjectForm };
