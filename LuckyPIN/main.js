var main = (standardInput) => {
  var lengthList = standardInput.split('\n');
  var length = parseInt(lengthList[0], 10);
  var string = lengthList[1];
  var ans = 0;
  for (var index = 0; index < 1000; index++) {
    var x0 = Math.floor(index / 100);
    var x1 = Math.floor((index / 10)) % 10;
    var x2 = index % 10;

    for (var i = 0; i < length; i++) {
      if (string[i] == x0) {
        for (var j = i+ 1; j < length; j++) {
          if (string[j] == x1) {
            for (var k = j + 1; k < length; k++) {
              if (string[k] == x2) {
                ans += 1;
                break;
              }
            }
            break;
          }
        }
        break;
      }
    }
  }
  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'UTF-8'));
