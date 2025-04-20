const mycheckbox = document.getElementById("mycheckbox");
const myvisaBtn = document.getElementById("myvisaBtn");
const mywalletBtn = document.getElementById("mywalletBtn");
const mypasportBtn = document.getElementById("mypasportBtn");
const submitBtn = document.getElementById("submitBtn");
const subresult = document.getElementById("subresult");
const checkresult = document.getElementById("checkresult");

submitBtn.onclick = function () {
  let error = false;

  // Cek subscribe
  if (mycheckbox.checked) {
    subresult.textContent = "You subscribed.";
    subresult.classList.remove("shake");
  } else {
    subresult.textContent = "You're not subscribed.";
    subresult.classList.add("shake");
    error = true;
  }

  // Cek payment method
  if (myvisaBtn.checked) {
    checkresult.textContent = "Using Visa";
    checkresult.classList.remove("shake");
  } else if (mywalletBtn.checked) {
    checkresult.textContent = "Using eWallet";
    checkresult.classList.remove("shake");
  } else if (mypasportBtn.checked) {
    checkresult.textContent = "Using Passport";
    checkresult.classList.remove("shake");
  } else {
    checkresult.textContent = "Please select a payment method.";
    checkresult.classList.add("shake");
    error = true;
  }

  // Remove shake effect after animation ends
  if (error) {
    setTimeout(() => {
      subresult.classList.remove("shake");
      checkresult.classList.remove("shake");
    }, 500);
  }
};
