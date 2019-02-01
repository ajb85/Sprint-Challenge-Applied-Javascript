class Carousel {
  constructor(element) {
    this.element = element;
    this.displayPic = 0;
    this.pics = Array.from(this.element.getElementsByTagName("img"));
    this.leftBtn = this.element.querySelector(".left-button");
    this.rightBtn = this.element.querySelector(".right-button");
    this.leftBtn.addEventListener("click", this.showPic.bind(this, -1));
    this.rightBtn.addEventListener("click", this.showPic.bind(this, 1));
    //this.showPic(0);
    this.pics.forEach(pic => {
      pic.style.display = "none";
      pic.style.position = "absolute";
      pic.style.zIndex = -1;
    });
    this.pics[this.displayPic].style.display = "inline";
  }

  showPic(i) {
    const pic = this.pics[this.displayPic];

    let nextI = this.displayPic + i;
    if (nextI >= this.pics.length) {
      nextI = 0;
    } else if (nextI < 0) {
      nextI = this.pics.length - 1;
    }

    const nextPic = this.pics[nextI];
    //let slide = new TimelineMax();
    if (i > 0) {
      animateRight(pic, nextPic);
    } else {
      animateLeft(pic, nextPic);
    }
    this.displayPic = nextI;
  }
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);

// Two functions could be combined with conditions
function animateRight(pic, nextPic) {
  let width = pic.offsetWidth;
  TweenMax.set(nextPic, { display: "inline", right: "", left: "" }, 0);

  TweenMax.to(pic, 0.5, {
    left: width,
    ease: Linear.easeNone,
    onComplete: function() {
      TweenMax.set(pic, { display: "none", left: "" });
    }
  });
  TweenMax.from(nextPic, 0.5, {
    right: width,
    ease: Linear.easeNone,
    onComplete: function() {
      TweenMax.set(nextPic, { right: "" });
    }
  });
}
function animateLeft(pic, nextPic) {
  let width = pic.offsetWidth;
  TweenMax.set(nextPic, { display: "inline", right: "", left: "" }, 0);

  TweenMax.to(pic, 0.5, {
    right: width,
    ease: Linear.easeNone,
    onComplete: function() {
      TweenMax.set(pic, { display: "none", right: "" });
    }
  });
  TweenMax.from(nextPic, 0.5, {
    left: width,
    ease: Linear.easeNone,
    onComplete: function() {
      TweenMax.set(nextPic, { left: "" });
    }
  });
}
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
