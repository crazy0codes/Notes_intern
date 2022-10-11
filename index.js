var title = [];
var data  = [];
document.getElementById('create').addEventListener('click',()=>{
    let x = document.getElementById('note-title').innerText; // Given title is taken as X

    let y = document.getElementById('note-content').innerText; // Given Content is taken as Y

    let Newnote = document.createElement('div');
    Newnote.setAttribute('id',x);
    Newnote.setAttribute('class','newnote'); // Created a container to wrap Title and content
    document.getElementById('demo').appendChild(Newnote);

    let Heading = document.createElement('h4')
    Heading.setAttribute('class','heading'); //Created a div tag to put heading
    let HeadingNode = document.createTextNode(x); 
    Heading.appendChild(HeadingNode);
    Newnote.appendChild(Heading,Newnote.children[0]);

    let Content = document.createElement('div');
    Content.setAttribute('class','content'); // Create a div tag to put Note content
    let ContentNode = document.createTextNode(y); 
    Content.appendChild(ContentNode);
    Newnote.appendChild(Content,Newnote.children[-1]);


})