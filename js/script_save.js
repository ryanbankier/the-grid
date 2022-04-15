$(document).ready(function() {

    //calls the saveArt object in local storage and places it on the page using jquery
    let saveArt =[];
    saveArt = JSON.parse(localStorage.getItem("saveArt"));
    sIndex = 0;
    saveArt.forEach(function(obj) {
        htmlAdd = obj.article;
        dateAdd = "<p class='comm-1-date'>"+obj.date+"</p>";
        $(".sLater").after($("<div>").attr({class:"save"+sIndex.toString()}).addClass("contianer-fluid"));
        $(".save"+sIndex.toString()).after().append(dateAdd,htmlAdd);
        sIndex += 1;   
    });

    //toggles the visiblity of saved articles
    $(".artIcons").remove();
    $(".heading-1").siblings().hide();
    $(".heading-1").click(function(){
        $(this).siblings().toggle();
    });

    $(".heading-2").siblings().hide();
    $(".heading-2").click(function(){
        $(this).siblings().toggle();
    })

    $(".heading-3").siblings().hide();
    $(".heading-3").click(function(){
        $(this).siblings().toggle();
    })

    $(".heading-4").siblings().hide();
    $(".heading-4").click(function(){
        $(this).siblings().toggle();
    })



});