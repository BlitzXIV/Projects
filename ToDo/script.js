const inpt = document.getElementById('item')
const btn = document.getElementById('button')
const todo = document.getElementById('todolist')
let counter = 0

    form.addEventListener('submit',function(event){
        event.preventDefault()
//Check for valid input
        if (inpt.checkValidity()){
            if(counter != 20){
//Button Creation
            const todoMsg = document.createElement('p')
            const delBtn = document.createElement('button')
            const editBtn = document.createElement('button')
            todoMsg.textContent = inpt.value;
            delBtn.textContent = 'Delete'
            editBtn.textContent = 'Edit'
//Delete Button
            delBtn.addEventListener('click', function(){
                todo.removeChild(todoMsg)
                counter -= 1
            })
//Edit Button 
            editBtn.addEventListener('click', function(){
                const editContain = document.createElement('form')
                const editBox = document.createElement('input')
                editBox.type = 'text'
                editBox.value = todoMsg.firstChild.textContent
                editContain.appendChild(editBox)
                todo.replaceChild(editContain, todoMsg)
                
 //Save Button
                const saveBtn = document.createElement('button')
                saveBtn.textContent = 'Save'
                editContain.appendChild(saveBtn)
                saveBtn.addEventListener('click', function(event){ 
                    event.preventDefault()
                    if (editBox.value == ''){
                        alert('Invalid Entry')}
                        else{
                        todoMsg.textContent = editBox.value

                        todo.replaceChild(todoMsg, editContain)
                        todoMsg.appendChild(delBtn)
                        todoMsg.appendChild(editBtn)
                        }
                })
//Re-Append Buttons               
            })
            todoMsg.appendChild(delBtn)
            todoMsg.appendChild(editBtn)
            todo.appendChild(todoMsg)
            counter += 1; 
            inpt.value = ''
            } else{alert("You have reached the maximum number of to-do items.")}
    }
            
    })



