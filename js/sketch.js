function drawNode(node) {
  console.log(node.data)
  n = node.coords;



  stroke(255,255,255);
  if (node.next) {
    line(n.lineY, n.lineX, node.next.coords.valY, n.lineX);
  }


  if (node.data.value >= 0) {
    stroke(0,255,0);
  } else {
    stroke(255,0,0);
  }
  line(n.lineY, n.lineX, n.valY, n.valX);
  fill(255,255,255);
  noStroke();
  ellipse(n.lineY, n.lineX, 20, 20);

  if (node.data.value >= 0) {
    fill(0,255,0);
  } else {
    fill(255,0,0)
  }
  ellipse(n.valY, n.valX, 20, 20);

  


  noStroke();
  textAlign(CENTER);
  fill(0,0,0);

  text(node.data.time, n.lineY, n.lineX);
  text(node.data.value, n.valY, n.valX);  
}