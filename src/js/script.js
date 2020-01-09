'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let timeData = time;
let income = [];
let expenses = {};
let optionalExpenses = {};


let appData = { 
    money,
    timeData,
    expenses,
    optionalExpenses,
    income,
    saving: "",
};
let first = prompt("Введите обязательную статью расходов в этом месяце", "");
let second = prompt("Во сколько обойдется?", "");
expenses = { first : second }

alert(money/30);