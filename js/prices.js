/* Here we will define all prices and discounts for the VIP plan*/

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {

//------------Variables----------------------------------------

var xpercentoff = 10; //percentage of for the yearly plan

var xmonthprice = 2; // usual month price, will change the table if modified here

var xyearprice = (xmonthprice*12)-((xmonthprice*12)*xpercentoff)/100; //Year price with discount calculated here

xyearprice.toFixed(2);

//-------------Scripts--------------------------------------------------------------

document.getElementById("monthprice").innerHTML = xmonthprice;

document.getElementById("percentoff").innerHTML = xpercentoff;

document.getElementById("yearprice").innerHTML = xyearprice;


    }
  }