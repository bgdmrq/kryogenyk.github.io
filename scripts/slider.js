const numberOfElemnets = 6;
var tableData =
  [{ 'src': './images/table-images/1.jpg', isShown: true },
  { 'src': './images/table-images/2.jpg', isShown: true },
  { 'src': './images/table-images/3.jpg', isShown: true },
  { 'src': './images/table-images/4.jpg', isShown: true },
  { 'src': './images/table-images/5.jpg', isShown: true },
  { 'src': './images/table-images/6.jpg', isShown: true },
  { 'src': './images/table-images/7.jpg', isShown: true },
  { 'src': './images/table-images/8.jpg', isShown: true },
  { 'src': './images/table-images/9.jpg', isShown: true },
  { 'src': './images/table-images/10.jpg', isShown: true },
  { 'src': './images/table-images/11.jpg', isShown: true },
  { 'src': './images/table-images/12.jpg', isShown: true }]
//initializing table
  function initTable() {  
      var table = document.createElement("table");
      table.className="table";

      var tbody = document.createElement("tbody");


      
  }
  
  function initButtons() {
    //nr total shituri
    // aflat cate butoane trebe
    //facut butoane
  }
  initTable();
  initButtons();





//buttons functionalities

function deleteImage(that) {
  if (that.parentElement.classList.contains("buttons-active"))
    that.parentElement.parentElement.parentElement.remove();
  console.log(that.parentElement.classList);
}

function showButtons(that) {

  if (that.parentElement.classList.contains("active")) {
    that.parentElement.getElementsByClassName("buttons")[0].classList.remove("buttons-active");
    that.parentElement.classList.remove("active");
    that.parentElement.parentElement.getElementsByClassName("edit-label")[0].classList.remove("edit-label-active");
  }
  else {
    that.parentElement.classList.add("active");
    that.parentElement.getElementsByClassName("buttons")[0].classList.add("buttons-active");
  }

}

function changeSource(e, that) {

  if (e.keyCode == 13 && e.which == 13) {
    if (that.value != null) {
      that.parentElement.parentElement.getElementsByClassName("image")[0].src = that.value;
      that.parentElement.parentElement.getElementsByClassName("buttons")[0].classList.remove("buttons-active");
      that.
        that.blur();
      dispariInPizdaMatii();
    }
  }

}

function dispariInPizdaMatii() {
  that.parentElement.parentElement.getElementsByClassName("edit-label")[0].classList.remove("edit-label-active");
}


function editImage(that) {

  if (that.parentElement.parentElement.getElementsByClassName("edit-label")[0].classList.contains("edit-label-active")) {
    that.parentElement.parentElement.getElementsByClassName("edit-label")[0].classList.remove("edit-label-active");

  }
  else {
    that.parentElement.parentElement.getElementsByClassName("edit-label")[0].classList.add("edit-label-active");

  }

  if (!that.parentElement.classList.contains("buttons-active"))
    that.parentElement.parentElement.getElementsByClassName("edit-label")[0].classList.remove("edit-label-active");


  console.log(that.parentElement.parentElement.getElementsByClassName("edit-label")[0].classList);
  // var = that.parentElement.parentElement.getElementsByClassName("edit-label")[0].firstChild;
  console.log(that.parentElement.parentElement.getElementsByClassName("edit-label")[0].firstChild);


}

// fa-o candva 
function addImage(that) {

}


