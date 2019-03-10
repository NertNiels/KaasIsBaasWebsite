class teaProtocol7 {
  drawScene() {
    drawImageFromCenter(carrie_enjoy_tea, width * 0.5, height * 0.55, width/carrie_enjoy_tea.width);

    fill(0, 150, 0);
    textSize(fontSize * 2);
    text("Enjoy your tea!", width * 0.5, height * 0.2);
  }

  checkMouse() {
    gotoScene(new startupScene());
  }
}
