const inpt = document.getElementById('item');
const btn = document.getElementById('button');
const todo = document.getElementById('todolist'); 
let counter = 0;

    form.addEventListener('submit',function(event){
        event.preventDefault();
        
        if (inpt.checkValidity()){
            if(counter != 20){
            const todoMsg = document.createElement('p');
            const delBtn = document.createElement('button');
            todoMsg.textContent = inpt.value; 
            delBtn.textContent = 'Delete'
                
            delBtn.addEventListener('click', function(){
                todo.removeChild(todoMsg);
                counter -= 1;
            });

            todoMsg.appendChild(delBtn);
            todo.appendChild(todoMsg);
            counter += 1; 
            inpt.value = '';
            } else{alert("You have reached the maximum number of to-do items.");}
    }
            
    });


// create delete button, link to list item, delete item 
