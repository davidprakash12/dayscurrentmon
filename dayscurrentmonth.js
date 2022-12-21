var today = new Date(); // 2017-11-04

var currentMonth = today.getMonth();

switch(currentMonth) {
  case 1: checkLeap(); break;
  case 0:
  case 2:
  case 4:
  case 6:
  case 7:
  case 9:
  case 11: console.log('31 Days');
           break;
  case 3:
  case 5:
  case 8:
  case 10: console.log('30 Days');
          break;
}

function checkLeap() {
  if((today.getYear())%4 === 0 )
    console.log('29 Days');
  else
    console.log('28 Days');
}
