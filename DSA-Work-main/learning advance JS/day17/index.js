 class vehiclle{
    constructor(type,regNumber){
        this.type=this.type
        this.regNumber=this.regNumber
    }
 }
 class car extends vehiclle{
    constructor(type,regNumber){
        super(type,regNumber);
    }
 }
 class bike extends vehiclle{
    constructor(type,regNumber){
        super(type,regNumber);
    }
 }
 class truck extends vehiclle{
    constructor(type,regNumber){
        super(type,regNumber);
    }
 }
//  let c1=new bike("car","mh9");
//  console.log(c1);
class slot{
    #isBooked;
    constructor(number,type){
        this.number=number;
        this.type=type;
        this.#isBooked=false;
    }
    get _isBooked(){
        return this.#isBooked;
    }

    set _isBooked(boll){
        this.#isBooked=boll; 

    }
}
// let s1=new slot(1,"bike");
// //console.log(s1);
// s1._isBooked=true;
// console.log(s1)
class parkingFlore{
    constructor(floornumber,maxslot){
        this.floornumber=floornumber;
        this.parkingSport=[];

        for(let i=0;i<maxslot;i++){

            if(i===0){
                this.parkingSport.push(new slot(i,'truck'))
            }
            else if(i===1){
                this.parkingSport.push(new slot(i,'bike'))

            }
            else{
                this.parkingSport.push(new slot(i,'car'))

            }
        }
    }
    

}


class paekingLot{
    constructor(numberofffloor){
        this.numberofffloor=numberofffloor;
        this.floor=[];
        for(let i=0;i<numberofffloor;i++){
            this.floor.push(new parkingFlore(i,numberofffloor));
        }
    }

    findslot(type){

        for(let i=0;i<this.numberofffloor;i++){
            for(let slot of this.floor[i].parkingSport){
                if(slot.type===type && !slot._isBooked){
                    return {floornumber: i, found_slot: slot};
                }
            }
        }
    }

    parkvehicle(vehiclle){
        let slot=this.findslot(vehiclle.type);


        slot.found_slot._isBooked=true;
        console.log(slot)

    }

}
function park(){
    let name=document.getElementById("veicale").value
    let regnumber=document.getElementById("regnumber").value;
    let p1=new paekingLot(3)
    if(type==='car'){
        var c1=new car(name,regnumber);
    }
    p1.parkvehicle(c1)
}


// let pf=new paekingLot(3);
// let c1=new car('car','MH23');
// let c2=new car("car","Mn89")
// pf.parkvehicle(c1);
// pf.parkvehicle(c2);