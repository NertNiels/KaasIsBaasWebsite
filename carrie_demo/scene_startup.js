class startupScene {
  drawScene() {
    drawImageFromCenter(carrie_hi, width * 0.5, height * 0.5, width*0.75/carrie_hi.width);

  }

  checkMouse() {
    gotoScene(new insistScene());
  }
}
