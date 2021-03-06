
var currentDay = new Date($.now());
$("#currentDay").html(currentDay);
var dayContent = JSON.parse(localStorage.getItem("input"));
if(dayContent === null){
    dayContent = ["","","","","","","","","","","",""];
}
for(i = 9; i < 22; i++){
    $("#"+i.toString()).html(dayContent[i-9])
    if(i === currentDay.getHours()){
        $("#"+i.toString()).attr("class","form-control present");
    }
    if(i < currentDay.getHours()){
        $("#"+i.toString()).attr("class","form-control past");
    }
    if(i > currentDay.getHours()){
        $("#"+i.toString()).attr("class","form-control future");
    }
}
$(".saveBtn").on("click", function(event){
    var input = $("#" + event.target.value).val();
    dayContent.splice((event.target.value-9), 1, input)
    localStorage.setItem("input", JSON.stringify(dayContent)) 
})