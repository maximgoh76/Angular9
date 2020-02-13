
let id1:number|string ="091";
console.log(id1);
class Dog{
    private _age:number;
    public set age  (age:number){
        this._age = age;
    }
    public get age  (){
        return this._age;
    }
}

let d:Dog = new Dog();
d.age =1;