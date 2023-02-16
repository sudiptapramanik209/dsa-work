
let movie=document.getElementById("bob")
let id;
async function search(){
    try{
        let x=document.getElementById("input").value;
        let y=await fetch(`https://www.omdbapi.com/?apikey=1bce681f&s=${x}`)
        let data=await y.json()
        console.log(data)
        let actualdata=data.Search;
        console.log(actualdata);
        if(actualdata != undefined){
            appendData(actualdata);
        }
    }catch(err){
        console.log("err",err);
    }

    
}
function appendData(data){
    data.forEach(function(element){
        //movie.innerHTML=null;
        let p=document.createElement("p");
        p.innerText=element.Title;
        movie.append(p);
    });
}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func();
    },delay)
}