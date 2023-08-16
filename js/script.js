// variable kalkulator segitiga
const luasForm = document.getElementById("luasForm");
const kelilingForm = document.getElementById("kelilingForm");
const resultLuas = document.getElementById("resultLuas");
const resultKeliling = document.getElementById("resultKeliling");

// variable luas segitiga
const hitungLuasButton = document.getElementById("hitungLuas");
hitungLuasButton.addEventListener("click", hitungLuas);

// variable luas segitiga
const hitungKelilingButton = document.getElementById("hitungKeliling");
hitungKelilingButton.addEventListener("click", hitungKeliling);

// Reset button Luas form
const resetLuasButton = document.getElementById("resetLuas");
resetLuasButton.addEventListener("click", resetLuasForm);

// Reset button Keliling form
const resetKelilingButton = document.getElementById("resetKeliling");
resetKelilingButton.addEventListener("click", resetKelilingForm);

// fungsi luas segitiga
function hitungLuas() {
  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  // validasi luas segitiga
  document.getElementById("alasError").textContent = "";
  document.getElementById("tinggiError").textContent = "";

  let isValid = true;

  if (isNaN(alas) || alas <= 0) {
    document.getElementById("alasError").textContent =
      "Harap masukkan alas segitiga";
    isValid = false;
  }

  if (isNaN(tinggi) || tinggi <= 0) {
    document.getElementById("tinggiError").textContent =
      "Harap masukkan tinggi segitiga";
    isValid = false;
  }

  // perhitungan luas segitiga
  if (isValid) {
    const luas = (1 / 2) * alas * tinggi;
    resultLuas.innerText = `L = 1/2 x a x t\n L = 1/2 x ${alas} x ${tinggi}\nL = ${luas}`;
  }
}

// fungsi keliling segitiga segitiga
function hitungKeliling() {
  const sisiA = parseFloat(document.getElementById("sisiA").value);
  const sisiB = parseFloat(document.getElementById("sisiB").value);
  const sisiC = parseFloat(document.getElementById("sisiC").value);

  // validasi keliling segitiga
  document.getElementById("sisiAError").textContent = "";
  document.getElementById("sisiBError").textContent = "";
  document.getElementById("sisiCError").textContent = "";

  let isValid = true;

  if (isNaN(sisiA) || sisiA <= 0) {
    document.getElementById("sisiAError").textContent =
      "Harap masukkan panjang sisi A";
    isValid = false;
  }

  if (isNaN(sisiB) || sisiB <= 0) {
    document.getElementById("sisiBError").textContent =
      "Harap masukkan panjang sisi B";
    isValid = false;
  }

  if (isNaN(sisiC) || sisiC <= 0) {
    document.getElementById("sisiCError").textContent =
      "Harap masukkan panjang sisi C";
    isValid = false;
  }

  // perhitungan keliling segitiga
  if (isValid) {
    const keliling = sisiA + sisiB + sisiC;
    resultKeliling.innerText = `K = S1 + S2 + S3\nK = ${sisiA} + ${sisiB} + ${sisiC}\nK = ${keliling}`;
  }
}

// validasi angka
function validateInput(event) {
  const allowedCharacters = /^[0-9.]+$/;

  if (!event.key.match(allowedCharacters)) {
    event.preventDefault();
  }
}

// fungsi button reset luas
function resetLuasForm() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("resultLuas").innerText = "";
  document.getElementById("alasError").innerText = "";
  document.getElementById("tinggiError").innerText = "";
}

// fungsi button reset keliling
function resetKelilingForm() {
  document.getElementById("sisiA").value = "";
  document.getElementById("sisiB").value = "";
  document.getElementById("sisiC").value = "";
  document.getElementById("resultKeliling").innerText = "";
  document.getElementById("sisiAError").innerText = "";
  document.getElementById("sisiBError").innerText = "";
  document.getElementById("sisiCError").innerText = "";
}
