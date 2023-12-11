function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gRHpGxt42L":
        Script1();
        break;
      case "6enkfDSPxRR":
        Script2();
        break;
      case "6nfYNnKqKtF":
        Script3();
        break;
      case "5jUwHT7VGXG":
        Script4();
        break;
      case "6X4h0dWwPo3":
        Script5();
        break;
      case "5pWCGLiwTsf":
        Script6();
        break;
      case "5WvSlSnNwLZ":
        Script7();
        break;
      case "6kfvaD0qcat":
        Script8();
        break;
      case "5sMOaHxiAPd":
        Script9();
        break;
      case "5cExg6bOwXG":
        Script10();
        break;
      case "6rFT47GrWLe":
        Script11();
        break;
      case "5ogXYR2UlvH":
        Script12();
        break;
  }
}

function Script1()
{
  /*ORANGE Script*/

var player = GetPlayer();
let numberofQuestion_orange = player.GetVar("numberofQuestion_orange"); 

let yesNo1 = player.GetVar("Yes_No_orange_1"); 
let yesNo2 = player.GetVar("Yes_No_orange_2"); 
let yesNo3 = player.GetVar("Yes_No_orange_3"); 
let yesNo4 = player.GetVar("Yes_No_orange_4"); 
let yesNo5 = player.GetVar("Yes_No_orange_5"); 
let yesNo6 = player.GetVar("Yes_No_orange_6"); 
let yesNo7 = player.GetVar("Yes_No_orange_7");
let yesNo8 = player.GetVar("Yes_No_orange_8");
let yesNo9 = player.GetVar("Yes_No_orange_9");
let yesNo10 = player.GetVar("Yes_No_orange_10");
let yesNo11 = player.GetVar("Yes_No_orange_11");
let yesNo12 = player.GetVar("Yes_No_orange_12");
let yesNo13 = player.GetVar("Yes_No_orange_13");
let yesNo14 = player.GetVar("Yes_No_orange_14");


let answers = []

if(yesNo1){
 answers.push(yesNo1)
}
if(yesNo2){
 answers.push(yesNo2)
}
if(yesNo3){
 answers.push(yesNo3)
}
if(yesNo4){
 answers.push(yesNo4)
}
if(yesNo5){
 answers.push(yesNo5)
}
if(yesNo6){
 answers.push(yesNo6)
}
if(yesNo7){
 answers.push(yesNo7)
}
if(yesNo8){
 answers.push(yesNo8)
}
if(yesNo9){
 answers.push(yesNo9)
}
if(yesNo10){
 answers.push(yesNo10)
}
if(yesNo11){
 answers.push(yesNo11)
}
if(yesNo12){
 answers.push(yesNo12)
}
if(yesNo13){
 answers.push(yesNo13)
}
if(yesNo14){
 answers.push(yesNo14)
}



let resultsOrange = Math.ceil((answers.length / numberofQuestion_orange) * 100)
let results_answers = player.SetVar("results_answer_orange",  resultsOrange);  



/*Pink script*/
let numberofQuestion_pink = player.GetVar("numberofQuestion_pink");

let yesNo15 = player.GetVar("Yes_No_pink_1"); 
let yesNo16 = player.GetVar("Yes_No_pink_2"); 
let yesNo17 = player.GetVar("Yes_No_pink_3"); 
let yesNo18 = player.GetVar("Yes_No_pink_4"); 
let yesNo19 = player.GetVar("Yes_No_pink_5"); 
let yesNo20 = player.GetVar("Yes_No_pink_6"); 

let answers1 = []

if(yesNo15){
 answers1.push(yesNo15)
}
if(yesNo16){
 answers1.push(yesNo16)
}
if(yesNo17){
 answers1.push(yesNo17)
}
if(yesNo18){
 answers1.push(yesNo18)
}
if(yesNo19){
 answers1.push(yesNo19)
}
if(yesNo20){
 answers1.push(yesNo20)
}


let resultsPink = Math.ceil((answers1.length / numberofQuestion_pink) * 100)
let results_answers1 = player.SetVar("results_answer_pink", resultsPink); 


/*Blue script*/
let numberofQuestion_blue = player.GetVar("numberofQuestion_blue"); 

let yesNo21 = player.GetVar("Yes_No_blue_1"); 
let yesNo22 = player.GetVar("Yes_No_blue_2"); 
let yesNo23 = player.GetVar("Yes_No_blue_3"); 
let yesNo24 = player.GetVar("Yes_No_blue_4"); 
let yesNo25 = player.GetVar("Yes_No_blue_5"); 
let yesNo26 = player.GetVar("Yes_No_blue_6"); 
let yesNo27 = player.GetVar("Yes_No_blue_7"); 
let yesNo28 = player.GetVar("Yes_No_blue_8"); 
let yesNo29 = player.GetVar("Yes_No_blue_9"); 
let yesNo30 = player.GetVar("Yes_No_blue_10"); 
 

let answers2 = []

if(yesNo21){
 answers2.push(yesNo21)
}
if(yesNo22){
 answers2.push(yesNo22)
}
if(yesNo23){
 answers2.push(yesNo23)
}
if(yesNo24){
 answers2.push(yesNo24)
}
if(yesNo25){
 answers2.push(yesNo25)
}
if(yesNo26){
 answers2.push(yesNo26)
}
if(yesNo27){
 answers2.push(yesNo27)
}
if(yesNo28){
 answers2.push(yesNo28)
}
if(yesNo29){
 answers2.push(yesNo29)
}
if(yesNo30){
 answers2.push(yesNo30)
}


let resultsBlue = Math.ceil((answers2.length / numberofQuestion_blue) * 100)
let results_answers2 = player.SetVar("results_answer_blue", resultsBlue);  




}

function Script2()
{
  var els = document.getElementsByTagName('input');

for (var i=0; i < els.length; i++) {
els[i].setAttribute("autocomplete", "off");
}
}

function Script3()
{
  //JavaScript for date
var player = GetPlayer();

//Get date
let d = new Date()
let day = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

//Set variable date
let date = ` ${month}/${day}/${year}`

//Set variable date in SL to have that value
player.SetVar("date", date);  

  
}

function Script4()
{
  window.localStorage.clear();
}

function Script5()
{
  localStorage.clear();
}

function Script6()
{
  /*ORANGE Script*/

var player = GetPlayer();
let numberofQuestion_orange = player.GetVar("numberofQuestion_orange"); 

let yesNo1 = player.GetVar("Yes_No_orange_1"); 
let yesNo2 = player.GetVar("Yes_No_orange_2"); 
let yesNo3 = player.GetVar("Yes_No_orange_3"); 
let yesNo4 = player.GetVar("Yes_No_orange_4"); 
let yesNo5 = player.GetVar("Yes_No_orange_5"); 
let yesNo6 = player.GetVar("Yes_No_orange_6"); 
let yesNo7 = player.GetVar("Yes_No_orange_7");
let yesNo8 = player.GetVar("Yes_No_orange_8");
let yesNo9 = player.GetVar("Yes_No_orange_9");
let yesNo10 = player.GetVar("Yes_No_orange_10");
let yesNo11 = player.GetVar("Yes_No_orange_11");
let yesNo12 = player.GetVar("Yes_No_orange_12");
let yesNo13 = player.GetVar("Yes_No_orange_13");
let yesNo14 = player.GetVar("Yes_No_orange_14");


let answers = []

if(yesNo1){
 answers.push(yesNo1)
}
if(yesNo2){
 answers.push(yesNo2)
}
if(yesNo3){
 answers.push(yesNo3)
}
if(yesNo4){
 answers.push(yesNo4)
}
if(yesNo5){
 answers.push(yesNo5)
}
if(yesNo6){
 answers.push(yesNo6)
}
if(yesNo7){
 answers.push(yesNo7)
}
if(yesNo8){
 answers.push(yesNo8)
}
if(yesNo9){
 answers.push(yesNo9)
}
if(yesNo10){
 answers.push(yesNo10)
}
if(yesNo11){
 answers.push(yesNo11)
}
if(yesNo12){
 answers.push(yesNo12)
}
if(yesNo13){
 answers.push(yesNo13)
}
if(yesNo14){
 answers.push(yesNo14)
}



let resultsOrange = Math.ceil((answers.length / numberofQuestion_orange) * 100)
let results_answers = player.SetVar("results_answer_orange",  resultsOrange);  



/*Pink script*/
let numberofQuestion_pink = player.GetVar("numberofQuestion_pink");

let yesNo15 = player.GetVar("Yes_No_pink_1"); 
let yesNo16 = player.GetVar("Yes_No_pink_2"); 
let yesNo17 = player.GetVar("Yes_No_pink_3"); 
let yesNo18 = player.GetVar("Yes_No_pink_4"); 
let yesNo19 = player.GetVar("Yes_No_pink_5"); 
let yesNo20 = player.GetVar("Yes_No_pink_6"); 

let answers1 = []

if(yesNo15){
 answers1.push(yesNo15)
}
if(yesNo16){
 answers1.push(yesNo16)
}
if(yesNo17){
 answers1.push(yesNo17)
}
if(yesNo18){
 answers1.push(yesNo18)
}
if(yesNo19){
 answers1.push(yesNo19)
}
if(yesNo20){
 answers1.push(yesNo20)
}


let resultsPink = Math.ceil((answers1.length / numberofQuestion_pink) * 100)
let results_answers1 = player.SetVar("results_answer_pink", resultsPink); 


/*Blue script*/
let numberofQuestion_blue = player.GetVar("numberofQuestion_blue"); 

let yesNo21 = player.GetVar("Yes_No_blue_1"); 
let yesNo22 = player.GetVar("Yes_No_blue_2"); 
let yesNo23 = player.GetVar("Yes_No_blue_3"); 
let yesNo24 = player.GetVar("Yes_No_blue_4"); 
let yesNo25 = player.GetVar("Yes_No_blue_5"); 
let yesNo26 = player.GetVar("Yes_No_blue_6"); 
let yesNo27 = player.GetVar("Yes_No_blue_7"); 
let yesNo28 = player.GetVar("Yes_No_blue_8"); 
let yesNo29 = player.GetVar("Yes_No_blue_9"); 
let yesNo30 = player.GetVar("Yes_No_blue_10"); 
 

let answers2 = []

if(yesNo21){
 answers2.push(yesNo21)
}
if(yesNo22){
 answers2.push(yesNo22)
}
if(yesNo23){
 answers2.push(yesNo23)
}
if(yesNo24){
 answers2.push(yesNo24)
}
if(yesNo25){
 answers2.push(yesNo25)
}
if(yesNo26){
 answers2.push(yesNo26)
}
if(yesNo27){
 answers2.push(yesNo27)
}
if(yesNo28){
 answers2.push(yesNo28)
}
if(yesNo29){
 answers2.push(yesNo29)
}
if(yesNo30){
 answers2.push(yesNo30)
}


let resultsBlue = Math.ceil((answers2.length / numberofQuestion_blue) * 100)
let results_answers2 = player.SetVar("results_answer_blue", resultsBlue);  




}

function Script7()
{
  /*ORANGE Script*/

var player = GetPlayer();
let numberofQuestion_orange = player.GetVar("numberofQuestion_orange"); 

let yesNo1 = player.GetVar("Yes_No_orange_1"); 
let yesNo2 = player.GetVar("Yes_No_orange_2"); 
let yesNo3 = player.GetVar("Yes_No_orange_3"); 
let yesNo4 = player.GetVar("Yes_No_orange_4"); 
let yesNo5 = player.GetVar("Yes_No_orange_5"); 
let yesNo6 = player.GetVar("Yes_No_orange_6"); 
let yesNo7 = player.GetVar("Yes_No_orange_7");
let yesNo8 = player.GetVar("Yes_No_orange_8");
let yesNo9 = player.GetVar("Yes_No_orange_9");
let yesNo10 = player.GetVar("Yes_No_orange_10");
let yesNo11 = player.GetVar("Yes_No_orange_11");
let yesNo12 = player.GetVar("Yes_No_orange_12");
let yesNo13 = player.GetVar("Yes_No_orange_13");
let yesNo14 = player.GetVar("Yes_No_orange_14");


let answers = []

if(yesNo1){
 answers.push(yesNo1)
}
if(yesNo2){
 answers.push(yesNo2)
}
if(yesNo3){
 answers.push(yesNo3)
}
if(yesNo4){
 answers.push(yesNo4)
}
if(yesNo5){
 answers.push(yesNo5)
}
if(yesNo6){
 answers.push(yesNo6)
}
if(yesNo7){
 answers.push(yesNo7)
}
if(yesNo8){
 answers.push(yesNo8)
}
if(yesNo9){
 answers.push(yesNo9)
}
if(yesNo10){
 answers.push(yesNo10)
}
if(yesNo11){
 answers.push(yesNo11)
}
if(yesNo12){
 answers.push(yesNo12)
}
if(yesNo13){
 answers.push(yesNo13)
}
if(yesNo14){
 answers.push(yesNo14)
}



let resultsOrange = Math.ceil((answers.length / numberofQuestion_orange) * 100)
let results_answers = player.SetVar("results_answer_orange",  resultsOrange);  



/*Pink script*/
let numberofQuestion_pink = player.GetVar("numberofQuestion_pink");

let yesNo15 = player.GetVar("Yes_No_pink_1"); 
let yesNo16 = player.GetVar("Yes_No_pink_2"); 
let yesNo17 = player.GetVar("Yes_No_pink_3"); 
let yesNo18 = player.GetVar("Yes_No_pink_4"); 
let yesNo19 = player.GetVar("Yes_No_pink_5"); 
let yesNo20 = player.GetVar("Yes_No_pink_6"); 

let answers1 = []

if(yesNo15){
 answers1.push(yesNo15)
}
if(yesNo16){
 answers1.push(yesNo16)
}
if(yesNo17){
 answers1.push(yesNo17)
}
if(yesNo18){
 answers1.push(yesNo18)
}
if(yesNo19){
 answers1.push(yesNo19)
}
if(yesNo20){
 answers1.push(yesNo20)
}


let resultsPink = Math.ceil((answers1.length / numberofQuestion_pink) * 100)
let results_answers1 = player.SetVar("results_answer_pink", resultsPink); 


/*Blue script*/
let numberofQuestion_blue = player.GetVar("numberofQuestion_blue"); 

let yesNo21 = player.GetVar("Yes_No_blue_1"); 
let yesNo22 = player.GetVar("Yes_No_blue_2"); 
let yesNo23 = player.GetVar("Yes_No_blue_3"); 
let yesNo24 = player.GetVar("Yes_No_blue_4"); 
let yesNo25 = player.GetVar("Yes_No_blue_5"); 
let yesNo26 = player.GetVar("Yes_No_blue_6"); 
let yesNo27 = player.GetVar("Yes_No_blue_7"); 
let yesNo28 = player.GetVar("Yes_No_blue_8"); 
let yesNo29 = player.GetVar("Yes_No_blue_9"); 
let yesNo30 = player.GetVar("Yes_No_blue_10"); 
 

let answers2 = []

if(yesNo21){
 answers2.push(yesNo21)
}
if(yesNo22){
 answers2.push(yesNo22)
}
if(yesNo23){
 answers2.push(yesNo23)
}
if(yesNo24){
 answers2.push(yesNo24)
}
if(yesNo25){
 answers2.push(yesNo25)
}
if(yesNo26){
 answers2.push(yesNo26)
}
if(yesNo27){
 answers2.push(yesNo27)
}
if(yesNo28){
 answers2.push(yesNo28)
}
if(yesNo29){
 answers2.push(yesNo29)
}
if(yesNo30){
 answers2.push(yesNo30)
}


let resultsBlue = Math.ceil((answers2.length / numberofQuestion_blue) * 100)
let results_answers2 = player.SetVar("results_answer_blue", resultsBlue);  




}

function Script8()
{
  /*ORANGE Script*/

var player = GetPlayer();
let numberofQuestion_orange = player.GetVar("numberofQuestion_orange"); 

let yesNo1 = player.GetVar("Yes_No_orange_1"); 
let yesNo2 = player.GetVar("Yes_No_orange_2"); 
let yesNo3 = player.GetVar("Yes_No_orange_3"); 
let yesNo4 = player.GetVar("Yes_No_orange_4"); 
let yesNo5 = player.GetVar("Yes_No_orange_5"); 
let yesNo6 = player.GetVar("Yes_No_orange_6"); 
let yesNo7 = player.GetVar("Yes_No_orange_7");
let yesNo8 = player.GetVar("Yes_No_orange_8");
let yesNo9 = player.GetVar("Yes_No_orange_9");
let yesNo10 = player.GetVar("Yes_No_orange_10");
let yesNo11 = player.GetVar("Yes_No_orange_11");
let yesNo12 = player.GetVar("Yes_No_orange_12");
let yesNo13 = player.GetVar("Yes_No_orange_13");
let yesNo14 = player.GetVar("Yes_No_orange_14");


let answers = []

if(yesNo1){
 answers.push(yesNo1)
}
if(yesNo2){
 answers.push(yesNo2)
}
if(yesNo3){
 answers.push(yesNo3)
}
if(yesNo4){
 answers.push(yesNo4)
}
if(yesNo5){
 answers.push(yesNo5)
}
if(yesNo6){
 answers.push(yesNo6)
}
if(yesNo7){
 answers.push(yesNo7)
}
if(yesNo8){
 answers.push(yesNo8)
}
if(yesNo9){
 answers.push(yesNo9)
}
if(yesNo10){
 answers.push(yesNo10)
}
if(yesNo11){
 answers.push(yesNo11)
}
if(yesNo12){
 answers.push(yesNo12)
}
if(yesNo13){
 answers.push(yesNo13)
}
if(yesNo14){
 answers.push(yesNo14)
}



let resultsOrange = Math.ceil((answers.length / numberofQuestion_orange) * 100)
let results_answers = player.SetVar("results_answer_orange",  resultsOrange);  



/*Pink script*/
let numberofQuestion_pink = player.GetVar("numberofQuestion_pink");

let yesNo15 = player.GetVar("Yes_No_pink_1"); 
let yesNo16 = player.GetVar("Yes_No_pink_2"); 
let yesNo17 = player.GetVar("Yes_No_pink_3"); 
let yesNo18 = player.GetVar("Yes_No_pink_4"); 
let yesNo19 = player.GetVar("Yes_No_pink_5"); 
let yesNo20 = player.GetVar("Yes_No_pink_6"); 

let answers1 = []

if(yesNo15){
 answers1.push(yesNo15)
}
if(yesNo16){
 answers1.push(yesNo16)
}
if(yesNo17){
 answers1.push(yesNo17)
}
if(yesNo18){
 answers1.push(yesNo18)
}
if(yesNo19){
 answers1.push(yesNo19)
}
if(yesNo20){
 answers1.push(yesNo20)
}


let resultsPink = Math.ceil((answers1.length / numberofQuestion_pink) * 100)
let results_answers1 = player.SetVar("results_answer_pink", resultsPink); 


/*Blue script*/
let numberofQuestion_blue = player.GetVar("numberofQuestion_blue"); 

let yesNo21 = player.GetVar("Yes_No_blue_1"); 
let yesNo22 = player.GetVar("Yes_No_blue_2"); 
let yesNo23 = player.GetVar("Yes_No_blue_3"); 
let yesNo24 = player.GetVar("Yes_No_blue_4"); 
let yesNo25 = player.GetVar("Yes_No_blue_5"); 
let yesNo26 = player.GetVar("Yes_No_blue_6"); 
let yesNo27 = player.GetVar("Yes_No_blue_7"); 
let yesNo28 = player.GetVar("Yes_No_blue_8"); 
let yesNo29 = player.GetVar("Yes_No_blue_9"); 
let yesNo30 = player.GetVar("Yes_No_blue_10"); 
 

let answers2 = []

if(yesNo21){
 answers2.push(yesNo21)
}
if(yesNo22){
 answers2.push(yesNo22)
}
if(yesNo23){
 answers2.push(yesNo23)
}
if(yesNo24){
 answers2.push(yesNo24)
}
if(yesNo25){
 answers2.push(yesNo25)
}
if(yesNo26){
 answers2.push(yesNo26)
}
if(yesNo27){
 answers2.push(yesNo27)
}
if(yesNo28){
 answers2.push(yesNo28)
}
if(yesNo29){
 answers2.push(yesNo29)
}
if(yesNo30){
 answers2.push(yesNo30)
}


let resultsBlue = Math.ceil((answers2.length / numberofQuestion_blue) * 100)
let results_answers2 = player.SetVar("results_answer_blue", resultsBlue);  




}

function Script9()
{
  //JavaScript for date
var player = GetPlayer();

//Get date
let d = new Date()
let day = d.getDate();
let month = d.getMonth() + 1;
let year = d.getFullYear();

//Set variable date
let date = ` ${month}/${day}/${year}`

//Set variable date in SL to have that value
player.SetVar("date", date);  

  
}

function Script10()
{
  //JavaScript for calcualtions

var player = GetPlayer();
let score_1 = player.GetVar("results_answer_orange"); 
let score_2 = player.GetVar("results_answer_pink"); 
let score_3 = player.GetVar("results_answer_blue");

let stock_accuracy = player.GetVar("stock_accuracy"); 
let stock_onhold = player.GetVar("stock_onhold"); 
let conversion_rate = player.GetVar("conversion_rate"); 


if(stock_accuracy >= 99){
	stock_accuracy = 33
}else{
  stock_accuracy = 0
}

if(stock_onhold <= 7){
	stock_onhold = 33
}else{
  stock_onhold = 0
}

if(conversion_rate >= 90){
	conversion_rate = 34
}else{
  conversion_rate = 0
}
let global_score = ((score_1 + score_2 + score_3) + (stock_accuracy + stock_onhold + conversion_rate))/4
global_score = Math.round(global_score);
player.SetVar("global_score",  global_score);  
console.log(global_score)
}

function Script11()
{
  //JavaScript for questions

var player = GetPlayer();

//1. Get all questions and true/false values from SL

let yesNo1 = player.GetVar("Yes_No_orange_1"); 
let yesNo2 = player.GetVar("Yes_No_orange_2"); 
let yesNo3 = player.GetVar("Yes_No_orange_3"); 
let yesNo4 = player.GetVar("Yes_No_pink_1"); 
let yesNo5 = player.GetVar("Yes_No_orange_4"); 
let yesNo6 = player.GetVar("Yes_No_orange_5"); 
let yesNo7 = player.GetVar("Yes_No_blue_1"); 
let yesNo8 = player.GetVar("Yes_No_orange_6"); 
let yesNo9 = player.GetVar("Yes_No_pink_2"); 
let yesNo10 = player.GetVar("Yes_No_orange_7");
let yesNo11 = player.GetVar("Yes_No_blue_2"); 
let yesNo12 = player.GetVar("Yes_No_orange_8"); 
let yesNo13 = player.GetVar("Yes_No_pink_3"); 
let yesNo14 = player.GetVar("Yes_No_pink_4"); 
let yesNo15 = player.GetVar("Yes_No_blue_3"); 
let yesNo16 = player.GetVar("Yes_No_orange_9"); 
let yesNo17 = player.GetVar("Yes_No_blue_4"); 
let yesNo18 = player.GetVar("Yes_No_pink_5"); 
let yesNo19 = player.GetVar("Yes_No_pink_6"); 
let yesNo20 = player.GetVar("Yes_No_blue_5");
let yesNo21 = player.GetVar("Yes_No_orange_10"); 
let yesNo22 = player.GetVar("Yes_No_blue_6"); 
let yesNo23 = player.GetVar("Yes_No_blue_7"); 
let yesNo24 = player.GetVar("Yes_No_orange_11"); 
let yesNo25 = player.GetVar("Yes_No_orange_12"); 
let yesNo26 = player.GetVar("Yes_No_orange_13"); 
let yesNo27 = player.GetVar("Yes_No_orange_14"); 
let yesNo28 = player.GetVar("Yes_No_blue_8"); 
let yesNo29 = player.GetVar("Yes_No_blue_9"); 
let yesNo30 = player.GetVar("Yes_No_blue_10");

let Q1 = player.GetVar("question_1"); 
let Q2 = player.GetVar("question_2"); 
let Q3 = player.GetVar("question_3"); 
let Q4 = player.GetVar("question_4"); 
let Q5 = player.GetVar("question_5"); 
let Q6 = player.GetVar("question_6"); 
let Q7 = player.GetVar("question_7"); 
let Q8 = player.GetVar("question_8"); 
let Q9 = player.GetVar("question_9"); 
let Q10 = player.GetVar("question_10"); 
let Q11 = player.GetVar("question_11"); 
let Q12 = player.GetVar("question_12"); 
let Q13 = player.GetVar("question_13"); 
let Q14 = player.GetVar("question_14"); 
let Q15 = player.GetVar("question_15"); 
let Q16 = player.GetVar("question_16"); 
let Q17 = player.GetVar("question_17"); 
let Q18 = player.GetVar("question_18"); 
let Q19 = player.GetVar("question_19"); 
let Q20 = player.GetVar("question_20"); 
let Q21 = player.GetVar("question_21"); 
let Q22 = player.GetVar("question_22"); 
let Q23 = player.GetVar("question_23"); 
let Q24 = player.GetVar("question_24"); 
let Q25 = player.GetVar("question_25"); 
let Q26 = player.GetVar("question_26"); 
let Q27 = player.GetVar("question_27"); 
let Q28 = player.GetVar("question_28"); 
let Q29 = player.GetVar("question_29"); 
let Q30 = player.GetVar("question_30"); 

let optionalS1 = player.GetVar("Slider1");
let optionalS2 = player.GetVar("Slider2");
let optionalS3 = player.GetVar("Slider3");
let optionalS4 = player.GetVar("Slider4");
let optionalS5 = player.GetVar("Slider5");

let store1 = player.GetVar("store_1");
let store2 = player.GetVar("store_2");
let store3 = player.GetVar("store_3");
let store4 = player.GetVar("store_4");
let store5 = player.GetVar("store_5"); 

//2. Make a blank array for questions and answers

let questions = []
let answers = []
let stores = []
let storesanswers = []

//3. add questions to empty question and answers array
for (let j = 1; j <= 30; j++){
  questions.push(eval('Q'+ j ))	
}

for (let i = 1; i <= 30; i++){
  answers.push(eval('yesNo'+ i ));
}

for (let k = 1; k <= 5; k++){
  storesanswers.push(eval('optionalS'+ k ));
}

for (let l = 1; l <= 5; l++){
  stores.push(eval('store'+ l ));
}

//3.add num value for the function to be able to run for all values
let num = 1;
let number = 1;
let number_1 = 1;
let num1 = 1;
let num2 = 1;

//4. Set all of varibles in local storge


function setQuestions(question, index){
	localStorage.setItem(`Q${num}`, questions[index]);
	num++
}

function setAns(ans, index){
	localStorage.setItem(`A${number}`, answers[index]);
	number++
}

function setStore(store, index){
	localStorage.setItem(`store${num1}`, stores[index]);
	num1++
}

function setAnsStore(storesanswer, index){
	localStorage.setItem(`storesanswer${num2}`, storesanswers[index]);
	num2++
}

//Call functions

questions.forEach(setQuestions)
answers.forEach(setAns)
stores.forEach(setStore)
storesanswers.forEach(setAnsStore)


//5. Using the rest of varibles in local storage

let storeName = player.GetVar("TextEntry2");
let certifiedsmartops = player.GetVar("TextEntry6");
let storedirector = player.GetVar("TextEntry");
let opsmanager = player.GetVar("TextEntry1");
let retailopsmanager = player.GetVar("TextEntry3");
let ratio = player.GetVar("ratio");
let stockacurracy = player.GetVar("stock_accuracy");
let stockonhold = player.GetVar("stock_onhold");
let conversionrate = player.GetVar("conversion_rate");
let results_orange = player.GetVar("results_answer_orange"); 
let results_pink = player.GetVar("results_answer_pink"); 
let results_blue = player.GetVar("results_answer_blue");
let actionplan = player.GetVar("action_plan");
let global_score = player.GetVar("global_score"); 
let ap1 = player.GetVar("TextEntry4");
let dateofcertification = player.GetVar("TextEntry11");
let date = player.GetVar("date");

localStorage.setItem(`storeName`, storeName);
localStorage.setItem(`certifiedsmartops`, certifiedsmartops);
localStorage.setItem(`storedirector`, storedirector);
localStorage.setItem(`opsmanager`, opsmanager);
localStorage.setItem(`retailopsmanager`, retailopsmanager);
localStorage.setItem(`ratio`, ratio);
localStorage.setItem(`stockacurracy`, stockacurracy);
localStorage.setItem(`stockonhold`, stockonhold);
localStorage.setItem(`conversionrate`, conversionrate);
localStorage.setItem(`resultsOrange`, results_orange);
localStorage.setItem(`resultsPink`, results_pink);
localStorage.setItem(`resultsBlue`, results_blue);
localStorage.setItem(`actionPlan`, actionplan);
localStorage.setItem(`ap1`, ap1);
localStorage.setItem(`globalScore`, global_score);
localStorage.setItem(`date`, date);
localStorage.setItem(`dateofcertification`, dateofcertification);

//Open PDF

 
}

function Script12()
{
  /*ORANGE Script*/

var player = GetPlayer();
let numberofQuestion_orange = player.GetVar("numberofQuestion_orange"); 

let yesNo1 = player.GetVar("Yes_No_orange_1"); 
let yesNo2 = player.GetVar("Yes_No_orange_2"); 
let yesNo3 = player.GetVar("Yes_No_orange_3"); 
let yesNo4 = player.GetVar("Yes_No_orange_4"); 
let yesNo5 = player.GetVar("Yes_No_orange_5"); 
let yesNo6 = player.GetVar("Yes_No_orange_6"); 
let yesNo7 = player.GetVar("Yes_No_orange_7");
let yesNo8 = player.GetVar("Yes_No_orange_8");
let yesNo9 = player.GetVar("Yes_No_orange_9");
let yesNo10 = player.GetVar("Yes_No_orange_10");
let yesNo11 = player.GetVar("Yes_No_orange_11");
let yesNo12 = player.GetVar("Yes_No_orange_12");
let yesNo13 = player.GetVar("Yes_No_orange_13");
let yesNo14 = player.GetVar("Yes_No_orange_14");


let answers = []

if(yesNo1){
 answers.push(yesNo1)
}
if(yesNo2){
 answers.push(yesNo2)
}
if(yesNo3){
 answers.push(yesNo3)
}
if(yesNo4){
 answers.push(yesNo4)
}
if(yesNo5){
 answers.push(yesNo5)
}
if(yesNo6){
 answers.push(yesNo6)
}
if(yesNo7){
 answers.push(yesNo7)
}
if(yesNo8){
 answers.push(yesNo8)
}
if(yesNo9){
 answers.push(yesNo9)
}
if(yesNo10){
 answers.push(yesNo10)
}
if(yesNo11){
 answers.push(yesNo11)
}
if(yesNo12){
 answers.push(yesNo12)
}
if(yesNo13){
 answers.push(yesNo13)
}
if(yesNo14){
 answers.push(yesNo14)
}



let resultsOrange = Math.ceil((answers.length / numberofQuestion_orange) * 100)
let results_answers = player.SetVar("results_answer_orange",  resultsOrange);  



/*Pink script*/
let numberofQuestion_pink = player.GetVar("numberofQuestion_pink");

let yesNo15 = player.GetVar("Yes_No_pink_1"); 
let yesNo16 = player.GetVar("Yes_No_pink_2"); 
let yesNo17 = player.GetVar("Yes_No_pink_3"); 
let yesNo18 = player.GetVar("Yes_No_pink_4"); 
let yesNo19 = player.GetVar("Yes_No_pink_5"); 
let yesNo20 = player.GetVar("Yes_No_pink_6"); 

let answers1 = []

if(yesNo15){
 answers1.push(yesNo15)
}
if(yesNo16){
 answers1.push(yesNo16)
}
if(yesNo17){
 answers1.push(yesNo17)
}
if(yesNo18){
 answers1.push(yesNo18)
}
if(yesNo19){
 answers1.push(yesNo19)
}
if(yesNo20){
 answers1.push(yesNo20)
}


let resultsPink = Math.ceil((answers1.length / numberofQuestion_pink) * 100)
let results_answers1 = player.SetVar("results_answer_pink", resultsPink); 


/*Blue script*/
let numberofQuestion_blue = player.GetVar("numberofQuestion_blue"); 

let yesNo21 = player.GetVar("Yes_No_blue_1"); 
let yesNo22 = player.GetVar("Yes_No_blue_2"); 
let yesNo23 = player.GetVar("Yes_No_blue_3"); 
let yesNo24 = player.GetVar("Yes_No_blue_4"); 
let yesNo25 = player.GetVar("Yes_No_blue_5"); 
let yesNo26 = player.GetVar("Yes_No_blue_6"); 
let yesNo27 = player.GetVar("Yes_No_blue_7"); 
let yesNo28 = player.GetVar("Yes_No_blue_8"); 
let yesNo29 = player.GetVar("Yes_No_blue_9"); 
let yesNo30 = player.GetVar("Yes_No_blue_10"); 
 

let answers2 = []

if(yesNo21){
 answers2.push(yesNo21)
}
if(yesNo22){
 answers2.push(yesNo22)
}
if(yesNo23){
 answers2.push(yesNo23)
}
if(yesNo24){
 answers2.push(yesNo24)
}
if(yesNo25){
 answers2.push(yesNo25)
}
if(yesNo26){
 answers2.push(yesNo26)
}
if(yesNo27){
 answers2.push(yesNo27)
}
if(yesNo28){
 answers2.push(yesNo28)
}
if(yesNo29){
 answers2.push(yesNo29)
}
if(yesNo30){
 answers2.push(yesNo30)
}


let resultsBlue = Math.ceil((answers2.length / numberofQuestion_blue) * 100)
let results_answers2 = player.SetVar("results_answer_blue", resultsBlue);  




}

