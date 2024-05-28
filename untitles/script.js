function listItem(){
    document.getElementById('form').addEventListener('submit')

   let get = document.getElementById('name').value;
   
   const itemDetails = document.createElement('p')
   itemDetails.textContent = ${name}
   document.getElementsByClassName('todolist').appendChild(itemDetails);
   
   
}
