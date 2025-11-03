//code written by  & Nadia Razi 
const num = 123//מספר כלשהוא

//בודקים אם התנאים שדרושים מתקיימים ואחרכך מדפיסים את התוצאה
const isDivisible2 = num%2===0;
const isDivisible3 = num % 3 === 0;
const isDivisible5 = num % 5 === 0;
const result =Number(isDivisible2) + Number(isDivisible3) + Number(isDivisible5);
console.log(result);