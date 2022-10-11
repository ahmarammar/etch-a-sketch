// here: I have code in this manner so that a grid can be generated easily 5X5 on the webpage by using dynamically javascript

let rows = 5;
let cols = 5;
for(let i = 0 ; i < rows ; i++){
  const tempDiv = document.createElement('div');
  document.getElementById('container').appendChild(tempDiv);
  for(let j = 0 ; j < cols ; j++){
    const div = document.createElement('div');
    tempDiv.appendChild(div);
    div.style.width = `${100/rows}%`;
    div.style.height = `${100/cols}vh`;
    div.style.border = '1px solid black';
  }
  tempDiv.style.display = 'flex';
  tempDiv.style.flexWrap = 'wrap';
}

