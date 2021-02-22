let deleteGoogle = document.querySelector('.adv');
deleteGoogle.classList.remove('adv');
let books = document.querySelectorAll('.book');
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
books[0].insertAdjacentElement('beforebegin', books[1] );
books[3].insertAdjacentElement('beforebegin', books[4] );
books[5].insertAdjacentElement('afterend', books[2] );

let bookThree = document.getElementsByTagName('a')[2];
bookThree.textContent = 'Книга 3. this и Прототипы Объектов';

let bookTwo = books[0].querySelectorAll('li');
bookTwo[4].insertAdjacentElement('beforebegin', bookTwo[8] );
bookTwo[8].insertAdjacentElement('beforebegin', bookTwo[6] );
bookTwo[9].insertAdjacentElement('afterend', bookTwo[2] );

let bookFive = books[5].querySelectorAll('li');
bookFive[2].insertAdjacentElement('beforebegin', bookFive[4] );
bookFive[4].insertAdjacentElement('beforebegin', bookFive[3] );
bookFive[3].insertAdjacentElement('beforebegin', bookFive[9] );
bookFive[8].insertAdjacentElement('beforebegin', bookFive[5] );

let bookSix = books[2].querySelectorAll('li');
bookSix[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');







