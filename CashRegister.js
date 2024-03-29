let denominations = [
	{ name: 'ONE HUNDRED', value: 100},
	{ name: 'TWENTY', value: 20},
	{ name: 'TEN', value: 10},
	{ name: 'FIVE', value: 5},
	{ name: 'ONE', value: 1},
	{ name: 'QUARTER', value: 0.25},
	{ name: 'DIME', value: 0.1},
	{ name: 'NICKEL', value: 0.05},
	{ name: 'PENNY', value: 0.01}
];

function checkCashRegister(price, cash, cid) {
 let output = {status: null, change: []};
 let change = cash - price;
 let register = cid.reduce(function(acc, curr) {
  acc.total += curr[1];
  acc[curr[0]] = curr[1];
  return acc;
 }, {total: 0});
 if(register.total === change) {
  output.status = 'CLOSED';
  output.change = cid;
  return output;
 }
 if(register.total < change) {
  output.status = 'INSUFFICIENT_FUNDS';
  return output;
 }
let changeArr = denominations.reduce(function(acc, curr) {
  let value2 = 0;
  while(register[curr.name] > 0 && change >= curr.value) {
    change -= curr.value;
    register[curr.name] -= curr.value;
    value2 += curr.value;
    change = Math.round(change * 100) / 100;
  }
  if(value2 > 0) {
    acc.push([ curr.name, value2 ]);
  }
  return acc;
  }, []);

 if(changeArr.length < 1 || change > 0) {
  output.status = 'INSUFFICIENT_FUNDS';
  return output;
 }
 output.status = 'OPEN';
 output.change = changeArr;
 return output;
};

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));