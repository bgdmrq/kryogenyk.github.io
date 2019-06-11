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
    { 'src': './images/table-images/12.jpg', isShown: true }];

//initializing table
function initTable(data) {
    //create table
    var table = document.createElement("table");
    table.className = "table";

    //create title
    var title = document.createElement("tr");
    title.className = "table-title";
    var th = document.createElement("th");
    th.colSpan = 3;
    th.textContent = "Galeria cu pisici";
    title.appendChild(th);
    table.appendChild(title);

    //create table body
    var tbody = document.createElement("tbody");

    console.log(data.length);
    console.log(data[0].src);

    for (var i = 0; i < data.length; i = i + 3) {
        var tr = document.createElement("tr");
        tr.className = "table-title";
        var td = document.createElement("td");
        var card = document.createElement("div");
        var image = document.createElement("img");
        var image2 = document.createElement("img");
        var image3 = document.createElement("img");

        card.className = "card";
        image.className = "image";

        image.src = data[i].src;
        if (i + 1 < data.length)
            image2.src = data[i + 1].src;
        if (i + 2 < data.length)
            image3.src = data[i + 2].src;

        
        //td.appendChild()


    }

    //tre sa le bage cate 3. gotta fix dis.
    //populate table
    data.forEach(element => {

        var tr = document.createElement("tr");
        tr.className = "table-title";
        var td = document.createElement("td");
        var card = document.createElement("div");
        var image = document.createElement("img");
        var buttons = document.createElement("div");
        var edit_label = document.createElement("div");
        var edit_image = document.createElement("button");
        var delete_image = document.createElement("button");
        var src_label = document.createElement("input");

        card.className = "card";
        image.className = "image";
        buttons.className = "buttons";
        edit_image.className = "edit-image";
        delete_image.className = "delete-image";
        edit_label.className = "edit-label";
        src_label.type = "text";
        src_label.id = "src";
        src_label.name = "src";
        src_label.placeholder = "new source";

        buttons.appendChild(edit_image);
        buttons.appendChild(delete_image);
        card.appendChild(buttons);
        card.appendChild(image);
        card.appendChild(edit_label);
        image.src = element['src'];

        td.appendChild(card);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    return table;

}

window.onload = function () {

    document.getElementsByClassName("wrapper")[0].appendChild(initTable(tableData));
}

function initButtons() {
    //nr total shituri
    // aflat cate butoane trebe
    //facut butoane
}
// initTable();
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


