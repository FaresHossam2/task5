function valid() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "fares" && password === "3043") {
    document.getElementById("out").innerHTML = "welcome  " + username;
  } else {
    document.getElementById("out").innerHTML = "Invalid username or password.";
  }
}

function print() {
    var x = document.getElementById("f1"); 
    var text = "";
    for (var i=0 ; i < x.length ; i++)
    {
  text+= "-"+ x.elements[i].value +"<br>";
    }
    document.getElementById("print").innerHTML =text ;
    
   
  }
   
  function calculate() {
    var x = document.getElementById("f2"); 
    var text = "";
    for (var i=0 ; i < x.length ; i++)
    {
  text+= x.elements[i].value +"<br>";
    }
    document.getElementById("print2").innerHTML =text +"<br>";
    var price1 = document.getElementById("price1").value;
    var price2 = document.getElementById("price2").value;
    var price3 = document.getElementById("price3").value;
    var sum = parseInt(price1) + parseInt(price2) + parseInt(price3);
    document.getElementById("print2").innerHTML += "sum =  " + sum +"<br>";
    if(sum > 5000) {
        var discount = 0.1;
        var total = sum - (sum * discount);
        document.getElementById("print2").innerHTML += "you have discount =  " + discount * 100 + "%" +"<br>";
        document.getElementById("print2").innerHTML += " total price  =  " + total ;
}

}