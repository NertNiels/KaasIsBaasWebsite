class teaProtocol1 {
  drawScene() {
    drawImageFromCenter(carrie_smile, width * 0.2, height * 0.9, width*0.4/carrie_smile.width)

    drawImageFromCenter(waterboiler_fill, width * 0.5, height * 0.55, width * 0.75/waterboiler_fill.width);

    fill(0);
    textSize(fontSize);
    text("Put some water into the waterboiler.", width * 0.5, height * 0.2);
  }

  checkMouse() {
    gotoScene(new teaProtocol2());
  }
}
