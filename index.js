// Data tugas
let currentId = 4;
const dataTugas = [
  {
    id: 1,
    description: "Membuat fitur add task",
    status: "Done",
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 2,
    description: "Membuat fitur update task",
    status: "Todo",
    createdAt: new Date(),
    updatedAt: null,
  },
  {
    id: 3,
    description: "Membuat fitur hapus task",
    status: "In progress",
    createdAt: new Date(),
    updatedAt: null,
  }
];

// import modul readline untuk input user
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function tambah task
function addTask(inputDescription, inputStatus = "todo") {
  inputCreatedAt = new Date();

  const newTask = {
    id: currentId++,
    description: inputDescription,
    status: inputStatus,
    createdAt: inputCreatedAt,
    updatedAt: null,
  };

  dataTugas.push(newTask);
  console.log("Tugas berhasil ditambahkan\n");
}

// input tambah deskripsi
function inputDeskripsi() {
  rl.question("Deskripsi tugas baru: ", (desk) => {
    if (desk.trim() === "") {
      console.log("Deskripsi tidak boleh kosong!");
      return inputDeskripsi(); 
    }

    addTask(desk, undefined);
    showMenu();
  });
}

function inputUpdate() {
  // pilih data berdasarkan id
  rl.question("\nMasukan id data yang mau diupdate: ", (tanyaId) => {
    const task = dataTugas.find((item) => item.id == tanyaId);

    if (!task) {
      console.log("Data tidak ditemukan");
      return inputUpdate();
    }
    // input data desk dan status baru
    rl.question(`Deskripsi Baru (sebelumnya: ${task.description}): `, (deskNew) => {
      rl.question("Status Baru (Todo, In progress, Done): ", (statusNew) => {
        task.description = deskNew;
        task.status = statusNew;
        task.updatedAt = new Date();

        console.log("Data berhasil diupdate\n")

        showMenu();
      });
    });
  });
}

// input perbarui task
function UpdateTask() {
  // tampil semua data
  for (data of dataTugas) {
console.log(`\nID: ${data.id}
Deskripsi: ${data.description}
Status: ${data.status}`);
  }
  inputUpdate();
}

// hapus task
function deleteTask(){
  // tampil semua data
  for (data of dataTugas) {
console.log(`\nID: ${data.id}
Deskripsi: ${data.description}
Status: ${data.status}`);
  }

  inputDelete()

}

// input delete
function inputDelete(){
  // pilih data berdasarkan id
  rl.question("\nMasukan id yang mau didelete: ", (tanyaId) => {
    const task = dataTugas.findIndex(item => item.id == tanyaId)

    if(!task){
      console.log("ID tidak ditemukan")
      return inputDelete()
    }

    dataTugas.splice(task, 1)

    console.log("Data berhasil didelete\n")

    showMenu()
  })
}

// function tampil task
function tampilTugas() {
  console.log("\n=== Daftar Semua Tugas ===")
  for (data of dataTugas) {
    console.log(`ID: ${data.id}
Deskripsi: ${data.description}
Status: ${data.status}
Created At: ${data.createdAt}
Updated At: ${data.updatedAt}\n`);
  }
}

// daftar tugas yang sudah selesai
function daftarTugasSelesai(){
  const tugasDone = dataTugas.filter(item => item.status == "Done")
  console.log(`\n=== Daftar Tugas yang sudah selesai ===`)
  for(data of tugasDone){
    console.log(`ID: ${data.id}
Deskripsi: ${data.description}
Status: ${data.status}
Created At: ${data.createdAt}
Updated At: ${data.updatedAt}\n`)
  }

  showMenu()
}

// daftar tugas yang belum selesai
function daftarTugasTodo(){
  const tugasTodo = dataTugas.filter(item => item.status == "Todo")
  console.log(`\n=== Daftar Tugas yang belum selesai ===`)
  for(data of tugasTodo){
    console.log(`ID: ${data.id}
Deskripsi: ${data.description}
Status: ${data.status}
Created At: ${data.createdAt}
Updated At: ${data.updatedAt}\n`)
  }

  showMenu()
}

// daftar tugas yang sedang dikerjakan
function daftarTugasProgress(){
  const tugasTodo = dataTugas.filter(item => item.status == "In progress")
  console.log(`\n=== Daftar Tugas yang sedang dikerjakan ===`)
  for(data of tugasTodo){
    console.log(`ID: ${data.id}
Deskripsi: ${data.description}
Status: ${data.status}
Created At: ${data.createdAt}
Updated At: ${data.updatedAt}\n`)
  }

  showMenu()
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

      case "3":
        deleteTask()
        break

      case "4":
        tampilTugas();
        showMenu();
        break;
      
      case "5":
        daftarTugasSelesai()
        break

      case "6":
        daftarTugasTodo()
        break
      
      case "7":
        daftarTugasProgress()
        break

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
