// 1. Menyusun Barisan Bintang

for ( var rows1 = 0; rows1 < 5; rows1++) {
    console.log ( '*');
    }

// 2. Menyusun Barisan Bintang Dengan Nested Looping

for (var row = 0; row < 5; row++) {
    var i = ''
    for (var row1 = 0; row1 < 5; row1++) {
      i += '*'
    }
    console.log(i)
  }

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
var initial = 1;
var i = 0;

while (i<rows3) {
  var pyramid = '*';
  var j=0;
while (j<i) {
  pyramid = pyramid +'*';
  j++;
}
console.log(pyramid);
i++;
}
