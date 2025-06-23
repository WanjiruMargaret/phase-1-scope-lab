// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

const leastFavoriteCustomer = 'someone';
function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // should throw an error
}