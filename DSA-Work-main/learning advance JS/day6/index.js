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
    try{
        let query=document.getElementById('search').value;
    let copy_data=data;
    copy_data=copy_data.filter(function(el){
        el.title.toLowerCase().includes(query)
            return el.title.toLowerCase().includes(query);
        
    });
    appendProducts(copy_data)
    }catch(err){
        console.log("err:", err);
        
    }
    
}