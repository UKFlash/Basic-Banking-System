let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var sender = document.getElementById("sender").value;
   var receiver = document.getElementById("receiver").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   
   if (enterAmount < 500) {
   	  alert("<500 amount not allowed")
   } else if (enterAmount > 20000) {
      alert("Insufficient Balance. Please enter Amount < 10000")
   } else {
      var findUserBankAccount = receiver + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(` Transaction Successful...!  
      ${enterAmount}rs is sent to ${receiver}@gmail.com. 
      Received by ${sender}@gmail.com
      Thanks...!
      Increment & Decrement money check below table..!`)

      // transaction history 
      var createPTag = document.createElement("ol");
      var textNode = document.createTextNode(`${enterAmount}rs is sent to 
      ${receiver}@gmail.com by 
      ${sender}@gmail.com
      ${Date()}`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history");
      element.insertBefore(createPTag, element.firstChild);
   }
}

