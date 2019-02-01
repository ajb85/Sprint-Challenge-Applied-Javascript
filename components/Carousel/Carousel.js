class Carousel {
  constructor(element) {
    this.element = element;
    this.displayPic = 0;
    this.pics = Array.from(this.element.getElementsByTagName("img"));
    this.leftBtn = this.element.querySelector(".left-button");
    this.rightBtn = this.element.querySelector(".right-button");
    this.leftBtn.addEventListener("click", this.showPic.bind(this, -1));
    this.rightBtn.addEventListener("click", this.showPic.bind(this, 1));
    this.showPic(0);
  }
  showPic(i) {
    this.displayPic += i;
    if (this.displayPic < 0) {
      this.displayPic = this.pics.length - 1;
    } else if (this.displayPic >= this.pics.length) {
      this.displayPic = 0;
    }
    this.pics.forEach(pic => (pic.style.display = "none"));
    this.pics[this.displayPic].style.display = "block";
  }
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
