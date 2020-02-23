const input = document.querySelector('#fruitName'),
      btn   = document.querySelector('#btn'),
      error = document.querySelector('#popUP'),
      fruitsBox = document.querySelector('.fruits-box');
btn.addEventListener('click', addFruits);
fruitsBox.addEventListener('click', revmoveFruit);
function addFruits(e){
  e.preventDefault();
  if(input.value === ''){
    error.classList.add('error');
    error.innerHTML = 'Please enter fruit name.';
    setTimeout(() => error.remove(), 2000);
  }else{
      const li = document.createElement('li'),
            close = document.createElement('span');
      li.classList.add('fruit');
      close.classList.add('close');
      li.appendChild(document.createTextNode(input.value.toUpperCase()));
      close.appendChild(document.createTextNode('X'));
      li.appendChild(close);
      fruitsBox.appendChild(li);
      input.value = '';
  }
}
// remove
function revmoveFruit(e){
  if(e.target.classList.contains('close')){
    if(confirm('Are you sure?')){
      const li = e.target.parentElement;
      fruitsBox.removeChild(li);
    }
  }
}
