const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalID;
  
  // console.log(randomColor())
  
  const startChangingColor = () => {
    const changeBG = () => {
      document.body.style.backgroundColor = randomColor();
    };
    if (!intervalID) {
      intervalID = setInterval(changeBG, 1000);
    }
  };
  
  const stopChangingColor = () => {
    clearInterval(intervalID);
    intervalID = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  