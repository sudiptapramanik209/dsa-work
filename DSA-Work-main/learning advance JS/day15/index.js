
let arr=[];
class user{
    #password;
    constructor(){
        this.organization='masai';
    }
    #Vusername(username){
        let value=username.includes('@') ? false : true
        return value;
    }
    #Vpassword(password){
        let value=password.includes('123') ? false : true
        return value;
    }
    login(username,password){
        if(username==this.username&&password==this.password){
            console.log("loginsuccessfull")
        }else{
            console.log("authentation faild")

        }
    }

    

    signup(username,password){
        let isValid=false;
        isValid=this.#Vusername(username)&&this.#Vpassword(password)
        if(isValid){
            this.username=username
            this.password=password
        console.log("user register succesfully")
        arr.push(this);
        }else{
            console.log("please enter valid information")
        }
        
    }
}
//let u1=new user()
// console.log("u1:",u1)
// u1.signup('sudipta','sudipta')
//u1.signup('supriya','suppass')
// console.log(arr)
//u1.login("supriya","suppass")
class student extends user{
    constructor(){
        super()
        this.numberofassignment=0;
    }
    submitassignment(){
        this.numberofassignment++;
        console.log("Accepted")
    }
}
class admin extends user{
    constructor(){
        super();
    }
    removeUser(username){
       arr = arr.filter((element)=>{ 
            return element.username!=username;
        });
    }
}

// let s1=new student()
// s1.signup("sudipta","sudiptapass")
// s1.signup("papu","paopu")
// let s2=new student()
// s2.signup("sudipta","sudiptapass")
// s1.login("sudipta","sudiptapass")

// console.log(s1.numberofassignment);
// let admin1=new admin()
// admin1.signup("jony","jonypass")
// admin1.login("jony","jonypass")
// admin1.removeUser("sudipta")
// console.log(arr)
function signup(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let s1=new student()
    s1.signup(username,password);
    console.log(arr);
}

function signin(){
    let username=document.getElementById("email").value;
    let password=document.getElementById("pass").value;
    let s1=new student()
    s1.signin(username,password);
    console.log(arr);

}