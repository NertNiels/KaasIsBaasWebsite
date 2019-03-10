class teaProtocol4 {
  drawScene() {
    drawImageFromCenter(carrie_smile, width * 0.2, height * 0.9, width*0.4/carrie_smile.width)

    drawImageFromCenter(waterboiler_pouring, width * 0.5, height * 0.55, width * 0.75/waterboiler_pouring.width);

    fill(0);
    textSize(fontSize);
    text("Pour the water into a cup.", width * 0.5, height * 0.2);
  }

  checkMouse() {
    gotoScene(new teaProtocol5());
  }
}
