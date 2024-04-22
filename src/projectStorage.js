const projectStorage = initializeStorage();

function initializeStorage() {
  if (localStorage.getItem("projectStorage") === null) {
    let checkedStorage = [];
    localStorage.setItem("projectStorage", JSON.stringify(checkedStorage));
    return checkedStorage;
  } else {
    let checkedStorage = JSON.parse(localStorage.getItem("projectStorage"));
    return checkedStorage;
  }
}
export { projectStorage, initializeStorage };
