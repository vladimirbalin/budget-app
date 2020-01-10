'use strict';

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
};

function chooseExpenses() {
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
}

chooseExpenses();

console.log(appData.expenses);

function detectDayBudget() {
    appData.moneyPerDay = +((appData.budget / 30).toFixed(1)); 

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 300) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 300 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошло непредвиденное");
    }
}

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = + prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц депозита: " + appData.monthIncome);
    }
}

checkSavings();
 
function chooseOptExpenses() {
    let num = 1;
    for ( let counter = 1; counter <= 3; counter++) {
        appData.optionalExpenses[num] = prompt("Статья необязательных расходов?");
        num ++;
    }
}
