

function deleteImage(that) {
  console.log("delete");
  console.log(that);
  that.parentElement.parentElement.remove();
}



function showButtons(that) {

  console.log(that.parentElement.classList);
  console.log(that.parentElement.getElementsByClassName("buttons"));

  if (that.parentElement.classList.contains("active")) {
    that.parentElement.getElementsByClassName("buttons")[0].classList.remove("buttons-active");
    that.parentElement.classList.remove("active");
  }
  else {    
    that.parentElement.classList.add("active");
    that.parentElement.getElementsByClassName("buttons")[0].classList.add("buttons-active");
  }

}

function editImage(that) {
  



}