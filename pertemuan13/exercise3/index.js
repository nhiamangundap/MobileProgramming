/* Exercise #3
name : Mangundap,Nathania */

//1. Class
//a.
class Orang {
constructor(nama,umur){
    this.nama = nama;
    this.umur = umur;
}
bekerja(){
    console.log("${this.nama} sedang bekerja seperti biasa")
}
}
const orang1 = new Orang("Nathania","19tahun");

//inheritance
//a.
class Orang {
    constructor(nama,umur){
        this.nama = nama;
        this.umur = umur;
    }
    tidur(){
        console.log(" ${this.nama} sedang  tidur");
    }
    makan(){
        console.log("${this.nama} sedang  makan");
    }
    }
    const orang1 = new Orang("Nathania","19tahun");

    class Pelajar extends Orang {
        constructor(nama,umur,namaSekolah){
            super(nama,umur);
            this.namaSekolah = namaSekolah;
        }
    }
    {
    const namaSekolah1 = new namaSekolah
    const user = new Pelajar("John", "17" , "Unklab")
     belajar(){
        console.log(" ${this.nama} belajar di ${this.namaSekolah}");
    }
    }