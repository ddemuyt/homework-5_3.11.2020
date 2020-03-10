$("#currentDay").text(moment().format("dddd" + ", " + "MMM Do"));

var realHour = moment().hour();

//Sets classes based on the hour of the day 
$(".col-sm-8").each(function(){
    var int = parseInt($(this).attr("id"));
    console.log(int);

    if (int < realHour){
        $(this).attr("class", "col-sm-8 past");
    }
    else if (int > realHour){
        $(this).attr("class", "col-sm-8 future");
    }
    else if (int === realHour){
        $(this).attr("class", "col-sm-8 present");
    }
});

//Save input as localstorage
for (var i = 0; i < 10; i++){
$("input").each(function(){
    $("button").click(function(){
        $("#input11").attr("value", "A");
    });

})};

//Function to clear planner
function clearDivs(){
    window.localStorage.clear();
    $("input").attr("value", "");   
};

//Will clear planner at the start of a new day
if (realHour === 24){
    clearDivs();
}