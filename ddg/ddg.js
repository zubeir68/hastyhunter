window.onload = function () {
  if (typeof (Storage) !== "undefined") {
    if (!localStorage.getItem("default")) {
      localStorage.setItem("default", "google");
    }
    let engine = localStorage.getItem('default');
    document.getElementById(`${engine}`).checked = true;
    document.getElementById("google").addEventListener("click", setDefault);
    document.getElementById("bing").addEventListener("click", setDefault);
    document.getElementById("ddg").addEventListener("click", setDefault);


  } else {
    alert("Hasty Hunter - Your Browser does not support Web Storage");
  }

}

const setDefault = () => {
  if (document.getElementById('google').checked) {
    localStorage.setItem("default", "google");
  }
  if (document.getElementById('bing').checked) {
    localStorage.setItem("default", "bing");
  }
  if (document.getElementById('ddg').checked) {
    localStorage.setItem("default", "ddg");
  }
  console.log(localStorage.getItem("default"));

}