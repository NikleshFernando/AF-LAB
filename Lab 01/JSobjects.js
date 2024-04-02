const Animal = {
    type:"Inverterbrates",
    legs:4,
    displayDetails(){
        console.log(this.legs);
        console.log(this.type);
        return `This is a ${this.type} and has ${this.legs} legs`;
    }
};

const animal1 = Object.create(Animal);
animal1.displayDetails();

const animal2 = Object.create(Animal);
animal2.legs=0;
animal2.type=`fish`;
animal2.displayDetails();
document.write(`${animal2.displayDetails()}`);


