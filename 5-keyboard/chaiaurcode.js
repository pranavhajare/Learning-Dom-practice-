console.log('Project 5');
console.log('Project 5');

const insert = document.getElementById('insert');
// console.log(insert);

window.addEventListener('keydown', (e) => {
  e.preventDefault();
  insert.innerHTML = `
  <div class ="color">
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
  `;
});
