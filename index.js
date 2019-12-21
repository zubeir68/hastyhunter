window.onload = function () {
  if (typeof (Storage) !== "undefined") {
    if (!localStorage.getItem("default")) {
      localStorage.setItem("default", "google");
    }
    let engine = localStorage.getItem("default");
    window.location.href = `../${engine}/${engine}.html`;
  } else {
    alert("Hasty Hunter - Your Browser does not support Web Storage");
  }

}