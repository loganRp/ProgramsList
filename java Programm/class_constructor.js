class person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    dance(name,age){
        console.log(`${name} has complete age ${age}`);
    }
}

class son extends person{
    constructor(name,age,sonName){
        super(name,age);
        this.sonName = sonName;
        this.dance()
    }

    dance(){
        console.log(`${this.sonName}'s Father name is ${this.name} And age ${this.age}`);
    }
}

const p =  new person("ram","400");
// p.dance()


