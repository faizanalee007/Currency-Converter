#! /usr/bin/env node
import inquirer from 'inquirer';
const currencies = {
    USD: 1,
    GBP: 0.76,
    EUR: 0.91,
    INR: 74.57,
    PKR: 280,
};
let currencyChoice = ['USD', 'GBP', 'EUR', 'INR', 'PKR',];
console.log(`\n*** WELCOME TO CURRENCY CONVERTER ***\n`);
let userAnswer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Select from Currencies!',
        type: 'list',
        choices: currencyChoice
    },
    {
        name: 'to',
        message: 'select To Currencies!',
        type: 'list',
        choices: currencyChoice
    },
    {
        name: 'amount',
        message: 'Enter the Amount',
        type: 'number',
    }
]);
let amountFrom = currencies[userAnswer.from];
let amountTo = currencies[userAnswer.to];
let amount = userAnswer.amount;
let baseamount = amount / amountFrom;
let convertedAmount = baseamount * amountTo;
console.log(`\n The conversion Amount from ${userAnswer.amount} ${userAnswer.from} into ${userAnswer.to} is:    ${convertedAmount}/-`);
// console.log(amountFrom)
// console.log(amountTo)
