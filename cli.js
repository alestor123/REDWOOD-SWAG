#!/usr/bin/env node

const prompt = require('prompt-sync')()
const chalk = require('chalk')
const fim = {}
const questions = [{ question: 'Your Name', key: 'name' }, { question: 'Your Email', key: 'email', regex: /^[^\s@]+@[^\s@]+$/ }, { question: 'Your Github Username', key: 'username' }, { question: 'Address Line 1', key: 'address1' }, { question: 'Address Line 2', key: 'address2' }, { question: 'City', key: 'city' }, { question: 'State', key: 'state' }, { question: 'Postal Code', key: 'postal_code' }, { question: 'Country', key: 'country' }, { question: 'Comments', key: 'comment' }]
questions.forEach(qs => {
  const outs = ask(qs)
  if (outs.length > 0) fim[qs.key.toLowerCase().replace(' ', '')] = outs
})
try {
  require('axios').get('https://redwoodjs.com/stickers-thanks?' + new URLSearchParams(fim).toString())
  console.log(chalk.greenBright.bold('Sucess !!'))
} catch (e) {
  console.error(e)
  console.log(chalk.redBright.bold('Oops we got a problem !!'))
}

function ask (qs) {
  const dt = prompt(chalk.greenBright.bold(qs.question + ' : '))
  if (qs.regex) {
    if (qs.regex.test(dt)) return dt
    // stupid method never reccommend
    else {
      console.error(chalk.redBright.bold('Please enter valid : ' + qs.key))
      process.exit(0)
    }
  }
  return dt
}
