//example arrow function
const Bye = ()=>{
    console.log("Bye");
};

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
};
sum();

//part D
const ages = [25, 31, 42, 77];

//iterates over each elenent in array and if its is under 70 int * 2
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

//part 3 a & b

let myArray = [];

//add a task to the array
let addTask = (task)=>{
    myArray.push(task);
    console.log("Added "+task+" To the array!");//print the task added to the array
    return console.log("Length of Array: "+myArray.length);//print the length of the array
};
addTask("Blueberry");

//list all of the tasks currently in the array
let listAllTasks = (task)=>{
    myArray.forEach((element) => {
        console.log(": "+element);
    });
};
addTask("Strawberry");
listAllTasks();

//delete a task from the array
let deleteTask = (task)=>{
    let index = myArray.indexOf(task);//gets the index
    if (index > -1 ){//checks if the task is in the array
        myArray.splice(index, 1);
    console.log("Task: "+task + " removed from the array!");
    }
    else{
        console.log("Task: "+task+ "Not in array!");
    }
    
}
addTask("Banana");
listAllTasks();
deleteTask("Strawberry");
listAllTasks();
