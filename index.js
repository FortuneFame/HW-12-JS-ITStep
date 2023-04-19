// --------------------------------- Task-1 ---------------------------------

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

const select = document.getElementById('select');
const sortBtn = document.getElementById('sortBtn');
const result1 = document.getElementById('result1');
const defaultList = document.getElementById('default');

let list = [
    {
        id: 1,
        name: 'Apple',
        price: '1.02$'
    },
    {
        id: 2,
        name: 'Pear',
        price: '1.52$'
    },
    {
        id: 3,
        name: 'Banana',
        price: '2.00$'
    },
    {
        id: 4,
        name: 'Mango',
        price: '5.06$'
    },
    {
        id: 5,
        name: 'Orange',
        price: '2.35$'
    },
    {
        id: 6,
        name: 'Lime',
        price: '3.90$'
    },
    {
        id: 7,
        name: 'Apricot',
        price: '4.10$'
    },
    {
        id: 8,
        name: 'Avocado',
        price: '5.90$'
    },
    {
        id: 9,
        name: 'Papaya',
        price: '7.00$'
    },
    {
        id: 10,
        name: 'Rastberry',
        price: '4.60$'
    },
    {
        id: 11,
        name: 'Lemon',
        price: '3.45$'
    }
];

list.sort(byField('id'));
list.forEach((list) => {
    defaultList.innerHTML += `<div class='product'><p> #${list.id}</p><h2>${list.name}</h2><p>${list.price}</p></div>`
});

sortBtn.addEventListener('click', () => {

    defaultList.classList.add('close');

    let result = '';
    let sortType = select.value;
    if (sortType === 'name') {
        list.sort(byField('name'));
        list.forEach((list) => {
            result += `<div class='product'><p> #${list.id}</p><h2>${list.name}</h2><p>${list.price}</p></div>`;
        })
    }
    else if ((sortType === 'price')) {
        list.sort(byField('price'));
        list.forEach((list) => {
            result += `<div class='product'><p> #${list.id}</p><h2>${list.name}</h2><p>${list.price}</p></div>`;
        })
    }
    else if ((sortType === 'id')){
        list.sort(byField('id'));
        list.forEach((list) => {
            result += `<div class='product'><p> #${list.id}</p><h2>${list.name}</h2><p>${list.price}</p></div>`;
        })
    };
    result1.innerHTML = result;
});


// --------------------------------- Task-2 ---------------------------------

let student = {
    name: 'Ivan',
    surname: 'Petrov',
    age: 19,
    subjects: ["English", "History", "Marketing"],
    course: 3
}

let res = ''

let { name, surname, age, subjects, course } = student;

res += `\
<div class='temp'>
<h3><<Создали студента>></h3>
<h4>Имя: ${name}</h4>\
<h4>Фамилия: ${surname}</h4>\
<h4>Лет: ${age}</h4>\
<h4>Предметы: ${subjects.join(', ')}</h4>\
<h4>Курсов: ${course}</h4>
</div>`;


let { name: n, surname: s, subjects: sb } = student;

res += `\
<div class='temp'>
<h3><<Создали студента без возраста и курсов>></h3>
<h4>Имя: ${name}</h4>\
<h4>Фамилия: ${surname}</h4>\
<h4>Предметы: ${subjects.join(', ')}</h4>
</div>`;

let { name: nn = 'неизвестно', surname: sn = 'неизвестно', age: a = 'неизвестно' } = student;

res += `\
<div class='temp'>
<h3><<Создали студента с именем, фамилией, возрастом по умолчанию>></h3>
<h4>Имя: ${nn = 'Неизвестно'}</h4>\
<h4>Фамилия: ${sn = 'Неизвестно'}</h4>\
<h4>Лет: ${a = 'Неизвестно'}</h4>\
<h4>Предметы: ${subjects.join(', ')}</h4>\
<h4>Курсов: ${course}</h4>
</div>`;

document.getElementById('result2').innerHTML = res;

// --------------------------------- Task-3 ---------------------------------

const multiArray = (array, number) => {
    return array.map((value) => value * number)
};

let r = ''
let userArray = [1, 2, 3, 4, 5];
let userNumber = 4;

r += `<h2 class='res'>Если эти числа ${userArray.join(', ')} перемножить на ${userNumber}</h2>`
r +=`<h1>Результатом будет: ${multiArray(userArray, userNumber).join(', ')}</h1>`;

document.getElementById('result3').innerHTML = r
