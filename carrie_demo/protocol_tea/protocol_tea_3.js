class teaProtocol3 {
  drawScene() {
    drawImageFromCenter(carrie_smile, width * 0.2, height * 0.9, width*0.4/carrie_smile.width)

    drawImageFromCenter(clock, width * 0.5, height * 0.55, width * 0.75/clock.width);

    fill(0);
    textSize(fontSize);
    text("Now wait a few minutes until\nthe water is hot enough.", width * 0.5, height * 0.2);
  }

  checkMouse() {
    gotoScene(new teaProtocol4());
  }
}
