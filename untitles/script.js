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
            const editBtn = document.createElement('button');
            todoMsg.textContent = inpt.value; 
            delBtn.textContent = 'Delete'
            editBtn.textContent = 'Edit'
                
            delBtn.addEventListener('click', function(){
                todo.removeChild(todoMsg);
                counter -= 1;
            });

            editBtn.addEventListener('click', function(){
                const editBox = document.createElement('input');
                editBox.type = 'text';
                editBox.value = todoMsg.firstChild.textContent;
                
                const saveBtn = document.createElement('button');
                saveBtn.textContent = 'Save';
                saveBtn.addEventListener('click', function(){ 
                    todoMsg.textContent = editBox.value;
                    
                })
                
            })
            todoMsg.appendChild(delBtn);
            todoMsg.appendChild(editBtn);
            todo.appendChild(todoMsg);
            counter += 1; 
            inpt.value = '';
            } else{alert("You have reached the maximum number of to-do items.");}
    }
            
    });



