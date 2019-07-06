// Tugas 1. Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.


function shoutOut(){
  
    return 'Halo Function !'
}
  
  console.log(shoutOut()) // Menampilkan "Halo Function!" di console
  
// Tugas 2. Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.
  
  
function calculateMultiply(num1, num2){
    
   return num1 * num2  
}
    
  var num1 = 5;
  var num2 = 6;
  
  var hasilPerkalian = calculateMultiply(num1,num2);
  console.log(hasilPerkalian); // Menampilkan angka 30
  
// Tugas 3. Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"
  
function processSentence(nama, age, address, hobby){
    
    return 'Nama saya ' + nama +', umur saya '+ age +' tahun, alamat saya di ' +address +', dan saya punya hobby yaitu '+ hobby
    
}
  
  var nama = 'Fadli';
  var age = 22;
  var address = 'Jl. Madrasah 24';
  var hobby = 'Menonton'
  
  
  var processSentence1 = processSentence(nama, age, address, hobby)
  
  console.log (processSentence1);
  
  