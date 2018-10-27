// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}


function checkCashRegister(price, cash, cid) {
  // Here is your change, ma'am.

  let cashRegister = {
    status: "OPEN",
    change: [],
  }

  let cidTotal = 0;
  let changeRequired = cash-price;
  let moneyTakenOut = 0;
  const cashValue = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];

  for(let i = 0; i < cid.length; i++){
    cidTotal += cid[i][1];
  }
  cidTotal = Math.round(cidTotal*100)/100; // round to two decimals for cent values
  console.log(cidTotal)

  // handle closed cash register case
  if(cidTotal === changeRequired){
    cashRegister.status = "CLOSED";
    cashRegister.change = cid;
    return cashRegister;
  }

  for(let i = cid.length-1; i >= 0; i--){
      // reset the money taken out for each cash item (ie bill or coin)
      moneyTakenOut = 0; 
      // while changeRequired is greater than a cash value item that exists in the register
      while(changeRequired >= cashValue[i] && cid[i][1] !== 0){
          cid[i][1] -= cashValue[i]; // take out one bill or coin out of the register
          moneyTakenOut += cashValue[i];
          changeRequired = Math.round(changeRequired*100)/100 - cashValue[i]; // round to handle precision issus with cent values
      }
      // only push if money was actually taken out from the register
      if(moneyTakenOut !== 0){ 
        cid[i][1] = moneyTakenOut;
        cashRegister.change.push(cid[i])
        console.log("pushed: " + moneyTakenOut)
      }
  }
  // handle insufficient change in cash register case (changeRequired should be 0 at this point)
  if(changeRequired !== 0){
    cashRegister.status = 'INSUFFICIENT_FUNDS';
    cashRegister.change = [];
  }
  console.log(cashRegister.status)
  console.log(cashRegister.change);

  return cashRegister;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);