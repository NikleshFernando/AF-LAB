class Car{
    constructor(type){
        this.type = type;
    }
    displayType(){
        return this.type;
    }

}
class Model extends Car{
    constructor(type,name){
        super(type);
        this.name = name;
    }
    displayModel(){
         return this.displayType()+` ` + this.name
}
}
let car1 = new Model('Ford','Mustang');
document.write(car1.displayModel());