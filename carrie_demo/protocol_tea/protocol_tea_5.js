class teaProtocol5 {
  drawScene() {
    drawImageFromCenter(carrie_smile, width * 0.2, height * 0.9, width*0.4/carrie_smile.width)

    drawImageFromCenter(tea_put_teabag_in, width * 0.5, height * 0.55, width * 0.75/tea_put_teabag_in.width);

    fill(0);
    textSize(fontSize);
    text("Put the green tea teabag\ninto the hot water\nin the cup.", width * 0.5, height * 0.2);
  }

  checkMouse() {
    gotoScene(new teaProtocol6());
  }
}
