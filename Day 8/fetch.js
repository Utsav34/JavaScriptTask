const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

// select DOM elements 

const getButton = document.querySelector('#getpost');
const createButton = document.querySelector('#createpost');
const updateButton = document.querySelector('#updatepost');
const patchButton = document.querySelector('#patchpost');
const deleteButton = document.querySelector('#deletepost');

//  Function for get information
function getposts(){
fetch(apiEndPoint).then((response) => {
    response.json().then((posts) => console.log(posts));
});
}

getButton.addEventListener("click", () =>{
    getposts();
});

// Function for create 

function createpost(){
    fetch(apiEndPoint).then((response) => {
        response.json().then((posts) => console.log(posts));

    });
}
createButton.addEventListener("click", () =>{
    createpost();
});

