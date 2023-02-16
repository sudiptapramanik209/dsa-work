// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=1bce681f')
// .then(function(res){
//     return res.json()
// })
// .then(function(res){
//     console.log(res)
// })
// .catch(function(err){
//     console.log("good morning")
// })

let container = document.getElementById('container');

let data;
async function getData() {
  try {
    let res = await fetch('https://fakestoreapi.com/products');

    //convert the stream into actual data

    data = await res.json();
    appendProducts(data);
  } catch (err) {
    console.log('err:', err);
  }
}

getData();
function appendProducts(data){
    container.innerHTML = null;
    //console.log(data);
    data.forEach(function(el){
        let div=document.createElement('div');
        let img=document.createElement('img')
        img.src=el.image
        let title = document.createElement('p');
        title.innerText = el.title;
        let price = document.createElement('p');
        price.innerText = el.price;
        div.append(img,title,price);
        container.append(div);
    })
}
function search(){
    let query=document.getElementById('search').value;
    let copy_data=data;
    copy_data=copy_data.filter(function(el){
        return el.title.toLowerCase().includes(query);
    });
    appendProducts(copy_data)
}