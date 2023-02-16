let Vehicle={
    make:'Hyundi',
    color:'red',
    year:2021,
    model:'Elantra'
}
let c1= Object.create(Vehicle);
c1.airbag=2;
let c2= Object.create(Vehicle);
c2.airbag=4;
let c3= Object.create(Vehicle);
c3.airbag=6;
console.log('car1:',c1, 'car2:',c2, 'car3:',c3)

//......................


function Hyundicar(m1,c,y,m2){
    this.make = m1;
    this.color = c;
    this.year = y;
  
}
Hyundicar.prototype.model = 'Elantra';

Hyundicar.prototype.airbag = function(n){
    this.airbag = n;
}

let car1 = new Hyundicar('Hyundai','red',2021);
console.log('car1:',car1,car1.airbag(2));
let car2 = new Hyundicar('Hyundai','red',2021);
console.log('car2:',car2, car2.airbag(4));
let car3 = new Hyundicar('Hyundai','red',2021);
console.log('car2:',car3, car3.airbag(6));