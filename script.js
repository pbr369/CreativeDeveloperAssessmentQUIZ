const femaleFade = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("femaleimage");

    setTimeout(function () {
      image.style.opacity = "1";
    }, 100);
  });
};

const slideInImage = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const slideImage1 = document.getElementById("header1");
    const image = document.getElementById("femaleimage");

    function header1() {
      let leftPosition = -100; 
      const slideInterval = setInterval(function () {
        if (leftPosition >= 0) {
          clearInterval(slideInterval);
          setTimeout(() => {
            image.style.opacity = "0";
            let i = 1;
            let shrink = setInterval(() => {
              if (i > 0.01) {
                i -= 0.01;
                slideImage1.style.transform = `scale(${i})`;
              } else if (i < 0) {
                clearInterval(shrink);
              } else {
                slideImage1.style.transform = scale(0);
              }
            }, 4);
          }, 800);
        } else {
          leftPosition += 4; 
          slideImage1.style.left = leftPosition + "%";
        }
      }, 30); 
    }

    header1(); 
  });
};

const header2 = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const slideImage = document.getElementById("header2");

    function slideheader2() {
      let leftPosition = 550;
      const slideInterval2 = setInterval(function () {
        if (leftPosition < 60) {
          clearInterval(slideInterval2);
          setTimeout(() => {
          }, 300);
        } else {
          leftPosition -= 20;
          slideImage.style.left = leftPosition + "px";
          document.querySelector("#header2").style.display = "block";
        }
      }, 30);
    }

    setTimeout(slideheader2, 4000);
  });
};

const subheadline = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("subheadline");

    setTimeout(function () {
      image.style.opacity = "1";
    }, 6000);
  });
};

const logo = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const logoImage = document.getElementById("logo");

    function slidelogo() {
      let leftPosition = -150;
      const slideInterval3 = setInterval(function () {
        if (leftPosition > 320) {
          clearInterval(slideInterval3);
          setTimeout(() => {
          }, 300);
        } else {
          leftPosition += 20;
          logoImage.style.left = leftPosition + "px";
        }
      }, 30);
    }

    setTimeout(slidelogo, 5000);
  });
};

const learnMore = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("learnmore");

    setTimeout(function () {
      image.style.opacity = "1";
    }, 7000);
  });
};

const refreshBtn = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const image = document.getElementById("replay");

    setTimeout(function () {
      image.style.opacity = "1";
    }, 8000);
  });

};

femaleFade();
slideInImage();
header2();
subheadline();
logo();
learnMore();
refreshBtn();
