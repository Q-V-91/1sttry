/* Here we will define all prices and discounts for the VIP plan*/

//------------Variables-----------

var percentoff = 10; //percentage of for the yearly plan

var monthprice = 2; // usual month price, will change the table if modified here

var yearprice = (monthprice*12)-((monthprice*12)*percentoff)/100; //Year price with discount calculated here

//-------------Scripts-----------------------

document.getElementById("percentoff").innerHTML = percentoff;

document.getElementById("monthprice").innerHTML = monthprice;

document.getElementById("yearprice").innerHTML = yearprice;

