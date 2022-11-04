let trash = () => {
    console.log("Madhan");
}
let edit = () => {
    console.log("Masdf");
}
let pin = () => {
    console.log("Maadfn");
}
document.getElementById('create').addEventListener('click',()=>{
    let x = document.getElementById('note-title').innerText; // Given title is taken as X

    let y = document.getElementById('note-content').innerText; // Given Content is taken as Y


    let Newnote = document.createElement('div');
    Newnote.setAttribute('id',x);
    Newnote.setAttribute('class','newnote'); // Created a container to wrap Title and content
    document.getElementById('demo').appendChild(Newnote);

    //Controls

    let Controls = document.createElement('section');
    Controls.setAttribute('id','controls');
    Newnote.appendChild(Controls); 
    
    let Trash = document.createElement('img');
    Trash.setAttribute('src','img/trash.png');
    Trash.setAttribute('id','delete');
    Trash.addEventListener('click',trash);
    Controls.appendChild(Trash);

    let Edit = document.createElement('img');
    Edit.setAttribute('src','img/pencil.png');
    Edit.setAttribute('id','edit');
    Trash.addEventListener('click',edit);
    Controls.appendChild(Edit);

    let Pin = document.createElement('img');
    Pin.setAttribute('src','img/thumbtack.png');
    Pin.setAttribute('id','pin');
    Trash.addEventListener('click',pin);
    Controls.appendChild(Pin);

// Images are used instead of svg
    let Heading = document.createElement('h4')
    Heading.setAttribute('class','heading'); //Created a div tag to put heading
    let HeadingNode = document.createTextNode(x); 
    Heading.appendChild(HeadingNode);
    Newnote.appendChild(Heading);

    let Content = document.createElement('div');
    Content.setAttribute('class','content'); // Create a div tag to put Note content
    let ContentNode = document.createTextNode(y); 
    Content.appendChild(ContentNode);
    Newnote.appendChild(Content);

});