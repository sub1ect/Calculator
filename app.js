const output = document.querySelector('.output');
const nums = document.querySelectorAll('.num');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const equals = document.querySelector('.equals');

// print nums operations
nums.forEach((num) => {
  num.addEventListener('click', (e) => {
    output.innerText += e.target.innerText;
    output.style.backgroundColor = 'white';
  });
});

// clear output
clear.addEventListener('click', () => {
  output.innerText = '';
  output.style.backgroundColor = 'white';
});

// delete last output sign
del.addEventListener('click', () => {
  let opt = output.innerText;
  opt = opt.replace(opt[opt.length - 1], '');
  output.innerText = opt;
  output.style.backgroundColor = 'white';
});

// count output
equals.addEventListener('click', () => {
  let opt = [...output.innerText];
  const exceptions = ['*', '.', '-', '+', '/'];

  let newOpt = opt.map((el) => {
    if (exceptions.includes(el)) {
      return el;
    } else {
      return parseInt(el);
    }
  });

  try {
    output.innerText = eval(newOpt.join(''));
  } catch {
    output.style.backgroundColor = 'lightcoral';
  }
});
