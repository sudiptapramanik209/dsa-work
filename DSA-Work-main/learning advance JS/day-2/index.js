function addData(n,c,i,p,g,s){
    this.name=n;
    this.category=c;
    this.image=i,
    this.price=p;
    this.gender=g;
    this.sold=s;
}
let arr=[];
function submitData(event){
    event.preventDefault();
    let form = document.getElementById('product_data');
    let name=form.name.value;
    let category=form.category.value;
    let image =form.image.value;
    let price=form.price.value;
    let gender=form.gender.value;
    let sold=form.sold.value;
    let product = new addData(name, category, image, price, gender, sold);
    arr.push(product);
    console.log(product);
    localStorage.setItem('Products',JSON.stringify(arr));
}
