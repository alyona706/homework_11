function createElement(element, header, first, second) {
    let table = document.querySelector('#table');
    let p = document.createElement('p');

    if(header === 'headerFirst') {
        p.classList.add('cell', 'headerFirst');
    } else if(header === 'headerSecond') {
        p.classList.add('cell', 'headerSecond');
    } else {
        p.classList.add('cell');
        p.setAttribute('data-first', first);
        p.setAttribute('data-second', second);
    }

    if(element === 0) {
        p.textContent = '';
    } else {
        p.textContent = element;
    }

    table.appendChild(p);

}

function showCurrentValue(event) {
    let currentValue = event.target;
    let allCell = document.querySelectorAll('.cell');

    allCell.forEach(item => {
        if(item.classList.contains('green')) {
            item.classList.remove('green');
        }
    });

    if(!currentValue.classList.contains('headerFirst') && !currentValue.classList.contains('headerSecond')) {
        currentValue.classList.add('green');

        let firstVal = currentValue.attributes['data-first'].value;
        let secondVal = currentValue.attributes['data-second'].value;

        let headerFirstValue = document.querySelectorAll('.headerFirst');
        let headerSecondValue = document.querySelectorAll('.headerSecond');

        headerFirstValue.forEach(val => {
            if(val.textContent == firstVal) {
                val.classList.add('green');
            }
        });

        headerSecondValue.forEach(val => {
            if(val.textContent == secondVal) {
                val.classList.add('green');
            }
        })


    }
}

function createTable() {
    let table = document.querySelector('#table');

    for(let i = 0; i <= 10; i++) {
        createElement(i, 'headerSecond');
    }

    for(let i = 1; i <= 10; i++) {
        createElement(i, 'headerFirst');
        for(let j = 1; j <= 10; j++) {
            createElement(i * j, false, i, j);
        }
    }

    table.addEventListener('click', (event) => {
        showCurrentValue(event);
    });
}

createTable();