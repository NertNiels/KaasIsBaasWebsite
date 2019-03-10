class chooseScene {

  constructor() {
    this.teaButton = new button(color("#ed5509"), 0, height - width * 0.6666, width/2, width * 0.3333, new teaProtocol1());
    this.drinkButton = new button(color("#3b8ccf"), width / 2, height - width * 0.6666, width/2, width * 0.3333, new insistScene());
    this.foodButton = new button(color("#509b34"), 0, height-width * 0.3333, width/2, width * 0.3333, new insistScene());
    this.snackButton = new button(color("#f6c117"), width / 2, height - width * 0.3333, width/2, width * 0.3333, new insistScene());

    this.teaButton.loadImage(tea);
    this.drinkButton.loadImage(drink);
    this.foodButton.loadImage(food);
    this.snackButton.loadImage(snack);

  }

  drawScene() {
    drawImageFromCenter(carrie_happy, width*0.5, height * 0.3333, width*0.75/carrie_happy.width)
    this.teaButton.drawButton();
    this.drinkButton.drawButton();
    this.foodButton.drawButton();
    this.snackButton.drawButton();
  }

  checkMouse() {
    this.teaButton.checkIfClicked();
    this.drinkButton.checkIfClicked();
    this.foodButton.checkIfClicked();
    this.snackButton.checkIfClicked();

  }
}
