
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
   


})
