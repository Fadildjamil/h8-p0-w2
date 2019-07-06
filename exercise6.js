/* 1. Melakukan Looping Menggunakan While */

var angka1 = 0;
var angka2 = 22;

console.log ("LOOPING PERTAMA")
while(angka1 < 20) {
    angka1 = angka1 + 2  
    console.log ( angka1  + " - I love coding ");
}

console.log ("LOOPING KEDUA")
while(angka2 > 2) {
    angka2 = angka2 - 2
    console.log ( angka2  + " - I love coding ");
}


/* 2. Melakukan Looping Menggunakan For */

console.log ("LOOPING PERTAMA");
for(var angka = 1; angka<21; angka++) {
    console.log( angka + " - I love coding")
}

console.log ("LOOPING KEDUA");
for(var angka = 20; angka>0; angka--) {
    console.log(angka + " - I will become fullstack developer");
}

/* 3. Angka Ganjil dan Genap */

for(var angka = 1; angka <101; angka++) {
    
    if (angka % 2 == 0 ) {
      console.log( angka + " adalah genap" );
    }
    else {
      console.log (angka + " adalah ganjil");}
  }

  // Kelipatan 2

  for(var angka = 1; angka <101; angka++) {
    
    if (angka % 2 === 0 ) {
      console.log( angka );
    }
  }

    // Kelipatan 3

    for(var angka = 1; angka <101; angka++) {
      if (angka % 3 === 0) {
        console.log(angka + " kelipatan 3");
      }
    }

    // Kelipatan 5

    for(var angka = 1; angka <101; angka++) {
    
      if (angka % 5 === 0 ) {
        console.log(angka + " kelipatan 5");
      }
    }

    // Kelipatan 10

    for(var angka = 1; angka <101; angka++) {
    
      if (angka % 10 === 0 ) {
        console.log(angka + " kelipatan 10");
      }
    }



    
    
    
    
    
    