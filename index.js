console.log("hello this is a good notes")
shownote();
let addBtn = document.getElementById('addbtn');

addBtn.addEventListener("click", (e) => {
  let addtxt = document.getElementById('text');
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  }
  else {
    notesobj = JSON.parse(notes);
  }
  if (addtxt.value != "") {
    notesobj.push(addtxt.value);
  }
  else {
    alert("please write the note  :)")

  }
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  shownote();

})

function shownote() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  }
  else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `

  <div class="notes">
       <h3 >Note ${index + 1}</h3>
       <hr/>
       <p style="margin:8%" class="add">${element}</p>
       <hr/>
      <button class="abtn" id="${index}" onclick="deletnote(this.id)">Delete Note</button>
  </div>

  `
  });
  let allnote = document.getElementById('All-note');
  if (notesobj.length != 0) {
    allnote.innerHTML = html;
  }
  else {
    allnote.innerHTML = "please write your Note;)";
  }
}

function deletnote(index) {
  // console.log(`i am deleting....of nod ${index}`)
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesobj = [];
  }
  else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownote();
}

let search = document.getElementById('search');
// console.log(notes);

search.addEventListener("input", function () {
  let inpval = search.value;
  let notes = document.getElementsByClassName('notes');

  Array.from(notes).forEach(function (element) {
    let cardtxt = element.getElementsByTagName("p")[0].innerText;
    if (cardtxt.includes(inpval)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })
})


