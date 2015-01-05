

$(document).on("pagebeforeshow", "#result", function () {
    $("#resultsOuterDiv").css("height", $(window).height() + "px");
    var html ='<div style="height:13%;text-align: center;">';
    html    +='     <div style="padding-top: 4%;font-size: 30pt;color: grey;font-weight: bold;">Result</div>';
    html    +='     <div style="font-size: 20pt;color: grey;text-transform: lowercase;" id="rightWrongText"></div>';
    html    +='</div>';
    var rightCount=0;                 
    var wrongCount=0;                 
    for(var i=0;i<onPageShowTest.questions['maths'].length; i++)
    {
        if(onPageShowTest.questions['maths'][i]['answer']===onPageShowTest.questions['maths'][i]['userAnswer'])
        {
            rightCount++;
            html +='<div class="resultBox resultGreenBorder">';
            html +='    <div class="resultGap">&nbsp;</div>';
            html +='    <div class="right">'+(i+1)+'</div>';
            html +='    <div><img src="../img/right.png"/></div>';
            html +='</div>';
        }
        else
        {
            wrongCount++;
            html +='<div class="resultBox resultRedBorder">';
            html +='    <div class="resultGap">&nbsp;</div>';
            html +='    <div class="wrong">'+(i+1)+'</div>';
            html +='    <div><img src="../img/wrong.png"/></div>';
            html +='</div>';
        }
    }
    
    $("#resultsDiv").html(html);
    $("#rightWrongText").html(rightCount+" questions right out of "+(rightCount+wrongCount)+" questions");
    
});


