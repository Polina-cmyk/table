var table = document.createElement('table');
for (let i = 1; i < 10; i++){
    var tr  = document.createElement('tr');   
    for(let j = 1; j < 10; j++){
        var td = document.createElement('td');

        td.style = 'border: 1px solid black; padding: 10px;'
        td.innerText = `${i * j}`;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);


var rows = [...document.querySelectorAll('td')];
var tabl = [...document.querySelectorAll('tr')];

for(let tds of rows){
    tds.onmouseover = function(event){
        this.style.backgroundColor = 'red';
        console.log(this, event);
    }

    tds.onmouseout = function(event){
        this.style.backgroundColor = '';
        console.log(this, event);
    }
}

for(let row of tabl){
    row.onmouseover = function(event){
        this.style.backgroundColor = 'pink';
        console.log(this, event);
    }

    row.onmouseout = function(event){
        this.style.backgroundColor = '';
        console.log(this, event);
    }
}

