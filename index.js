document.getElementById('create').addEventListener('click',()=>{
    let x = document.getElementById('note-title').innerText; // Given title is taken as X

    let y = document.getElementById('note-content').innerText; // Given Content is taken as Y


    let note = document.createElement('div');
    let container = document.getElementById("demo");
    note.setAttribute("class","newnote");
    note.innerHTML = `
    <section id = "controls"><img src = "img/trash.png" id = "delete" onclick = "trash(event)"><img src = "img/pencil.png" id = "edit" onclick = "edit(event)"><img src = "img/thumbtack.png" id = "pin" onclick = "pin(event)"></section>
    <h4 class = "heading">${x}</h4>
    <div class = "content">${y}</div>
    `
    container.appendChild(note);

});
const trash  = (event) => {
    event.target.parentElement.parentElement.remove();
}
const edit = (event) => {
    console.log(event.target);
}
const pin = (event) => {
    document.querySelector('#pinned').appendChild(event.target.parentElement.parentElement)
}
/*const trash  = (event) => {
    event.target.parentElement.parentElement.remove();
}
const edit = (event) => {
    let edit = event.target.parentElement.parentElement;
    console.log(edit);
}
const pin = (event) => {
    console.log(event);
}
let create = () => {
    let note = document.createElement('div');
    let container = document.getElementById("demo");
    note.setAttribute("class","newnote");
    note.innerHTML = `
    <section id = "controls"><img src = "img/trash.png" id = "delete" onclick = "trash(event)"><img src = "img/pencil.png" id = "edit" onclick = "edit(event)"><img src = "img/thumbtack.png" id = "pin" onclick = "pin(event)"></section>
    <h4 class = "heading">${x}</h4>
    <div class = "content">${y}</div>
    `
    container.appendChild(note);
}*/