document.addEventListener('DOMContentLoaded', function(){
    
    let finCalContain = document.getElementById('finCalContain');
    const calcBtn = document.getElementById('button');
    let finLabel = document.createElement('p')

        form.addEventListener('submit', function(event){
            event.preventDefault();
    
        
            let cals = parseFloat(document.getElementById('calPerServ').value);
            let serv = parseFloat(document.getElementById('servAmt').value);
            let measure = parseFloat(document.getElementById('cstmServ').value);

           
        
            var calsPerGram = cals / serv;
            var finalCals = calsPerGram * measure;
            finalCals = finalCals.toFixed(1)

            
               
            inLabel.textContent = 'Total Calories in Food ' + finalCals 
            finCalContain.appendChild(finLabel);
           
        
    });

});
