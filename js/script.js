window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky", window.scrollY > 50);
  });
  
  const togglebar = document.querySelector('.toggle');
  const menu = document.querySelector('ol');
  
  function navToggle() {
    togglebar.classList.toggle("active");
    menu.classList.toggle("active");
  }
  
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  
  function toggleTrainerInfo(exploreBtn) {
    const frame = exploreBtn.closest('.frame');
    const detailedInfo = frame.querySelector('.detailed-info');
    detailedInfo.style.display = detailedInfo.style.display === 'none' ? 'block' : 'none';
    exploreBtn.textContent = detailedInfo.style.display === 'none' ? 'Explore' : 'Show Less';
  }
  
  // add an event listner for payment portal
  Array.from(document.getElementsByClassName("button")).forEach(e => {
    e.addEventListener("click", () => {
      const maxWidth = 900;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
      if (windowWidth > maxWidth) {
        document.querySelector(".payment-container").style.top = "10%";
        document.querySelector(".payment-container").style.left = "10%";
      } else {
        document.querySelector(".payment-container").style.top = "0";
        document.querySelector(".payment-container").style.left = "0";
      }
  
      document.querySelector(".container").style.backgroundColor = "#121212";
      document.querySelector(".container").style.opacity = "0.7";
      document.querySelector(".payment-container").style.display = "block";
    });
  });
  
  // add an event listner to close payment portal
  document.querySelector(".top-line img").addEventListener("click", () => {
    document.querySelector(".payment-container").style.top = "-100%";
    document.querySelector(".payment-container").style.left = "-100%";
    document.querySelector(".container").style.backgroundColor = "transparent";
    document.querySelector(".container").style.opacity = "1";
  })
  
  document.querySelector("#form-submit").addEventListener("click", () => {
    document.querySelector(".payment-container").style.top = "-100%";
    document.querySelector(".payment-container").style.left = "-100%";
    document.querySelector(".container").style.backgroundColor = "transparent";
    document.querySelector(".container").style.opacity = "1";
  })
  