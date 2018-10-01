"use strict";
$(function(){


    $("#myCalendar-1").ionCalendar({
        lang: "uk",                     // язык календаря
        sundayFirst: false,             // первый день недели
        years: "80",                    // диапазон лет
        format: "DD.MM.YYYY",           // формат возвращаемой даты
        onClick: function(date){        // клик по дням вернет сюда дату
            console.log(date);
        }
    });

    let texarea = $("textarea");

    texarea.keydown(function(e){

        if(e.key === "Enter"){
            e.preventDefault();

          let time =  $("#chooseHour option:selected").text();
          let note = $("textarea").val();
          let day = "29.09.2018";

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
   


})
