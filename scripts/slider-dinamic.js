const numberOfElemnets = 6;
var pageNumber = 0;
var currentPage = 0;
var firstLoad = 0;
var tableData = [
  { src: "./images/table-images/1.jpg", isShown: false },
  { src: "./images/table-images/2.jpg", isShown: false },
  { src: "./images/table-images/3.jpg", isShown: false },
  { src: "./images/table-images/4.jpg", isShown: false },
  { src: "./images/table-images/5.jpg", isShown: false },
  { src: "./images/table-images/6.jpg", isShown: false },
  { src: "./images/table-images/7.jpg", isShown: false },
  { src: "./images/table-images/8.jpg", isShown: false },
  { src: "./images/table-images/9.jpg", isShown: false },
  { src: "./images/table-images/10.jpg", isShown: false },
  { src: "./images/table-images/11.jpg", isShown: false },
  { src: "./images/table-images/12.jpg", isShown: false }
];

window.onload = function() {
  var container = document.getElementsByClassName("wrapper")[0];
  var tableContainer = document.createElement("div");
  tableContainer.className = "table";
  tableContainer.id = "catsWrapper";
  container.appendChild(tableContainer);
  renderTableContent(tableContainer, tableData, 0);
};

//buttons functionalities
function deleteImage(element) {
  var elementId = element.id;
  var index = parseInt(elementId.substring(5));
  tableData.splice(parseInt(currentPage * 6 + index), 1);
  var catsContainer = document.getElementById("catsWrapper");
  //   console.log("pagina curenta cand dau delete: " + currentPage);
  //   console.log("indexul pizdii: " + index);
  //   console.log("numarul pizdii: " + parseInt(currentPage * 6 + index));

  if (tableData.length % 12 == 0) {
      currentPage--;
    renderTableContent(catsContainer, tableData, currentPage);
  } else {
    // console.log(currentPage);
    // console.log(tableData.length);
    renderPageButtons();
    renderTableContent(catsContainer, tableData, currentPage);
  }
}

//functionalitate buton edit image
function editImage(element) {
  if (
    element
      .getElementsByClassName("edit-label")[0]
      .classList.contains("edit-label-active")
  )
    element
      .getElementsByClassName("edit-label")[0]
      .classList.remove("edit-label-active");
  else
    element
      .getElementsByClassName("edit-label")[0]
      .classList.add("edit-label-active");
  if (!element.classList.contains("active"))
    element
      .getElementsByClassName("edit-label")[0]
      .classList.remove("edit-label-active");
}

//change the source of the image
function changeSource(e, elem) {
  if (e.keyCode == 13 && e.which == 13) {
    e.srcElement.parentElement.parentElement.getElementsByClassName(
      "image"
    )[0].src = e.srcElement.value;
    tableData[
      parseInt(e.srcElement.parentElement.parentElement.id.substring(5)) +
        currentPage * numberOfElemnets
    ] = { src: e.srcElement.value, isShown: true };
    console.log(tableData);
    e.srcElement.value = "";
    e.srcElement.parentElement.parentElement.classList.remove("active");
    e.srcElement.parentElement.parentElement
      .getElementsByClassName("buttons")[0]
      .classList.remove("buttons-active");
    e.srcElement.parentElement.parentElement
      .getElementsByClassName("edit-label")[0]
      .classList.remove("edit-label-active");
  }
}

//add-image-label display
function showAddImageLabel(that) {
  if (!that.classList.contains("add-button-active")) {
    that.classList.add("add-button-active");
    that.parentElement.parentElement
      .getElementsByClassName("add-image-label")[0]
      .classList.add("add-image-label-active");
  } else {
    that.classList.remove("add-button-active");
    that.parentElement.parentElement
      .getElementsByClassName("add-image-label")[0]
      .classList.remove("add-image-label-active");
  }
}

//push pe array la o pozik noua,, la final
function addImage(e, that) {
  var catsContainer = document.getElementById("catsWrapper");

  if (e.keyCode == 13 && e.which == 13) {
    var imToAdd = tableData.push({ src: that.value, isShown: false });
    console.log("in add function:");
    console.log(tableData);
    that.value = "";
    document
      .getElementsByClassName("add-button")[0]
      .classList.remove("add-button-active");
    document
      .getElementsByClassName("add-image-label")[0]
      .classList.remove("add-image-label-active");
    currentPage = 0;
    renderTableContent(catsContainer, tableData, 0);
  }
}

//page buttons + click listener for them
function renderPageButtons() {
  console.log(currentPage);
  var container = document.getElementsByClassName("wrapper")[0];
  var pageButtonsContainer = document.getElementsByClassName(
    "page-buttons-container"
  )[0];

  if (pageButtonsContainer != undefined) {
    pageButtonsContainer.parentElement.removeChild(pageButtonsContainer);
  }

  pageButtonsContainer = document.createElement("div");
  pageButtonsContainer.className = "page-buttons-container";

  var nrOfPages = parseInt(tableData.length / numberOfElemnets);

  if (tableData.length % numberOfElemnets > 0) {
    nrOfPages++;
  }

  for (var i = 0; i < nrOfPages; i++) {
    let aux = document.createElement("button");
    aux.className = "page-button";
    aux.innerText = i + 1;
    if (currentPage + 1 == 0 && aux.innerText == 1) {
      aux.classList.add("page-button-active");
    }
    if (aux.innerText == currentPage + 1) {
      aux.classList.add("page-button-active");
    }

    aux.addEventListener("click", function($event) {
      var catsContainer = document.getElementById("catsWrapper");
      currentPage = aux.innerText - 1;
      //console.log(currentPage);

      renderTableContent(catsContainer, tableData, aux.innerText - 1);
    });

    pageButtonsContainer.appendChild(aux);
  }

  container.appendChild(pageButtonsContainer);
}

//rendering of a card element
function renderCardElement(container, data, id) {
  if (
    data == undefined ||
    !data.hasOwnProperty("src") ||
    !data.hasOwnProperty("isShown")
  ) {
    throw new Error("unsupported input format");
  }
  var card = document.createElement("div");
  var image = document.createElement("img");
  var buttonsContainer = document.createElement("div");
  var editLabel = document.createElement("div");
  var editImageButton = document.createElement("button");
  var deleteImageButton = document.createElement("button");
  var srcLabel = document.createElement("input");

  card.className = "card";
  card.id = "card_" + id;
  image.className = "image";
  buttonsContainer.className = "buttons";
  editImageButton.className = "edit-image";
  deleteImageButton.className = "delete-image";
  editLabel.className = "edit-label";
  srcLabel.className = "src-label";
  srcLabel.type = "text";
  srcLabel.id = "src";
  srcLabel.name = "src";
  srcLabel.placeholder = "new source";
  srcLabel.onkeypress = function(e, srcLabel) {
    changeSource(e, srcLabel);
  };

  buttonsContainer.appendChild(deleteImageButton);
  buttonsContainer.appendChild(editImageButton);
  editLabel.appendChild(srcLabel);
  card.appendChild(image);
  card.appendChild(buttonsContainer);
  card.appendChild(editLabel);
  image.src = data["src"];

  image.addEventListener("click", function($event) {
    if (
      $event.target.parentElement
        .getElementsByClassName("buttons")[0]
        .classList.contains("buttons-active")
    )
      $event.target.parentElement
        .getElementsByClassName("buttons")[0]
        .classList.remove("buttons-active");
    else
      $event.target.parentElement
        .getElementsByClassName("buttons")[0]
        .classList.add("buttons-active");

    if ($event.target.parentElement.classList.contains("active")) {
      $event.target.parentElement.classList.remove("active");
      editImage($event.target.parentElement);
    } else {
      $event.target.parentElement.classList.add("active");
    }
  });

  deleteImageButton.addEventListener("click", function($event) {
    deleteImage($event.target.parentElement.parentElement);
  });

  editImageButton.addEventListener("click", function($event) {
    editImage($event.target.parentElement.parentElement);
  });

  container.appendChild(card);
}

function renderTableContent(container, data, pageNumber) {
  var startIndex = pageNumber * numberOfElemnets;
  var requiredElemsForThisPage = pageNumber == 0 ? 0 : startIndex + 1;
  var endIndex = (parseInt(pageNumber) + 1) * numberOfElemnets - 1;

  //   if (data.length < requiredElemsForThisPage) {
  //     throw new Error(
  //       "invalid page number: " +
  //         pageNumber +
  //         " ,total number of elements: " +
  //         data.length
  //     );
  //   }

  tableData.forEach(it => (it.isShown = false));

  for (var i = startIndex; i <= endIndex && i < data.length; i++) {
    data[i].isShown = true;
  }

  var table = document.getElementById("catsTable");
  if (table != undefined) {
    table.parentElement.removeChild(table);
  }

  table = document.createElement("table");
  table.id = "catsTable";
  table.className = "table";
  table.align = "center";

  var tbody = document.createElement("tbody");
  var shownData = data.filter(it => it.isShown);
  addTableContent(tbody, shownData);
  table.appendChild(tbody);
  container.appendChild(table);
  renderPageButtons();
}

//add content w/ isShown true to table
function addTableContent(tbody, shownData, itemsPerRow = 3) {
  var nrOfRows = parseInt(shownData.length / itemsPerRow);
  if (shownData.length % itemsPerRow != 0) nrOfRows++;

  //create table elements
  for (var i = 0; i < nrOfRows; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < itemsPerRow; j++) {
      var actualIndex = i * itemsPerRow + j;
      if (actualIndex >= shownData.length) break;
      var td = document.createElement("td");

      renderCardElement(td, shownData[actualIndex], actualIndex);

      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}
