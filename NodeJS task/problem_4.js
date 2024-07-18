//Problem-4: To-do List
let tasks=[];
/* Logic Implementation Function */
function addTask(task) {
 {
    tasks.push(task)
  }  /* Your Logic here*/
    
}


function displayTasks() {
    console.log("Today Activities List:");
    /* Write your logic here --- Start */
     tasks.forEach((element,index)=> {
        console.log(`${index+1}.${element}`);
     }); 

}
  

 
    /* Write your logic here --- End */

/* Logic Implementation Function */


/* Function Call */
/* Inputs */
addTask("Buy groceries");
addTask("Clean the house");
addTask("Finish today homework");
addTask("Study for Annual Exam");
addTask("Go to Sleep");
/* Inputs */

displayTasks();
/* Function Call */


/* Expected Output */
// Today Activities List:
// 1. Buy groceries
// 2. Clean the house
// 3. Finish today's homework
// 4. Study for Annual Exam
// 5. Go to Sleep
/* Expected Output */
