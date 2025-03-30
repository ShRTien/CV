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
  viewmore.style.display='inline-block';
  
}

function handleOnmouseOut(element)
{

  const viewless = element.querySelector('.view-more');
  viewless.style.display='none';
  
}

function handleViewMore(element) {
  const parentContent = element.querySelector(".experience-box"); // Selects the first .pap inside element
  // if (!parentContent)
  // {
  //   alert('pap');
  // }
  const jobContent = parentContent.getElementById(".job-content"); // Selects .job-content inside .pap
  jobContent.style.display = 'inline-block'; // Make it visible
}
