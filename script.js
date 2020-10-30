fighters = [
    {
        id: 0,
        name: 'Smart and ripped monkey',
        speciality: 'rip your face off',
        addFighter: function() {
            //Write a function that adds your fighter to your list = the empty list
            //this.push? 
            //both in innerHTML and the empty list here
            //<li>Smart and ripped monkey</li>
            let pushList = yourFighters.push(this);
            let getList = document.getElementById('my-team');
            let li = document.createElement('li');
            li.appendChild(document.createTextNode('Smart and ripped monkey'));
            let addLi = getList.appendChild(li);
            return (pushList, addLi);

            
        }
    },
    {
        id: 1,
        name: 'Zombie snake',
        speciality: 'bite',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let pushList = yourFighters.push(this);
            let getList = document.getElementById('my-team');
            let li = document.createElement('li');
            li.appendChild(document.createTextNode('Zombie snake'));
            let addLi = getList.appendChild(li);
            return (pushList, addLi);
        }
    },
    {
        id: 2,
        name: 'Sociopathic ghost',
        speciality: 'manipulate',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let pushList = yourFighters.push(this);
            let getList = document.getElementById('my-team');
            let li = document.createElement('li');
            li.appendChild(document.createTextNode('Sociopathic ghost'));
            let addLi = getList.appendChild(li);
            return (pushList, addLi);
        }
    },
    {
        id: 3,
        name: 'A fast Frankenstein',
        speciality: 'like regular Frankenstein, but fast',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let pushList = yourFighters.push(this);
            let getList = document.getElementById('my-team');
            let li = document.createElement('li');
            li.appendChild(document.createTextNode('A fast Frankenstein'));
            let addLi = getList.appendChild(li);
            return (pushList, addLi);
        }
    },
    {
        id: 4,
        name: 'Count Dracula',
        speciality: 'sleep, spook, drink blood, repeat',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let pushList = yourFighters.push(this);
            let getList = document.getElementById('my-team');
            let li = document.createElement('li');
            li.appendChild(document.createTextNode('Count Dracula'));
            let addLi = getList.appendChild(li);
            return (pushList, addLi);
        }
    },
    {
        id: 5,
        name: 'Your crazy nazi aunt',
        speciality: 'make people uncomfortable',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let pushList = yourFighters.push(this);
            let getList = document.getElementById('my-team');
            let li = document.createElement('li');
            li.appendChild(document.createTextNode('Your crazy nazi aunt'));
            let addLi = getList.appendChild(li);
            return (pushList, addLi);
        }
    },
    {
        id: 6,
        name: 'A kid high on candy',
        speciality: 'give headaches',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let pushList = yourFighters.push(this);
            let getList = document.getElementById('my-team');
            let li = document.createElement('li');
            li.appendChild(document.createTextNode('A kid high on candy'));
            let addLi = getList.appendChild(li);
            return (pushList, addLi);
        }
    },
    {
        id: 7,
        name: 'That girl from Grudge',
        speciality: 'spook',
        addFighter: function() {
            //Write a function that adds your fighter to your list 
            //both in innerHTML and the empty list here
            let pushList = yourFighters.push(this);
            let getList = document.getElementById('my-team');
            let li = document.createElement('li');
            li.appendChild(document.createTextNode('That girl from Grudge'));
            let addLi = getList.appendChild(li);
            return (pushList, addLi);
        }
    },
]
let yourFighters = [];

console.log(yourFighters);

//Del 1 - KLAR 
//Lägg till eventlyssnare på fighter-knapparna
//Kalla på dess fighters objekt-metod 

//Eventlisteners going into functions 
//knapp 0
document.getElementById('spook0').addEventListener('click', () => {
    fighters[0].addFighter();
    var btn = document.getElementById('spook0');
    btn.parentNode.removeChild(btn);
    return false;
});
//console.log(fighters[0].addFighter());

//knapp 1
document.getElementById('spook1').addEventListener('click', () => {
    fighters[1].addFighter();
    var btn = document.getElementById('spook1');
    btn.parentNode.removeChild(btn);
    return false;
});


//knapp 2
document.getElementById('spook2').addEventListener('click', () => {
    fighters[2].addFighter();
    var btn = document.getElementById('spook2');
    btn.parentNode.removeChild(btn);
    return false;
});


//knapp 3
document.getElementById('spook3').addEventListener('click', () => {
    fighters[3].addFighter();
    var btn = document.getElementById('spook3');
    btn.parentNode.removeChild(btn);
    return false;
});


//knapp 4
document.getElementById('spook4').addEventListener('click', () => {
    fighters[4].addFighter();
    var btn = document.getElementById('spook4');
    btn.parentNode.removeChild(btn);
    return false;
});


//knapp 5
document.getElementById('spook5').addEventListener('click', () => {
    fighters[5].addFighter();
    var btn = document.getElementById('spook5');
    btn.parentNode.removeChild(btn);
    return false;
});


//knapp 6
document.getElementById('spook6').addEventListener('click', () => {
    fighters[6].addFighter();
    var btn = document.getElementById('spook6');
    btn.parentNode.removeChild(btn);
    return false;
});


//knapp 7
document.getElementById('spook7').addEventListener('click', () => {
    fighters[7].addFighter();
    var btn = document.getElementById('spook7');
    btn.parentNode.removeChild(btn);
    return false;
});





//kallar på specifikt objekt i en array
//console.log(fighters[7].addFighter());

//kallar på hela objektet
//console.log(fighters[7].name);







//Del 2 - KLAR 
//Skriv objekt-metoderna

//Lägg in vald fighter i listan 'yourFighters'
//Lägg in namnet i en <li> i HTML-en under 'Your Fighters'


//Create LI
// const newTodo = document.createElement('li');
// newTodo.innerText = todoInput.value;
// newTodo.classList.add('todo-item');
// todoDiv.appendChild(newTodo);


//Some next level shit - KLAR 
//När du klickat på ett val ur den vänstra listan, 
//så ska det objektet försvinna ur den listan och från HTML'en
