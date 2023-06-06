function openMyForm() {
  closeReviewsForm(); 
  document.getElementById("myForm").style.display = "block";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
}

function openReviewsForm() {
  closeMyForm(); 
  document.getElementById("reviewForm").style.display = "block";
  document.getElementById("nameReviewForm").value = "";
  document.getElementById("addressReviewForm").value = "";
}


function closeMyForm() {
  document.getElementById("myForm").style.display = "none";
}

function closeReviewsForm() {
  document.getElementById("reviewForm").style.display = "none";
}

function boughtCar() {
  let fullName = document.getElementById("name").value;

  if (validateForm()) {
    alert(`${fullName}, благодарим за поръчката!`);
    closeForm(); 
  }

  return false;
}

function validateForm() {
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;

  if (name.length <= 3 || address.length <= 3) {
    return false;
  }

  return true;
}

function submitReview() {
  let name = document.getElementById("nameReviewForm").value;
  let review = document.getElementById("addressReviewForm").value;

 
  let existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];

 
  let newReview = { name, review };
  existingReviews.push(newReview);


  localStorage.setItem("reviews", JSON.stringify(existingReviews));


  let newWindow = window.open("", "_blank", "width=400,height=300");


  let content = `
    <h1 style="font-size: 30px;">Reviews</h1>
  `;


  existingReviews.forEach((review) => {
    content += `
      <p><strong>Name:</strong> ${review.name}</p>
      <p><strong>Review:</strong> ${review.review}</p>
      <hr>
    `;
  });


  newWindow.document.write(content);


  closeReviewsForm();

  return false;
}
