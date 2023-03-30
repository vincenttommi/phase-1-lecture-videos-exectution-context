//e arrow function doesn't define its own execution
//context but resolves to the one from the outer function.


const  myObject = {


    myMethod(items){


        console.log(this); // logs  myObject
        const  callback = () => {

              console.log(this);  // ogs my Object


        };

   items.forEach(callback);

    }
};


myObject.myMethod([1,2,3,4]);