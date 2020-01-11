'use strict';

let start = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('budget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    expensesItem = document.getElementsByClassName('expenses-item'),

    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");   
    }
}

start();

let appData = { 
    budget: money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
            
            if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null 
                && a != '' && b != '' && a.length < 50) {
        
                console.log("done");
                appData.expenses[a] = b;
            }
            else {
                i--;
            }    
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = +((appData.budget / 30).toFixed(1)); 
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 300) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошло непредвиденное");
        }
    },
    checkSavings: function() {
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = + prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц депозита: " + appData.monthIncome);
        }
    },
    // roba, sisa, poraaw, zaga
    chooseOptExpenses: function() {
       
        for ( let counter = 1; counter <= 3; counter++) {
            appData.optionalExpenses[counter] = prompt("Статья необязательных расходов?");
           
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесёт до доход? (Перечислите через запятую)", "");
        
        while (typeof(items) != "string" || items == "" || typeof(items) == null) { 
            items = prompt("Неверно введенно значение. Что принесёт до доход? (Перечислите через запятую)", "");
        }
        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то ещё?", ""));
        appData.income.sort();
       
        let result = "Способы доп. заработка: ";
        let ourExtraMoney = "";
        let move = appData.income.forEach(function(item, index){
            ourExtraMoney = ourExtraMoney + (index + 1) + " " + item;
            return ourExtraMoney;
        }); 
        alert(result + "\n" + move);
    },
};

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();

console.log(appData.expenses);


for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}