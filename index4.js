const quiz = [
  {
    question:"ゲーム市場、最も売れたゲーム機は？",
    answers:[
      "スーファミ",
      "プレステ２",
      "スイッチ",
      "ニンテンドーDS"
    ],
    correct:"ニンテンドーDS"
  },{
    question:"糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    answers:[
      "MOTHER2",
      "スーパーマリオブラザーズ３",
      "スーパードンキーコング",
      "星のカービィ"
    ],
    correct:"MOTHER2"
  },{
    question:"スマートフォンでXPERIAシリーズを販売しているメーカーは？",
    answers:[
      "SONY",
      "APPLE",
      "TOSHIBA",
      "GOOGLE"
    ],
    correct:"SONY"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//記述量を減らす為に代入、$を頭につけるとHTMLオブジェクトが入っている
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
//定数の文字列をHTMLに反映クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  }else{
    window.alert("不正解！");
  }

quizIndex++;

if(quizIndex < quizLength){
  setupQuiz();
}else{
  window.alert("終了！！あなたの正解数は"+score +"/"+quizLength+"です！");
}
};

//ボタンクリックで正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click",(e) => {
    clickHandler(e);
  });
  handlerIndex++;
}