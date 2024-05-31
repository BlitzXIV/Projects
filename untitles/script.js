const inpt = document.getElementById('item');
const btn = document.getElementById('button');
const todo = document.getElementById('todolist'); 
let counter = 0;

    form.addEventListener('submit',function(event){
        event.preventDefault();
        
        if(counter != 10){
        const todoMsg = document.createElement('p');
        todoMsg.textContent = inpt.value; 
        todo.appendChild(todoMsg);
        counter += 1; 
        } else{alert("You have reached the maximum number of to-do items.");}
         else{inpt.reportValidity};
    });



