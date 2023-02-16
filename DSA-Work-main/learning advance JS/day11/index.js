
let movie=document.getElementById("bob")
let id;
async function search(){
    try{
        let x=document.getElementById("input").value;
        let y=await fetch(`https://swapi.dev/api/people/?search=${x}`)
        let data=await y.json()
        //console.log(data)
        //appendData(data)
        let catchdata=data.results
        console.log(catchdata)
        if(catchdata!=undefined){
             appendData(catchdata);
         }
        
    }catch(err){
        console.log("err",err);
    }

    
}
function appendData(data){
    console.log(data)
    movie.innerHTML=null;
    data.forEach(function(element){
        //movie.innerHTML=null;
        // let p4=document.createElement("img");
        // p4.src=element.Poster;
        let h2=document.createElement("h2");
        h2.innerText=element.name;
        let p1=document.createElement("p");
        p1.innerText=element.birth_year;
        let p2=document.createElement("p");
        p2.innerText=element.gender;
        // let p3=document.createElement("p");
        // p3.innerText=element.imdbID;
        
        movie.append(h2,p1,p2);
    });
}

// function debounce(func,delay){
//     if(id){
//         clearTimeout(id);
//     }
//     id=setTimeout(function(){
//         func();
//     },delay)
// }