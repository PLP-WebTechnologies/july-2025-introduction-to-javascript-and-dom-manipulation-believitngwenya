// ------------------------------
// Part 1: Basics
// ------------------------------
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are eligible!";
  } else {
    result.textContent = "❌ Sorry, you must be 18+.";
  }
});

// ------------------------------
// Part 2: Functions
// ------------------------------

// Function to calculate sum
function calculateSum(a, b) {
  return a + b;
}

// Function to format result string
function formatResult(value) {
  return `The result is: ${value}`;
}

document.getElementById("sumBtn").addEventListener("click", () => {
  let n1 = parseFloat(document.getElementById("num1").value) || 0;
  let n2 = parseFloat(document.getElementById("num2").value) || 0;
  let total = calculateSum(n1, n2);
  document.getElementById("sumResult").textContent = formatResult(total);
});

// ------------------------------
// Part 3: Loops
// ------------------------------
document.getElementById("countdownBtn").addEventListener("click", () => {
  let list = document.getElementById("countdownList");
  list.innerHTML = "";

  for (let i = 5; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = i === 0 ? "🎉 Done!" : i;
    list.appendChild(li);
  }
});

// ------------------------------
// Part 4: DOM Manipulation
// ------------------------------
document.getElementById("toggleThemeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  let msg = document.getElementById("message");
  if (document.body.classList.contains("dark-mode")) {
    msg.textContent = "🌑 Dark mode is ON";
  } else {
    msg.textContent = "☀️ Light mode is ON";
  }
});
