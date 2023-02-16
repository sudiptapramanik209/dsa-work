
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
        let p4=document.createElement("img");
        p4.src=element.Poster;
        let h2=document.createElement("h2");
        h2.innerText=element.Title;
        let p1=document.createElement("p");
        p1.innerText=element.Type;
        let p2=document.createElement("p");
        p2.innerText=element.Year;
        let p3=document.createElement("p");
        p3.innerText=element.imdbID;
        
        movie.append(p4,h2,p1,p2,p3);
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