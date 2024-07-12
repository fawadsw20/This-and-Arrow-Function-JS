const user = {

    username: "Fawad",
    price: 999,


    welcomeMassage: function(){

       // console.log(`${this.username}`, ` welcome to our website`);

       // console.log(this);

    }

}


 user.welcomeMassage();

// user.username= "Kashif"

 user.welcomeMassage();

// console.log(this);

 function chai() {

//     let username = "Fawad";
//     console.log(this.username);
} 

 chai();


const Chai = () =>{


    let username = "Fawad";
 //   console.log(this.username);

}

Chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

//const addTwo = (num1, num2) => (num1+num2);


// if we declare the object in arrow function like that way it will return undefined
//const addTwo = (num1, num2) => {username: "fawad"}

//if we declare the object like that it will return the value of the using parenthesis in arrow function 

const addTwo = (num1, num2) => ({username: "fawad"});

console.log(addTwo(3,5));

