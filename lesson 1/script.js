const bookPriсe = 15.678;
const mobilePriсe = 123.965;
const cupPriсe = 90.2345;

const maxPrice = Math.max(bookPriсe, mobilePriсe, cupPriсe);
const minPrice = Math.min(bookPriсe, mobilePriсe, cupPriсe);

const generalPrice = bookPriсe + mobilePriсe + cupPriсe;

const flooredPrice = Math.floor(bookPriсe) + Math.floor(mobilePriсe) + Math.floor(cupPriсe);

const roundedPrice = Math.floor(generalPrice / 100) * 100;

const evenOddPrice = flooredPrice % 2 === 0;

const price = 500;
const remainedPrice = price - generalPrice;

const averagePrice = +(generalPrice / 3).toFixed(2);

const randomGenerator = Math.floor(Math.random() * 100);

const discountGenerator = (generalPrice * randomGenerator) / 100;
const discountPrice = +(generalPrice - discountGenerator).toFixed(2)

const profit = +(generalPrice / 2 - discountGenerator).toFixed(2) ;

document.writeln(`<b><i>Максимальна ціна: ${maxPrice}<br>
Мінімальна ціна: ${minPrice}<br>
Вартість всіх товарів: ${generalPrice}<br>
Округлення в меншу сторону: ${flooredPrice}<br>
Округлення до сотих: ${roundedPrice}<br>
Булеве значення: ${evenOddPrice === 0}<br>
Сумма решти при 500: ${price - generalPrice }<br>
Середнє значення цін: ${averagePrice}<br>
Випадкова знижка: ${randomGenerator}<br>
До оплати з знижкою: ${+(generalPrice - discountGenerator).toFixed(2)} <br>
Чистий прибуток: ${profit}
`);