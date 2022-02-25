//Listen for Submit
document.getElementById("loan-form").addEventListener('submit', calculateResults);

function calculateResults(e){

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(years.value)*12;


//Compute Monthly Payment:
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal * x * calculatedInterest)/(x-1);

if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly*calculatedPayments.toFixed(2));
  totalInterest.value = ((monthly * calculatedPayments)- principal).toFixed(2);
} else {
  showError("Please Check Your Numbers");

}
  e.preventDefault();
}


function showError(error) {
//Create Div
  const errorDiv = document.createElement('div');

  //Get Parent Element
  const card = document.querySelector(".card-body");

  //Get Heading Element
  const heading = document.querySelector(".heading");

  //Add bootstrap class
   errorDiv.className = "alert alert-danger";

   //Create Text Node & Append to Div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert errorDiv above Heading:
  card.insertBefore(errorDiv, heading)

  //Clear Error after 3 seconds 
  setTimeout(clearError, 3000);
  }

  //Clear Error Function
function clearError(){
  document.querySelector('.alert').remove();
}