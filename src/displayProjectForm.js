import { projectStorage } from "./projectStorage";
import { pageLoad } from "./pageLoad";
import { clearPage } from "./utility";

const displayProjectForm = () => {
  const projectList = document.querySelector(".projectList");
  const createProjectButton = document.querySelector(".createProjectButton");

  const form = document.createElement("form");
  form.classList.add("createProjectForm");
  form.setAttribute("id", "createProjectForm");

  const formHeading = document.createElement("h3");
  formHeading.classList.add("h3");
  formHeading.setAttribute("id", "h3");
  formHeading.textContent = "NEW PROJECT:";
  form.appendChild(formHeading);

  // const titleLabel = document.createElement("label");
  // titleLabel.setAttribute("for", "title");
  // titleLabel.textContent = "Name your project";
  // form.appendChild(titleLabel);
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.setAttribute("id", "titleInput");
  titleInput.setAttribute("name", "title");
  titleInput.placeholder = "Project Name";
  form.appendChild(titleInput);

  const descriptionLabel = document.createElement("label");
  // descriptionLabel.setAttribute("for", "description");
  // descriptionLabel.textContent = "Describe the project";
  // form.appendChild(descriptionLabel);
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.setAttribute("id", "descriptionInput");
  descriptionInput.setAttribute("name", "description");
  descriptionInput.placeholder = "Description";
  form.appendChild(descriptionInput);

  //Create a new Project Button
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "CREATE";
  form.appendChild(submitButton);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    obj.tasks = [];
    projectStorage.push(obj);
    localStorage.setItem("projectStorage", JSON.stringify(projectStorage));
    clearPage();
    pageLoad();
  });

  projectList.insertBefore(form, project);
};

export { displayProjectForm };
