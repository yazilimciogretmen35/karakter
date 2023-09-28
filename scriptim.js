




const textaream=document.querySelector('textarea');
const totalCounter=document.getElementById('TotalCounter');
const remainCounter=document.getElementById('RemainingCounter');


textaream.addEventListener('keyup',updateCount);


function updateCount(){
  totalCounter.textContent=textaream.value.length;
  remainCounter.textContent=textaream.getAttribute('maxlength')-textaream.value.length;
}

updateCount()