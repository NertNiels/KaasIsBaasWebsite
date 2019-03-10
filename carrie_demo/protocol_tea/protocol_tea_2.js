class teaProtocol2 {
  drawScene() {
    drawImageFromCenter(carrie_happy, width * 0.2, height * 0.9, width*0.4/carrie_happy.width)

    drawImageFromCenter(waterboiler_electrify, width * 0.5, height * 0.55, width * 0.75/waterboiler_electrify.width);

    fill(0);
    textSize(fontSize);
    text("Turn the waterboiler on.", width * 0.5, height * 0.2);
  }

  checkMouse() {
    gotoScene(new teaProtocol3());
  }
}
