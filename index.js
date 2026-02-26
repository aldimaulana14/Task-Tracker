// Data tugas
const dataTugas = [
  {
    id: 1,
    description: "Belajar JS",
    status: "todo",
    createdAt: new Date(),
    updatedAt: "Kosong"
  }
]

// import modul readline untuk input user
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// function tambah task
function addTask(inputId, inputDescription, inputStatus = "todo", inputCreatedAt, inputUpdatedAt = null){
  inputId = Date.now()
  inputCreatedAt = new Date()
  dataTugas.push({
    id: inputId,
    description: inputDescription,
    status: inputStatus,
    createdAt: inputCreatedAt,
    updatedAt: inputUpdatedAt
  })

}

// function tampil task
  function tampilTugas(){
  for(data of dataTugas){
    console.log(`===========================
ID: ${data.id}
Deskripsi: ${data.description}
Status: ${data.status}
Created At: ${data.createdAt}
Updated At: ${data.updatedAt}`)
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
8. Keluar`

// function tampil menu
function showMenu(){
  console.log(menu)
  rl.question("Masukan pilihan: ", (jawaban) => {
    switch(jawaban){
      case "1":
        rl.question("Deskripsi tugas baru: ", (desk) => {
          addTask(undefined, desk, undefined, undefined, undefined)
          showMenu()
        })
        break

      case "4":
        tampilTugas()
        showMenu()
        break
      
      case "8":
        console.log("Terimakasih")
        rl.close()
        break

      default:
        console.log("Input tidak valid")
        showMenu()
    }
  })
}

showMenu()













