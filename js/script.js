//rsn result
function rsnBtn(){
   return false;
}

// total result for calculator
function calbtnPrice(){
   let value1 = document.querySelectorAll('[name="inputValue"]')[0].value
   let value2 = document.querySelectorAll('[name="inputValue"]')[1].value
   let value3 = document.querySelectorAll('[name="inputValue"]')[2].value
   let value4 = document.querySelectorAll('[name="inputValue"]')[3].value
   let value5 = document.querySelectorAll('[name="inputValue"]')[4].value
    alert('Total Result: ' + (parseFloat(value1)+parseFloat(value2)+parseFloat(value3)+parseFloat(value4)+parseFloat(value5)))
   return false;
}

// background animated
for (let i = 0; i < 150; i++) {
   let divAnimate = document.createElement('div');
   divAnimate.className = 'divAnimatebg';
   document.body.appendChild(divAnimate);
}
let setTimeReady = setInterval(function(){

  
   let divAnimatebg = document.querySelectorAll('.divAnimatebg');
   for (let i = 0; i < divAnimatebg.length; i++) {
      let bgRandom = Math.floor(Math.random() * 10);
      divAnimatebg[i].setAttribute('style', 
      'background: white; transition: 1s; position: absolute; border-radius: 50%; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); \
      ' + 'width:' + bgRandom + 'px;' + 'height:' + bgRandom + 'px; \
      top : ' + Math.floor(Math.random() * 100) + '%;' + 'left:' + Math.floor(Math.random() * 100) + '%;' 
      )
   }
}, 1500)