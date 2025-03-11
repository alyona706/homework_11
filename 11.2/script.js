document.querySelector('button').addEventListener('click', (event) => {
    let contentEven = document.querySelectorAll('.contentList > li:nth-child(2n)');
    let contentOdd = document.querySelectorAll('.contentList > li:nth-child(2n + 1)');

    event.target.classList.toggle('green');

    contentEven.forEach((item) => {
        item.classList.toggle('styled');
    });
    contentOdd.forEach((item) => {
        item.classList.toggle('styled');
    });
});