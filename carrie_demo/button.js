class button {

  constructor(color, x, y, width, height, reference) {
    this.bgColor = color;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.reference = reference;
  }

  loadImage(image) {
    this.image = image;
  }

  drawButton() {
    if(this.containsPoint(mouseX, mouseY)) fill(red(this.bgColor) * 1.2, green(this.bgColor) * 1.2, blue(this.bgColor) * 1.2);
    else fill(this.bgColor);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    var midX, midY;
    midX = (this.x * 2 + this.width) / 2;
    midY = (this.y * 2 + this.height) / 2;

    if(image) drawImageFromCenter(this.image, midX, midY, 0.10);
  }

  containsPoint(x, y) {
    if(x >= this.x && x < this.width + this.x && y >= this.y && y < this.height + this.y) {
      return true;
    }
    return false;
  }

  checkIfClicked() {
    if(this.containsPoint(mouseX, mouseY)) {
      gotoScene(this.reference);
    }
  }
}
