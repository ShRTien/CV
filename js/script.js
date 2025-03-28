document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  let emailInput = document.getElementById("email").value.trim();
  let errorMessage = document.getElementById("error-message");

  const sectionContent= document.querySelector('#info .section-content')
  if (!isValidEmail(emailInput)) {
      errorMessage.style.display = "inline"; // Show error
  } else {
      errorMessage.style.display = "none"; // Hide error
      sectionContent.style.display='block'
  }
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function handleOnmouseOver(element)
{

  const viewmore = element.querySelector('.view-more');
  console.log("zoo");
  viewmore.style.display='inline-block';
  
}

function handleOnmouseOut(elements)
{

  const viewless = elements.querySelector('.view-less');
  console.log("notzo");
  viewless.style.display='none';
  
}