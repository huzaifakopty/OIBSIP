function convertTemp() {
  const value = document.getElementById("tempInput").value;
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const result = document.getElementById("result");

  if (value === "" || isNaN(value)) {
    result.innerText = "Please enter a valid number";
    return;
  }

  let temp = parseFloat(value);
  let converted;

  if (from === "f") temp = (temp - 32) * 5 / 9;
  if (from === "k") temp = temp - 273.15;

  if (to === "f") converted = (temp * 9 / 5) + 32;
  else if (to === "k") converted = temp + 273.15;
  else converted = temp;

  result.innerText = "Result: " + converted.toFixed(2);
}
