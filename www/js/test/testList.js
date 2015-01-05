
$(document).on("pagebeforeshow", "#testList", onPageShowTestList);

function onPageShowTestList() {
    $("#testListOuterDiv").css("height", $(window).height() + "px");
    
    $("#testListImage>img").attr("src","../img/"+loadTests.currentSubject+".png");
    $("#testListTitle").html(loadTests.currentSubject);

}