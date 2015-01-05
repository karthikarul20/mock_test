

$(document).on("pageshow", "#subjects", onPageShowSubjects);

onPageShowSubjects.mode="study";
function onPageShowSubjects() {
    $("#subjectsOuterDiv").css("height", $(window).height() + "px");
    toggleMode();

}
function toggleMode(modeTemp)
{
    if(modeTemp)
        onPageShowSubjects.mode=modeTemp;
    
    if(onPageShowSubjects.mode==='study')
    {
        $("#study").css("opacity","1");
        $("#training").css("opacity","0.3");
    }
    else if(onPageShowSubjects.mode==='training')
    {
        $("#training").css("opacity","1");
        $("#study").css("opacity","0.3");
    }
    
}

loadTests.currentSubject="maths";
function loadTests(subjectTemp)
{
    if(subjectTemp)
        loadTests.currentSubject=subjectTemp;
    
    $.mobile.changePage("testList.html");
}