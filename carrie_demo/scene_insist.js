class insistScene {
  drawScene() {
    image(clock, width * 0.70, 0, width * 0.30, clock.height * (width * 0.30 / clock.width))
    drawImageFromCenter(carrie_smile, width * 0.4, height * 0.6, width*0.5/carrie_smile.width)
    drawImageFromCenter(hands_up_right, width * 0.70, height * 0.35, width*0.325/hands_up_right.width);

    fill(0);
    textSize(fontSize);
    text("It's 3 PM, what would\nyou like to drink\nor eat?", width * 0.75, height * 0.8);
  }

  checkMouse() {
    gotoScene(new chooseScene());
  }
}
