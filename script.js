// let akun = {
//   saldo: 100,
// };

// const invest = {
//   item: [
//     { id: 1, nama: "forex", harga: 20 },
//     { id: 2, nama: "crypto", harga: 75 },
//     { id: 3, nama: "nft", harga: 10 },
//   ],

//   tampilkanItem: function () {
//     console.log("daftar item");
//     console.log("========================");
//     for (let i = 0; i < this.item.length; i++) {
//       console.log(
//         this.item[i].id + ". " + this.item[i].nama + "- $ " + this.item[i].harga
//       );
//     }
//     console.log("=========================");
//   },
//   cariItem: function (id) {
//     for (let i = 0; i < this.item.length; i++) {
//       if (this.item[i].id === id) {
//         return this.item[i];
//       }
//     }
//     return null;
//   },

// //   benerin item '!=id' nya
//   beliItem: function (id, jumlah) {
//     const item = this.cariItem(id);
//     if (item !== id) {
//       if (jumlah <= 0) {
//         console.log("jumlah item yang dibeli harus lebih dari 0");
//       } else if (jumlah * item.harga > akun.saldo) {
//         console.log("maaf, saldo anda tidak cukup");
//       } else {
//         console.log(
//           `anda telah membeli ${jumlah} ${item.nama} seharga $ ${
//             jumlah * item.harga
//           }`
//         );
//         akun.saldo -= jumlah * item.harga;
//       }
//     } else {
//       console.log(`item dengan id ${id} tidak ditemukan`);
//     }
//   },
// };

// nested object

var siswa = {
  daftarNama: {
    nama: "Radhy",
    kelas: "XI",
    jurusan: "TKJ",
    absensi: {
      hadir: 2,
      bolos: 0,
      nilai: 40,
    },
  },
};

console.log(`nilai murid sebelum remedial : ` + siswa.daftarNama.absensi.nilai);

siswa.daftarNama.absensi.nilai = 90

console.log(`nilai murid setelah remedial : ` + siswa.daftarNama.absensi.nilai);


