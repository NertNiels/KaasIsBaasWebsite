var currentScene;
var font;
var fontSize = 50;
var WIDTH = 480;
var HEIGHT = 640;
var defaultBG;

function preload() {
  font = loadFont('assets/ZCOOL.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fontSize = (50/800) * width;
  setupImages();
  currentScene = new startupScene();
  defaultBG = color(230);

  textFont(font);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(defaultBG);

  currentScene.drawScene();

}

function drawImageFromCenter(texture, x, y, scale) {
  image(texture, x - texture.width * scale * 0.5, y - texture.height * scale * 0.5, texture.width * scale, texture.height * scale)
}

function mousePressed() {
  currentScene.checkMouse();
}

function gotoScene(scene) {
  currentScene = scene;
}
