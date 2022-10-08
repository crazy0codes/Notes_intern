let text = document.getElementById('container');
let btn = document.getElementById('add');
btn.addEventListener
("click",()=>{
    text.style.display="block"
});
let sub = document.getElementById('submit');
sub.addEventListener
('click',()=>{
    let y = document.getElementById('para');
    let context = y.value;
    const d = new Date();
    let t = " Last edited " + d.toLocaleString();
    document.getElementById('value').innerText = context + t;
    text.style.display="none";
});