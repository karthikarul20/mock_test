/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).on("pagebeforeshow", "#test", onPageShowTest);

onPageShowTest.currentQuestion = 0;
onPageShowTest.questions = {
    maths: [
        {
            desc: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
            1: "98",
            2: "100",
            3: "200",
            4: "300",
            answer: 3,
            userAnswer: 0
        },
        {
            desc: "The least perfect square, which is divisible by each of 21, 36 and 66 is:",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            answer: 3,
            userAnswer: 0
        },
        {
            desc: "If A = x% of y and B = y% of x, then which of the following is true?",
            1: "a",
            2: "s",
            3: "d",
            4: "f",
            answer: 3,
            userAnswer: 0
        },
        {
            desc: "If A = x% of y and B = y% of x, then which of the following is true?",
            1: "a",
            2: "s",
            3: "d",
            4: "f",
            answer: 3,
            userAnswer: 0
        },
        {
            desc: "If A = x% of y and B = y% of x, then which of the following is true?",
            1: "a",
            2: "s",
            3: "d",
            4: "f",
            answer: 3,
            userAnswer: 0
        },
        {
            desc: "If A = x% of y and B = y% of x, then which of the following is true?",
            1: "a",
            2: "s",
            3: "d",
            4: "f",
            answer: 3,
            userAnswer: 0
        },
        {
            desc: "If A = x% of y and B = y% of x, then which of the following is true?",
            1: "a",
            2: "s",
            3: "d",
            4: "f",
            answer: 3,
            userAnswer: 0
        }],
    chemistry: "",
    physics: ""};
function onPageShowTest() {
    $("#outerDiv").css("height", $(window).height() + "px");
    setCurrentQuestion();

}



function changeQuestion(flag)
{    
    if(flag==="next")
    {
        onPageShowTest.currentQuestion++;
    }
    else if(flag==="prev")
    {
        onPageShowTest.currentQuestion--;
    }
    setCurrentQuestion();
}

function setCurrentQuestion()
{
    
    $(".prevBtn>img").show();
    $(".nextBtn>img").show();
    if((onPageShowTest.currentQuestion+1)===1)
    {
        $(".prevBtn>img").hide();
    }
    else if((onPageShowTest.currentQuestion+1)===onPageShowTest.questions['maths'].length)
    {
        $(".nextBtn>img").hide();
    }
    
    $("#questionDesc").html(onPageShowTest.questions['maths'][onPageShowTest.currentQuestion]['desc']);
    $("#questionNo").html("&nbsp;"+(onPageShowTest.currentQuestion+1)+".");
    $("#optionValue1").html(onPageShowTest.questions['maths'][onPageShowTest.currentQuestion]['1']);
    $("#optionValue2").html(onPageShowTest.questions['maths'][onPageShowTest.currentQuestion]['2']);
    $("#optionValue3").html(onPageShowTest.questions['maths'][onPageShowTest.currentQuestion]['3']);
    $("#optionValue4").html(onPageShowTest.questions['maths'][onPageShowTest.currentQuestion]['4']);
    clearAllHighLights();
    selectAnswer();
}


function selectAnswer(optionNumber)
{
    
    clearAllHighLights();
    if(optionNumber)
        onPageShowTest.questions['maths'][onPageShowTest.currentQuestion]['userAnswer']=optionNumber;
    
    
    $("#optionNumber"+onPageShowTest.questions['maths'][onPageShowTest.currentQuestion]['userAnswer']).addClass("selected");
    $("#optionValue"+onPageShowTest.questions['maths'][onPageShowTest.currentQuestion]['userAnswer']).addClass("selected");
}


function clearAllHighLights()
{
   $("#answers>table>tbody>tr>td").removeClass("selected");
}