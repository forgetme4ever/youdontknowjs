const book = document.querySelectorAll('.book');
const book3 = book[4];
const h2Book3 = book3.querySelector('h2').querySelector('a');
const adv = document.querySelector('.adv');
const topics2 = book[0].querySelectorAll('li');
const topics5 = book[5].querySelectorAll('li');
const topics6 = book[2].querySelectorAll('li');
const topicForBook6 = 'Глава 8: За пределами ES6';
const innerText = h2Book3.textContent;

document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";
book[0].before(book[1]);
book[2].before(book[4]);
book[5].after(book[2]);

adv.remove();
//Book 2 topics
topics2[9].before(topics2[7]);
topics2[10].before(topics2[2]);
topics2[8].after(topics2[5]);
topics2[5].before(topics2[4]);
//Book 5 topics
topics5[1].after(topics5[9]);
topics5[9].after(topics5[3]);
topics5[8].before(topics5[5]);
topics5[3].after(topics5[4]);

h2Book3.innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов'

topics6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');
