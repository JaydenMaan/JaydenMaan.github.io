const sleep = [
    "img/bobface/sleep1.png",
    "img/bobface/sleep2.png",
    "img/bobface/sleep3.png",
    "img/bobface/sleep4.png",
    "img/bobface/sleep5.png",
    // "img/bob.png",
];

let eeping = true;
let index = 0;
let eepInterval = null;

const imgElement = document.getElementById("slideshow");

function eep() {
    index = (index + 1) % sleep.length;
    imgElement.src = sleep[index];

    const talkBox = document.getElementById("talkBox");
    if (talkBox) {
        talkBox.textContent = messages[index] || "";
    }
}

function startEep() {
    if (!eepInterval) {
        eepInterval = setInterval(() => {
            if (!eeping) {
                clearInterval(eepInterval);
                eepInterval = null;
                return;
            }
            eep();
        }, 1000);
    }
}

function stopEep() {
    eeping = false;
}


const images = [
    "img/bobface/bob.png",
    "img/bobface/happytalk.png",
    "img/bobface/happy.png",
    "img/bobface/smirk.png",
    "img/bobface/smirktalk.png"
];


function talkMode() {
    stopEep();
    imgElement.src = images[1];

    // Show the talkBox
    let talkBox = document.getElementById("talkBox");
    talkBox.style.display = "block";

    let wakebutton = document.getElementById("wakebutton");
    wakebutton.style.display = "none";

    // First message
    const message1 = "Hello! My name is Bob, Nice to meet you! ";
    const message2 = "Im a smart home assistant. Tasked to protect you! ";
    const message3 = "With my many sensors and data i can find the optimal way of keeping you safe. "
    const message4 = "I have detected that i am in based in a browser, adjusting to optimal size and standards. . . . . . . "
    const message5 = "Succes! ";
    const message6 = "Anyways have fun reading, im keeping my eye on you ";


    typeText(talkBox, message1, 50, () => {
      setTimeout(() => {

        typeText(talkBox, message2, 50, () => {
          setTimeout(() => {

            typeText(talkBox, message3, 50, () => {
              setTimeout(() => {

                document.body.style.background = "#686399";
                
                typeText(talkBox, message4, 50, () => {
                setTimeout(() => {

                  document.body.style.background = "#1b8011";
                  let divs = document.getElementsByClassName("bob");
                  for (let div of divs) {
                      div.style.width = "60rem";
                      div.style.borderRadius = "4rem"
                  }
                  
                  typeText(talkBox, message5, 50, () => {
                    setTimeout(() => {
                      
                      typeText(talkBox, message6, 50, () => {
                        imgElement.src = images[3];
                        setTimeout(() => {

                          imgElement.src = images[4];
                          setTimeout(() => {
                            
                            eeping = true
                            startEep()
                          
                            }, 20000);



                        }, 2000);
                        
                      });
                      
                      }, 2000);
                    });
                  }, 3000);
                });



                }, 2000);
              });

          }, 2500);
        });

      }, 2000);
    });

}


function typeText(element, text, speed = 50, callback) {

    element.textContent = ""; // clear previous text
    let i = 0;
    let interval = setInterval(() => {
        element.textContent += text.charAt(i);
        if (text.charAt(i) == " "){
          imgElement.src = images[2];
        } else {
          imgElement.src = images[1]
        }
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            if (callback) callback(); // run next function
        }
    }, speed);
}





// slides----------------------------------------------------------------------------

let slideIndex = 1;
showSlides(slideIndex);

let slideIndex2 = 1;
showSlides2(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}




function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}


function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides2");
    if (n > slides2.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }

    slides2[slideIndex-1].style.display = "block";
}


startEep()