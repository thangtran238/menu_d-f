// hien thi tong so tien khi chon nuoc
function totald() {
  var drink_id = parseInt(frm.drink.value);
  switch (drink_id) {
    case 0:
      var drink_price = 15000;
      break;
    case 1:
      var drink_price = 17000;
      break;  
    case 2:
      var drink_price = 17000;
      
      break;
    case 3:
      var drink_price = 17000;
      
      break;
    case 4:
      var drink_price = 17000;
      break;
    case 5:
      var drink_price = 17000;
      break;
    case 6:
      var drink_price = 20000
      
      break;
  } 
  var dqty = parseInt(frm.dqty.value);
  var totald = drink_price * dqty;
  document.getElementById("totaldrink").innerHTML = totald;
}
// hien thi tong so tien khi chon trai cay
function totalf() {
  var fruit_id = parseInt(frm.fruit.value);
  switch (fruit_id) {
    case 0:
      var fruit_price = 99000;
      break;
    case 1:
      var fruit_price = 129000;
      break;
    case 2:
      var fruit_price = 189000;
      break;
  }
  var fqty = parseInt(frm.fqty.value);
  var totalf = fruit_price * fqty;
  document.getElementById("totalfruit").innerHTML = totalf;
}

function sum() {
  document.getElementById("dprint").innerHTML = "";
  document.getElementById("fprint").innerHTML = "";
  document.getElementById("changes").innerHTML = "";
  var drink_name = ["Water","Coca Cola","7 Up","Pepsi","Orange Juice","Sting","Red Bull"]
  var fruit_name = ["Small disk of Fruits", "Huge disk of Fruits","Pomelo"]
  var drink_id = parseInt(frm.drink.value);
  switch (drink_id) {
    case 0:
      var drink_price = 15000;
      break;
    case 1:
      var drink_price = 17000;
      break;  
    case 2:
      var drink_price = 17000;
      break;
    case 3:
      var drink_price = 17000;
      break;
    case 4:
      var drink_price = 17000;
      break;
    case 5:
      var drink_price = 17000;
      break;
    case 6:
      var drink_price = 20000
      
      break;
  } 
  var fruit_id = parseInt(frm.fruit.value);
  switch (fruit_id) {
    case 0:
      var fruit_price = 99000;
      break;
    case 1:
      var fruit_price = 129000;
      break;
    case 2:
      var fruit_price = 189000;
      break;
  }
  var money = parseInt(frm.money.value);
  var totald = drink_price * parseInt(frm.dqty.value);
  var totalf = fruit_price * parseInt(frm.fqty.value);
  var pay = money - (totald+totalf);
  if (totald+totalf == 0){
    document.getElementById("dprint").innerHTML = "You haven't choose drink or fruit, please try again later!"
  } else if(pay <= 0) {
    document.getElementById("dprint").innerHTML = "You don't have enough money, please come back next time !"
  } else {
    if (totald != 0){
      document.getElementById("dprint").innerHTML = "Here is your: " + drink_name[parseInt(frm.drink.value)];
    }
    if (totalf != 0){
      document.getElementById("fprint").innerHTML = "Here is your: " + fruit_name[parseInt(frm.fruit.value)];
    }
    document.getElementById("changes").innerHTML = "Here is your changes: " + pay;
  
  }
}

function cancel(){
  document.getElementById("dqty").value = 0;
  document.getElementById("fqty").value = 0;
  document.getElementById("money").value =  0;
  document.getElementById("dprint").innerHTML = "";
  document.getElementById("fprint").innerHTML = "";
  document.getElementById("changes").innerHTML = "";

}