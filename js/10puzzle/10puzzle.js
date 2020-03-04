// display
function tenPuzzle() {
  // inputから４桁の数字（文字列）を受け取りnumに代入
  let num = document.getElementById('num').value;
  // 4桁の数字を数値で配列化して[a,b,c,d]に代入
  const [a, b, c, d] = [...num].map(nm => Number(nm))
  // a,b,c,dに格納された数字の間の演算子をfirst,second),thirdの頭文字をとってf,s,tと定めて演算子をそれぞれ代入
  let f = ["+", "-", "*", "/"]
  let s = ["+", "-", "*", "/"]
  let t = ["+", "-", "*", "/"]
  let sumArray = [];

  if (document.getElementById('brackets').checked) {
    
  } else {
    // すべての計算パターンを求める
    for (l = 0; l < 4; l++) {
      for (m = 0; m < 4; m++) {
        for (n = 0; n < 4; n++) {
          let abc = a + f[l] + b + s[m] + c + t[n] + d
          let sum = eval(abc)
          if (sum === 10) {
            sumArray.push(abc)
          }
        }
      }
    }
  }
  // 答え
  sumArray.length === 0 ? console.log('10になる式はありませんでした') : console.log(sumArray);
  // sumArray.length === 0 ? alert('10になる式はありませんでした') : alert(sumArray);
}



// a + b + c + d
// a + b + c - d
// a + b + c * d
// a + b + c / d
// a + b - c + d
// a + b - c - d
// a + b - c * d
// a + b - c / d
// a + b * c + d
// a + b * c - d
// a + b * c * d
// a + b * c / d
// a + b / c + d
// a + b / c - d
// a + b / c * d
// a + b / c / d

// a - b + c + d
// a - b + c - d
// a - b + c * d
// a - b + c / d
// a - b - c + d
// a - b - c - d
// a - b - c * d
// a - b - c / d
// a - b * c + d
// a - b * c - d
// a - b * c * d
// a - b * c / d
// a - b / c + d
// a - b / c - d
// a - b / c * d
// a - b / c / d

// a * b + c + d
// a * b + c - d
// a * b + c * d
// a * b + c / d
// a * b - c + d
// a * b - c - d
// a * b - c * d
// a * b - c / d
// a * b * c + d
// a * b * c - d
// a * b * c * d
// a * b * c / d
// a * b / c + d
// a * b / c - d
// a * b / c * d
// a * b / c / d

// a / b + c + d
// a / b + c - d
// a / b + c * d
// a / b + c / d
// a / b - c + d
// a / b - c - d
// a / b - c * d
// a / b - c / d
// a / b * c + d
// a / b * c - d
// a / b * c * d
// a / b * c / d
// a / b / c + d
// a / b / c - d
// a / b / c * d
// a / b / c / d
