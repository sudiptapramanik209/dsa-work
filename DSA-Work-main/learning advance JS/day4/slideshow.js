let count = 0;
let id;
function start(){
    let images = JSON.parse(localStorage.getItem('images'));
    let number = document.getElementById('number').value;
    let container = document.getElementById('container');
    container.innerHTML = null;
    let img = document.createElement('img');
    img.src = images[count];
    container.append(img);
    count++;
   id = setInterval(function(){
        if(count===images.length){
            count=0;
        }
        img.src = images[count];
       container.append(img);
        count++;
    },number)
    // console.log(number)
}

function pause(){
    clearInterval(id);
    alert('This is your favourite images');
}