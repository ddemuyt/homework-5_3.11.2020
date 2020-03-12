$("#currentDay").text(moment().format("dddd" + ", " + "MMM Do"));

var realHour = 11
moment().hour();


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
// for (var i = 0; i < 10; i++){
$("input").each(function(){
    $("#btn8").click(function(){
        localStorage.setItem("8", $("#input8").val());
    });

    $("#btn9").click(function(){
        localStorage.setItem("9", $("#input9").val());
    });

    $("#btn10").click(function(){
        localStorage.setItem("10", $("#input10").val());
    });

    $("#btn11").click(function(){
        localStorage.setItem("11", $("#input11").val());
    });

    $("#btn12").click(function(){
        localStorage.setItem("12", $("#input12").val());
    });

    $("#btn13").click(function(){
        localStorage.setItem("13", $("#input13").val());
    });

    $("#btn14").click(function(){
        localStorage.setItem("14", $("#input14").val());
    });

    $("#btn15").click(function(){
        localStorage.setItem("15", $("#input15").val());
    });

    $("#btn16").click(function(){
        localStorage.setItem("16", $("#input16").val());
    });

    $("#btn17").click(function(){
        localStorage.setItem("17", $("#input17").val());
    });

});

//if getitem is null, set text area to blank
//else getitem ("#") into $(textarea id . val)

if (localStorage.getItem("8") !== null){
     $("#input8").attr("value", localStorage.getItem("8"));
} else {
    $("#input8").attr("value", "");
}

if (localStorage.getItem("9") !== null){
    $("#input9").attr("value", localStorage.getItem("9"));
} else {
    $("#input9").attr("value", "");
}

if (localStorage.getItem("10") !== null){
    $("#input10").attr("value", localStorage.getItem("10"));
} else {
    $("#input10").attr("value", "");
}

if (localStorage.getItem("11") !== null){
    $("#input11").attr("value", localStorage.getItem("11"));
} else {
    $("#input11").attr("value", "");
}

if (localStorage.getItem("12") !== null){
    $("#input12").attr("value", localStorage.getItem("12"));
} else {
    $("#input12").attr("value", "");
}

if (localStorage.getItem("13") !== null){
    $("#input13").attr("value", localStorage.getItem("13"));
} else {
    $("#input13").attr("value", "");
}

if (localStorage.getItem("14") !== null){
    $("#input14").attr("value", localStorage.getItem("14"));
} else {
    $("#input14").attr("value", "");
}

if (localStorage.getItem("15") !== null){
    $("#input15").attr("value", localStorage.getItem("15"));
} else {
    $("#input15").attr("value", "");
}

if (localStorage.getItem("16") !== null){
    $("#input16").attr("value", localStorage.getItem("16"));
} else {
    $("#input16").attr("value", "");
}

if (localStorage.getItem("17") !== null){
    $("#input17").attr("value", localStorage.getItem("17"));
} else {
    $("#input17").attr("value", "");
}

//Function to clear planner
function clearDivs(){
    localStorage.clear();
    $("input").attr("value", "");   
};

//Will clear planner at the start of a new day
if (realHour === 24){
    clearDivs();
};

