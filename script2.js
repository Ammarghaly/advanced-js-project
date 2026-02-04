// Create your box object that contains books objects, ensure that you can
// a. count # of books inside box.
// b. delete any of these books in box according to book name or type.
// c. create book object and add it to box object content property
// • there is no inheritance
// • box object has the following properties: height, width,
// length,  numOfBooks, volume, material, content.
// • The content property contains an array of books.
// • book object has the following properties: title, numofChapters,
// author,  numofPages, publisher, numofCopies
// • you can define any function needed for both box and book objects.

function Book(
  title,
  author,
  publisher,
  numOfChapters,
  numOfPages,
  numOfCopies,
) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.numOfChapters = numOfChapters;
  this.numOfPages = numOfPages;
  this.numOfCopies = numOfCopies;
}
function Box(nameBox, height, width, length, material) {
  this.name = nameBox;
  this.id = crypto.randomUUID();
  this.height = height;
  this.width = width;
  this.length = length;
  this.material = material;
  this.content = [];
  this.volume = Number(height) * Number(width) * Number(length);
}
// Box.prototype.volume = function () {
//   return Number(this.height) * Number(this.width) * Number(this.length);
// };
Box.prototype.numOfBooks = function () {
  return this.content.length;
};

Box.prototype.addBookInContent = function (book) {
  if (book.constructor === Book) {
    this.content.push(book);
  } else {
    throw "Invalid object: Only instances of Book can be added to the box";
  }
};

Box.prototype.removeBookByTitle = function (title) {
  for (var i = 0; i < this.content.length; i++) {
    if (this.content[i].title == title) {
      this.content.splice(i, 1);
      --i;
    }
  }
};

Box.prototype.removeBookByAuthor = function (author) {
  for (var i = 0; i < this.content.length; i++) {
    if (this.content[i].author == author) {
      this.content.splice(i, 1);
      --i;
    }
  }
};

Box.prototype.getContent = function () {
  var booksArray = [];
  for (var i = 0; i < this.content.length; i++) {
    var book = {
      title: this.content[i].title,
      author: this.content[i].author,
      publisher: this.content[i].publisher,
      numOfChapters: this.content[i].numOfChapters,
      numOfPages: this.content[i].numOfPages,
      numOfCopies: this.content[i].numOfCopies,
    };
    booksArray.push(book);
  }
  return booksArray;
};

Box.prototype.findBook = function (title) {
  var foundBooks = [];
  for (var i = 0; i < this.content.length; i++) {
    if (this.content[i].title === title) {
      var book = {
        title: this.content[i].title,
        author: this.content[i].author,
        publisher: this.content[i].publisher,
        numOfChapters: this.content[i].numOfChapters,
        numOfPages: this.content[i].numOfPages,
        numOfCopies: this.content[i].numOfCopies,
      };
      foundBooks.push(book);
    }
  }
  return foundBooks;
};

Box.prototype.displayInfo = function () {
  var info = {
    height: this.height,
    width: this.width,
    length: this.length,
    material: this.material,
    volume: this.volume,
    numOfBooks: this.numOfBooks,
    content: [],
  };
  for (let i = 0; i < this.content.length; i++) {
    var book = {
      title: this.content[i].title,
      author: this.content[i].author,
      publisher: this.content[i].publisher,
      numOfChapters: this.content[i].numOfChapters,
      numOfPages: this.content[i].numOfPages,
      numOfCopies: this.content[i].numOfCopies,
    };
    info.content.push(book);
  }
  return info;
};

var book1 = new Book("Learn JavaScript", "John Doe", "TechPress", 12, 350, 3);
var book2 = new Book("Mastering Python", "Jane Smith", "CodeWorld", 15, 420, 2);
var book3 = new Book(
  "HTML & CSS Guide",
  "Alice Johnson",
  "WebBooks",
  10,
  280,
  5,
);
var book4 = new Book("React in Depth", "Mark Brown", "ReactPress", 14, 390, 4);
var book5 = new Book("Data Structures", "Tom Wilson", "AlgoPub", 18, 500, 1);

//=========================================================================================
var storedBoxes = JSON.parse(localStorage.getItem("Boxes")) || [];
var boxes = storedBoxes.map(reviveBox);
var books;
if (boxes[0]) {
  books = boxes[0].content;
} else {
  books = [];
}

function reviveBox(rawBox) {
  var box = new Box(
    rawBox.name,
    rawBox.height,
    rawBox.width,
    rawBox.length,
    rawBox.material,
  );
  box.id = rawBox.id;
  box.content = rawBox.content.map(function (rawBook) {
    var book = new Book(
      rawBook.title,
      rawBook.author,
      rawBook.publisher,
      rawBook.numOfChapters,
      rawBook.numOfPages,
      rawBook.numOfCopies,
    );
    book.id = rawBook.id;
    return book;
  });
  box.numOfBooks = box.content.length;
  return box;
}

var deleteType = "";
var boxHeight = document.getElementById("height");
var boxWidth = document.getElementById("width");
var boxLength = document.getElementById("length");
var boxMaterial = document.getElementById("material");
var nameBoxInput = document.getElementById("nameBox");
var addBox = document.getElementById("addBox");
var addBook = document.getElementById("addBook");
var nameBoxUI = document.getElementById("nameBoxUI");
var volumeBox = document.getElementById("volumeBox");
var modelAddBox = document.getElementById("modelAddBox");
var modelAddBook = document.getElementById("modelAddBook");
var btnAddBox = document.getElementById("btnAddBox");
var btnAddBook = document.getElementById("btnAddBook");
var models = document.getElementById("models");
var deleteBtnName = document.getElementById("deleteBtnName");
var deleteBtnAuthor = document.getElementById("deleteBtnAuthor");
var floeBtn = document.getElementById("floeBtn");
var titleInput = document.getElementById("title");
var authorInput = document.getElementById("author");
var publisherInput = document.getElementById("publisher");
var numOfChaptersInput = document.getElementById("numOfChapters");
var numOfPagesInput = document.getElementById("numOfPages");
var numOfCopiesInput = document.getElementById("numOfCopies");
var booksContainer = document.querySelector(".books");
var deleteBtnAuthor = document.querySelector("#deleteBtnAuthor");
var modelDelete = document.getElementById("modelDelete");
var deleteByName = document.getElementById("deleteByName");
var deleteBtnName = document.getElementById("deleteBtnName");
var deleteBtn = document.getElementById("deleteBtn");

function syncBoxesWithUI() {
  if (boxes.length === 0) {
    btnAddBook.disabled = true;
    btnAddBook.classList.add("disabled");
  } else {
    renderBox(boxes[0]);
    btnAddBox.disabled = true;
    btnAddBox.classList.add("disabled");
  }
}

function renderBook(par) {
  var book = `<div class="book">
          <h4 class="title">${par.title}</h4>
          <img src="len.png" class="len-book" />
          <div class="book-info">
            <p><b>Author:</b> ${par.author}</p>
            <p><b>Publisher:</b> ${par.publisher}</p>
            <p><b>Chapters:</b> ${par.numOfChapters}</p>
            <p><b>Pages:</b> ${par.numOfPages}</p>
            <p><b>Copies:</b> ${par.numOfCopies}</p>
          </div>
        </div>`;
  return book;
}

function syncBooksWithUI() {
  booksContainer.innerHTML = "";
  books.forEach(function (book) {
    booksContainer.innerHTML += renderBook(book);
  });
}

btnAddBook.addEventListener("click", function () {
  models.style.display = "flex";
  models.style.backgroundColor = "rgb(0, 128, 0, 0.2)";
  modelAddBook.style.display = "flex";
});

btnAddBox.addEventListener("click", function () {
  models.style.display = "flex";
  modelAddBox.style.display = "flex";
});

floeBtn.addEventListener("click", function () {
  deleteBtnName.classList.toggle("active");
  deleteBtnAuthor.classList.toggle("active");
});

function closeModel() {
  models.style.display = "none";
  modelAddBox.style.display = "none";
  modelAddBook.style.display = "none";
  modelDelete.style.display = "none";
  deleteType = "";
}

models.addEventListener("click", function (e) {
  if (e.target === models) {
    closeModel();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModel();
  }
});

function renderBox(box) {
  nameBoxUI.textContent = box.name;
  volumeBox.textContent = box.volume + " سم³";
}

if (boxes.length > 0) {
  btnAddBox.disabled = true;
  btnAddBox.classList.add("disabled");
}

addBox.addEventListener("click", function () {
  if (boxes.length > 0) return;

  var boxName = nameBoxInput.value.trim();
  var height = Number(boxHeight.value);
  var width = Number(boxWidth.value);
  var length = Number(boxLength.value);
  var material = boxMaterial.value.trim();

  if (!boxName) {
    alert("من فضلك أدخل اسم الصندوق");
    return;
  }

  if (!material) {
    alert("من فضلك أدخل خامة الصندوق");
    return;
  }

  if (height <= 0 || width <= 0 || length <= 0) {
    alert("الأبعاد يجب أن تكون أرقام أكبر من صفر");
    return;
  }

  var newBox = new Box(boxName, height, width, length, material);

  boxes.push(newBox);
  localStorage.setItem("Boxes", JSON.stringify(boxes));

  renderBox(newBox);

  addBox.disabled = true;
  addBox.classList.add("disabled");
  nameBoxInput.value = "";
  boxHeight.value = "";
  boxWidth.value = "";
  boxMaterial.value = "";
  boxLength.value = "";
  closeModel();
  location.reload();
});
addBook.addEventListener("click", function () {
  var title = titleInput.value.trim();
  var author = authorInput.value.trim();
  var publisher = publisherInput.value.trim();
  var numOfChapters = Number(numOfChaptersInput.value);
  var numOfPages = Number(numOfPagesInput.value);
  var numOfCopies = Number(numOfCopiesInput.value);

  if (!title) {
    alert("من فضلك أدخل اسم الكتاب");
    titleInput.focus();
    return;
  }

  if (!author) {
    alert("من فضلك أدخل اسم المؤلف");
    authorInput.focus();
    return;
  }

  if (!publisher) {
    alert("من فضلك أدخل اسم دار النشر");
    publisherInput.focus();
    return;
  }

  if (
    isNaN(numOfChapters) ||
    numOfChapters <= 0 ||
    !Number.isInteger(numOfChapters)
  ) {
    alert("عدد الفصول يجب أن يكون رقمًا صحيح");
    numOfChaptersInput.focus();
    return;
  }

  if (isNaN(numOfPages) || numOfPages <= 0 || !Number.isInteger(numOfPages)) {
    alert("عدد الصفحات يجب أن يكون رقمًا صحيح");
    numOfPagesInput.focus();
    return;
  }

  if (
    isNaN(numOfCopies) ||
    numOfCopies <= 0 ||
    !Number.isInteger(numOfChapters)
  ) {
    alert("عدد النسخ يجب أن يكون رقمًا صحيح");
    numOfCopiesInput.focus();
    return;
  }

  var newBook = new Book(
    title,
    author,
    publisher,
    numOfChapters,
    numOfPages,
    numOfCopies,
  );

  boxes[0].addBookInContent(newBook);
  localStorage.setItem("Boxes", JSON.stringify(boxes));

  syncBooksWithUI();

  titleInput.value = "";
  authorInput.value = "";
  publisherInput.value = "";
  numOfChaptersInput.value = "";
  numOfPagesInput.value = "";
  numOfCopiesInput.value = "";
  updateDeleteButtonsVisibility();
  closeModel();
});

deleteBtnAuthor.addEventListener("click", function () {
  models.style.display = "flex";
  deleteByName.textContent = "الكاتب";
  deleteType = "author";
  models.style.backgroundColor = "rgba(128, 0, 0, 0.25)";
  modelDelete.style.display = "flex";
});
deleteBtnName.addEventListener("click", function () {
  models.style.display = "flex";
  deleteByName.textContent = "الكتاب";
  deleteType = "name";
  models.style.backgroundColor = "rgba(128, 0, 0, 0.25)";
  modelDelete.style.display = "flex";
});
deleteBtn.addEventListener("click", function () {
  if (!boxes[0]) return;
  var value = deleteInput.value.trim();
  if (!value) return;
  if (deleteType === "name") {
    boxes[0].removeBookByTitle(value);
  }
  if (deleteType === "author") {
    boxes[0].removeBookByAuthor(value);
  }
  books = boxes[0].content;
  localStorage.setItem("Boxes", JSON.stringify(boxes));
  syncBooksWithUI();
  deleteInput.value = "";
  updateDeleteButtonsVisibility();
  closeModel();
  alert("تم الحذف بنجاح");
});

function updateDeleteButtonsVisibility() {
  if (!books || books.length === 0) {
    floeBtn.style.display = "none";
  } else {
    floeBtn.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  syncBoxesWithUI();
  syncBooksWithUI();
  updateDeleteButtonsVisibility();
});
