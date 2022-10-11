// here: I have code in this manner so that a grid can be generated easily 16X16 on the webpage by using dynamically javascript

let rows = 16;
let cols = 16;
for(let i = 0 ; i < rows ; i++){
  const tempDiv = document.createElement('div');
  document.getElementById('container').appendChild(tempDiv);
  tempDiv.style.display = 'flex';
  tempDiv.style.flexWrap = 'wrap';
  for(let j = 0 ; j < cols ; j++){
    const div = document.createElement('div');
    tempDiv.appendChild(div);
    div.style.height = `${100/cols}vh`;
    div.style.flexGrow = '1';
    div.style.border = '1px solid black';
    div.classList.add('box');
  }
}

// here: I have applied eventListener methode and used the hover property to manipulate the event

const boxes = document.querySelectorAll('.box');

boxes.forEach(function(box){
  box.addEventListener('mouseover',function(e){
    box.classList.add('blackbg');
  })
})