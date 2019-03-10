class teaProtocol6 {
  drawScene() {
    drawImageFromCenter(carrie_angry, width * 0.2, height * 0.9, width*0.4/carrie_angry.width)

    drawImageFromCenter(beware, width * 0.5, height * 0.55, width * 0.75/beware.width);

    fill(255, 0, 0);
    textSize(fontSize * 2);
    text("BEWARE", width * 0.5, height * 0.2);

    textSize(fontSize);
    text("the water might be hot, please be aware.", width * 0.5, height * 0.7);
  }

  checkMouse() {
    gotoScene(new teaProtocol7());
  }
}
