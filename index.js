// Data tugas
let currentId = 2;
const dataTugas = [
  {
    id: 1,
    description: "JS Dasar",
    status: "In progres",
    createdAt: new Date(),
    updatedAt: null,
  },
];

// import modul readline untuk input user
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function tambah task
function addTask(inputDescription, inputStatus = "todo") {
  ``;
  inputCreatedAt = new Date();

  const newTask = {
    id: currentId++,
    description: inputDescription,
    status: inputStatus,
    createdAt: inputCreatedAt,
    updatedAt: null,
  };

  dataTugas.push(newTask);
  console.log("Tugas berhasil ditambahkan");
}

// input tambah deskripsi
function inputDeskripsi() {
  rl.question("Deskripsi tugas baru: ", (desk) => {
    if (desk.trim() === "") {
      console.log("Deskripsi tidak boleh kosong!");
      return inputDeskripsi(); // ulangi pertanyaan
    }

    addTask(desk, undefined);
    showMenu();
  });
}

function inputUpdate() {
  // pilih data berdasarkan id
  rl.question("Masukan id data yang mau diupdate: ", (tanyaId) => {
    const task = dataTugas.find((item) => item.id == tanyaId);

    if (!task) {
      console.log("Data tidak ditemukan");
      return inputUpdate();
    }
    // input data desk dan status baru
    rl.question("Deskripsi Baru: ", (deskNew) => {
      rl.question("Status Baru: ", (statusNew) => {
        task.description = deskNew;
        task.status = statusNew;
        task.updatedAt = new Date();

        showMenu();
      });
    });
  });
}

// input perbarui task
function UpdateTask() {
  // tampil semua data
  for (data of dataTugas) {
    console.log(`===============
      ID: ${data.id}
      Deskripsi: ${data.description}
      Status: ${data.status}`);
  }
  inputUpdate();
}

// function tampil task
function tampilTugas() {
  for (data of dataTugas) {
    console.log(`===========================
ID: ${data.id}
Deskripsi: ${data.description}
Status: ${data.status}
Created At: ${data.createdAt}
Updated At: ${data.updatedAt}`);
  }
}

// // tampilan awal menu
const menu = `=== Todo List App ===
1. Tambah tugas
2. Perbarui tugas
3. Hapus tugas
4. Daftar semua tugas
5. Daftar tugas yang sudah selesai
6. Daftar tugas yang belum selesai
7. Daftar tugas yang sedang dikerjakan
8. Keluar`;

// function tampil menu
function showMenu() {
  console.log(menu);
  rl.question("Masukan pilihan: ", (jawaban) => {
    switch (jawaban) {
      case "1":
        inputDeskripsi();
        break;

      case "2":
        UpdateTask();
        break;

      case "4":
        tampilTugas();
        showMenu();
        break;

      case "8":
        console.log("Terimakasih");
        rl.close();
        break;

      default:
        console.log("Input tidak valid");
        showMenu();
    }
  });
}

showMenu();
