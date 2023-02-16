
function myarr(){
    Object.defineProperty(this,'length',{
        value:0,
        enumerable:false,
        writable:true
    })
}

myarr.prototype.push=function(element){
    this[this.length]=element
    this.length++
    return this.length
}
myarr.prototype.pop=function(){
    this.length--
    var popelem=this[this.length]
    delete this[this.length]
    
    return popelem

}
myarr.prototype.mymap = function(callback) {
    const resultArray = new myarr();
    for (let index = 0; index < this.length; index++) {
        if(this.hasOwnProperty(index)){
        resultArray.push(callback(this[index], index, this));
        }
    }
    return resultArray;
}

var arr= new myarr()
arr.push("sudipta")
arr.push("pramanik")
arr.push("contai")
arr.push("delhi")

var res=arr.mymap(function(value){
    console.log(value)
    return value*value
})
console.log(res);





