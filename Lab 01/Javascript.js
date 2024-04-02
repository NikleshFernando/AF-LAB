function Vehicle(name){
    this.INSTANCES++;
    this.name = name;

}
Vehicle.prototype.getName = function (){
        console.log(this.name);
}
Vehicle.INSTANCES = 0;
function Car(Type,name){
    this.Type = Type; 
    Vehicle.call(this,name);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getModel = function(){
    return this.Type;
}
Car.prototype.getName = function(){
    return this.name;
}
const car1 = new Car(`Toyota`,`Sedan`);
const car2 = new Car(`Honda`,`Sedan`);
console.log(car1.getModel());
console.log(car1);
console.log(Vehicle.INSTANCES);