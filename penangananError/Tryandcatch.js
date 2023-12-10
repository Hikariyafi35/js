try{
    console.log("awal blok try");
    errorcode;
    console.log("akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
  } finally {
    console.log("Akan tetap dieksekusi");
  }// . Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.