document.querySelector('.triangle-btn').addEventListener('click', () => {
  const triangleArea = core('.base-field', '.hight-field');
  if (isNaN(triangleArea)) {
    alert('please insart number');
    return;
  }
  const triangleAria = 0.5 * triangleArea;
  setArea('.area-value', triangleAria);
  calculationAntry('triangle', triangleArea);
});

document.querySelector('.rectangle-btn').addEventListener('click', () => {
  const rectangleArea = core('.width-field', '.length-field');
  if (isNaN(rectangleArea)) {
    alert('please insart number');
    return;
  }
  setArea('.rectangle-value', rectangleArea);
  calculationAntry('rectangl', rectangleArea);
});

document.querySelector('.parallelogram-btn').addEventListener('click', () => {
  const parallelogramArea = core('.parallelogram-base', '.parallelogram-hight');
  if (isNaN(parallelogramArea)) {
    alert('please insart number');
    return;
  }
  setArea('.parallelogram-value', parallelogramArea);
  calculationAntry('parallelogram', parallelogramArea);
});

function ellips() {
  const area = core('.ellipse-major', '.ellipse-minor');
  if (isNaN(area)) {
    alert('please insart number');
    return;
  }
  const totalArea = 3.14 * area;
  const toFiexdArea = totalArea.toFixed(2);
  setArea('.ellipse-value', toFiexdArea);
  calculationAntry('ellipse', area);
}
