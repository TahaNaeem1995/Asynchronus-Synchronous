// console.log("first")
// for(let i = 1 ; i <=10; i++){
//     console.log("second")}
    // console.log("third")

    // Arrow function
    // let add =(add1:string)=>{
    //     console.log("taha");
    // }

    function greet(askName:()=> void){
        console.log("hello,greet");
        askName()
    }
    function askName(){
        console.log("enter your name");
    }

    //Asynchronous programing (code)
    console.log("first")

// built in Asynchronous function
setTimeout(()=>   {
    console.log("second");
}, 1000)

setTimeout(()=> {
    console.log("forth");
}, 0)

console.log("third");