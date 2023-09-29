function hello(){
    console.log("Hello World");
}
hello();

//example arrow function
const Bye = ()=>{
    console.log("Bye");
}

//part 2 a & b
const Value = (myValue, name)=>{
    myValue = 2;
    name = "Data Representation & Qeurying week: ";
    console.log(name + myValue);
};
Value();

//part 2 c
const sum = (num1, num2, num3)=>{
    num1 = 2, num2 = 2, num3 = 7;
    console.log(num1 + num2 + num3);
}
sum();

//part D
const ages = [25, 31, 42, 77];

let age = ages.map((element)=>{
        if(element < 70 ){
            return element * 2;
        }
        else{
            return element;
        }
    }
);
console.log(age);



