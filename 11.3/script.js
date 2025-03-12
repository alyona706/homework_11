function showRandomImg() {
    let button = document.querySelector('button');

    button.addEventListener('click', () => {
        let randomNumber = Math.floor(Math.random() * 7) + 1;

        const imageWrap = document.querySelector('#imgWrapper');
        let oldImage = imageWrap.querySelector('img');

        if(!oldImage) {
            image = document.createElement('img');
            image.setAttribute('src', `images/${randomNumber}.jpg`);
            imageWrap.appendChild(image);
        } else {
            oldImage.setAttribute('src', `images/${randomNumber}.jpg`);
        }
    });
}

 showRandomImg();