const checkBoxes = document.querySelectorAll('input[type="checkbox');
var positions = [];
var isKeyShiftPressed = false;

function checkBoxMonitor() {
  var len = 0;
  checkBoxes.forEach(checkbox => {
    if (checkbox.checked == true) {
      positions = [...positions, len];
    }
    len++;
  });

  if (isKeyShiftPressed) {
    keyIsPressed();
  }
}

function keyIsPressed() {
  if (positions.length > 1) {
    for (var i = 0; i < checkBoxes.length; i++) {
      if (i >= positions[0] && i <= positions[positions.length - 1]) {
        checkBoxes[i].checked = true;
      }
    }
  }
}

document.addEventListener("change", checkBoxMonitor);
document.addEventListener("keydown", e => {
  if (e.key == "Shift") {
    isKeyShiftPressed = true;
  }
});
document.addEventListener("keyup", () => (isKeyShiftPressed = false));
