document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama_lengkap = document.getElementById("nama_lengkap").value;
  const nama_panggilan = document.getElementById("nama_panggilan").value;
  const nomor_hp = document.getElementById("nomor_hp").value;
  const tanggal = document.getElementById("tanggal").value;
  const password = document.getElementById("password").value;

  const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.insertCell(0).textContent = nama_lengkap;
  newRow.insertCell(1).textContent = nama_panggilan;
  newRow.insertCell(2).textContent = nomor_hp;
  newRow.insertCell(3).textContent = tanggal;
  newRow.insertCell(4).textContent = password;

  const user = {
    nama_lengkap: nama_lengkap,
    nama_panggilan: nama_panggilan,
    nomor_hp: nomor_hp,
    tanggal: tanggal,
    password: password
  };

  localStorage.setItem(nama_panggilan, JSON.stringify(user));

  document.getElementById("registerForm").reset();
});