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

function clearPage() {
  const headerContainer = document.getElementById("headerContainer");
  const projectListContainer = document.getElementById("projectListContainer");
  const mainDisplayContianer = document.getElementById("mainDisplayContainer");
  headerContainer.innerHTML = "";
  projectListContainer.innerHTML = "";
  mainDisplayContianer.innerHTML = "";
}

export { initializeStorage, clearPage };
