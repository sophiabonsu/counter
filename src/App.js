import React,{Component} from 'react';

 class Counter extends Component{
   constructor (){
     super();
     this.state ={
       counter:0,
     }
    }
   render(){
     
     console.log("This line 13 representing state", this.counter);
     return(
       <div className="container">
         <div className ="navbar">Counter.js</div>
         <div className='counter'>
           <h1>Something here?</h1>
           <button type ="button"Increment></button>
           <button type ="button"Decrement></button>
         </div>
       </div>
     )

   }
 }