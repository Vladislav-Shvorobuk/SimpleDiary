"use strict";
$(function(){
    let day;

    $("#myCalendar-1").ionCalendar({
        lang: "uk",                     // язык календаря
        sundayFirst: false,             // первый день недели
        years: "80",                    // диапазон лет
        format: "DD.MM.YYYY",           // формат возвращаемой даты
        onReady: function(date){
            day = date;
            let currentTime = moment(date, "DD.MM.YYYY", "uk");
            $(".day").text(currentTime.format("dddd"));
            $(".date").text(currentTime.date());
            $(".month").text(currentTime.format("MMMM"));
            $(".full_date").text(date);
            console.log(date);
        }

    });


    let texarea = $("textarea");

    texarea.keydown(function(e){

        if(e.key === "Enter"){
            e.preventDefault();

          let time =  $("#chooseHour option:selected").text();
          let note = $("textarea").val();

          $.ajax({
              url: "/note",
              type: "POST",
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              data: JSON.stringify({day: day, time: time, note: note}),
              success: function (data) {
                  console.log(data.status + " Thera will be true or false");
              }

          })
        }

    })



});
