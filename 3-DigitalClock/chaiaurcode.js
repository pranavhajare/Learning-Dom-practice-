const clock = document.getElementById('clock');


setInterval(()=>{
  let date = new Date();
//  console.log(date.toLocaleTimeString());
const time = date.toLocaleTimeString();
clock.innerHTML = time;

},1000)