'use strict' 

function haveDog(){

  let q1 = prompt('Do you have a dog? Y/N');

  let q2 = prompt('What\'s is your dog\'s name?');
  
  let q3 = prompt('what\'s your dog\'s breed?');
  
  let q4 = prompt('What is your name?');

    if(q1.toLowerCase() === 'y' || q1.toLowerCase() === 'yes'){
       document.write('Yay ' +  q4 + ' I bet ' + q2 + ' the ' + q3 + ' is a great dog!!!');
     }else if(q1.toLowerCase() === 'n' || q1.toLowerCase() === 'no'){
       alert('You should consider adopting one!');
     }
}    
haveDog()

function ageGame(){
  let ageValue = '';
  
   while(ageValue !== 10){
    let ageValue = prompt('I have a dog too, guess his age?');
  
   while(isNaN(ageValue)){
         age = prompt('Please enter a numerical value');
    }
  
     ageValue = parseInt(age);
   
   
  }if(ageValue > 10){
     prompt('Try again!')
   
    }else if(ageValue < 10){
      prompt('Try again!')
      

  }else if(ageValue === 10){
     alert('You Win!!!');
     }    
    
for(let i=1; i <= 10; i++){

}
  
}
ageGame()


function dogphotos(){
  let dog = '';
  let numberOfDogs = 0
    while(numberOfDogs !== 3){
      let answer = prompt('How many dogs survived the sinking of the titanic? 1-5');
       numberOfDogs = parseInt(answer);
     }for(let i=1;i <= 3; i++){
     dog = dog +'<li><img src="https://www.thisdogslife.co/wp-content/uploads/2019/02/puppies-2243686_1920-e1498529919258.jpg"></li>';
  }return (dog);
}
    
dogphotos()

