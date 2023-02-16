// push
// pop function
function myarr(){
    this.length=0
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

var arr= new myarr()
arr.push("sudipta")
arr.push("pramanik")
arr.push("contai")
arr.push("delhi")
arr.pop()
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
