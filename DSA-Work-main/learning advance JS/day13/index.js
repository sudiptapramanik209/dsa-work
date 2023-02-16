// class user{
//     constructor(n){
//         this.organistatin='nasai';
//     }
//     validdatausername(username){

//             let value=username.includes('#') ? false:true;
//             return value;
//     }
//     validdatausername(password){

//         let value=password.includes('123') ? false:true;
//         return value;
// }
//     signup(username,password){
//         let validdata=false;
//     }
// }
// let ul=new user()
// console.log(ul);


class stack{
    constructor(){
        this.length=0;
        this.stack_contents=[];
    }

    add(...el){
        console.log("element",el);
        el.forEach((element) => {
            this.stack_contents.push(element);
            this.length++;
        });
        return this.stack_contents;
    }
    remove() {
        let removed_value = this.stack_contents.pop();
        this.length--;
    
        return removed_value;
      }
}
let stack1=new stack();
stack1.add(1,2,3,4,5,6,7,8,9)
stack1.remove()
stack1.remove()
console.log("stack:",stack1);

