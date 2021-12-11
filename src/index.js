console.log('%c HI', 'color: firebrick')
//WORKS!!!Challenge 1 Gets info from fetch and posts images onto the DOM
//Image sizes vary???

document.addEventListener('DOMContentLoaded', fetchPics)

function fetchPics(){
    return fetch(`https://dog.ceo/api/breeds/image/random/4`)
    .then(resp =>resp.json())
    .then(pics => renderPics(pics.message)) 
}

function renderPics(pics){
    const container = document.getElementById('dog-image-container');
    pics.forEach(pic => {
        const imgs = document.createElement('img');
        imgs.src = pic;
        imgs.height= 100;
        //imgs.width= '310';
        container.appendChild(imgs);
    });
}


//WORKS!!!! Challenge 2 Gets dog breeds from URL and adds breeds to page in <ul>
document.addEventListener('DOMContentLoaded', fetchBreeds)

function fetchBreeds(){
    return fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(resp => resp.json())
    .then(breeds => renderBreeds(breeds.message))
}

function renderBreeds(breeds){
    let breedList = document.getElementById('dog-breeds')
    for(const breed in breeds){
        let list = document.createElement('li');
        list.innerText = breed;
        breedList.appendChild(list);
        const dropDown = document.getElementById("breed-dropdown")

    dropDown.addEventListener("change", (e) => {
        let selected = e.target.value;
        let name= list.innerText
        sortList(name, selected);
        form.reset()
    })

function sortList(x, y="b"){
    breedList.removeChild(list)
    if(x[0] === y){

        let l = document.createElement('li');
        l.innerText = x;
        breedList.appendChild(l)
        prepFont();
            }
        }  
    }   
    prepFont();  
};


//WORKS!!! Challenge 3 User clicks on li and the font color changes



function prepFont(){
    let all = document.querySelectorAll('li')
    for(const breed of all){
        breed.addEventListener('click', changeFont)
    }
}
function changeFont(e){
    let dog = e.target//.innerText 
    dog.style.color= "#ff0000";
}

//Challenge 4 need to filter breeds by first letter using the dropdown menu
//Code is within Challenge 2


