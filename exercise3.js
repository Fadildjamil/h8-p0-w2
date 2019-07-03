var name = "songfj" ;
var peran = "Penyihir" ;
    console.log("Halo " + name + ", pilih peranmu untuk memulai game!");

if (peran === "Ksatria") {
    console.log("Selamat datang di Dunia Proxytia, " + name );
    console.log("Halo" + peran + " " + name + ", kamu dapat menyerang dengan senjatamu!");
} else if (peran === "Tabib") {
    console.log("Selamat datang di Dunia Proxytia, " + name );
    console.log("Halo " + peran + " " + name + ", kamu akan membantu temanmu yang terluka");
} else { 
    console.log("Selamat datang di Dunia Proxytia, " + name );
    console.log("Halo " + peran + " " + name + ", ciptakan keajaiban yang membantu kemenanganmu!");
} 
