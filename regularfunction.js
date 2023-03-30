function myfunction(){

console.log(this);

}//simple invocation

myfunction();  //logs global object window


const myObject = {

    method(){


        console.log(this);



    }
}
// method innovacation


myObject.method();

