window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
body('name', 'Empty name').trim().isLength({ min: 1 }).escape();
body('name').trim().isLength({ min: 1 }).withMessage('Name empty.')
    .isAlpha().withMessage('Name must be alphabet letters.');

$(document).ready(function() {
  $('#frmemail').submit(function(event) {
    $.ajax({
          type: 'POST',
          url: 'email.php',
          data: $('#frmemail').serialize(),
          success: function() {
            $('.success').fadeIn(1000)
          }
        })
      })
    })

document.querySelector(".submit").addEventListener("onclick", () => {
  document.getElementsByName('user_name').values=''; 
  document.getElementsByName('user_email').values=''; 
  document.getElementsByName('user_message').values=''; 
  if( document.getElementsByClassName('alert').style.display === "none"){
    alert.parentElement.style.display='block';
  } else{
    alert.parentElement.style.display='none';
  }
});
