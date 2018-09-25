<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="resources/css/normalize.css">
    <link rel="stylesheet" href="resources/css/ion.calendar-2.0.2/ion.calendar.css">
    <link rel="stylesheet" href="resources/css/diary.css">

    <script
            src="https://code.jquery.com/jquery-3.3.1.js"
            integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
            crossorigin="anonymous"></script>

    <script src="resources/js/ion.calendar-2.0.2/moment-with-locales.min.js"></script>
    <script src="resources/js/ion.calendar-2.0.2/ion.calendar.min.js"></script>
    <script src="resources/js/diary.js"></script>

    <title>Simple Diary</title>

</head>
<body>
<div class="container">

    <section class="left">

        <section class="left_header">

            <div class="date">5</div>
            <div class="day">П'ятниця</div>
            <div class="full_date">05.08.2018</div>
            <div class="month">Серпень</div>
            <select name="" id="chooseHour">
                <option value=""> 8.00</option>
                <option value=""> 9.00</option>
                <option value="">10.00</option>
                <option value="">11.00</option>
                <option value="">12.00</option>
                <option value="">13.00</option>
                <option value="">14.00</option>
                <option value="">15.00</option>
                <option value="">16.00</option>
                <option value="">17.00</option>
                <option value="">18.00</option>
                <option value="">19.00</option>
                <option value="">20.00</option>
            </select>
            <form action="">
                <textarea  avtofocus maxlength="80" cols="33" rows="3"></textarea>
            </form>


        </section>

        <table class="schedule">

            <tr>
                <td class="hour" rowspan="2">9.00</td>
                <td></td>
            </tr>
            <tr>
                <td class="buttom"></td>
            </tr>
            <tr>
                <td class="hour" rowspan="2">10.00</td>
                <td></td>
            </tr>
            <tr>
                <td class="buttom"></td>
            </tr>
            <tr>
                <td class="hour" rowspan="2">11.00</td>
                <td></td>
            </tr>
            <tr>
                <td class="buttom"></td>
            </tr>
            <tr>
                <td class="hour" rowspan="2">12.00</td>
                <td></td>
            </tr>
            <tr >
                <td class="buttom"></td>
            </tr>
            <tr>
                <td class="hour" rowspan="2">13.00</td>
                <td></td>
            </tr>
            <tr>
                <td class="buttom"></td>
            </tr>
            <tr>
                <td class="hour" rowspan="2">14.00</td>
                <td></td>
            </tr>
            <tr>
                <td class="buttom"></td>
            </tr>
            <tr>
                <td class="hour" rowspan="2">15.00</td>
                <td></td>
            </tr>
            <tr>
                <td class="buttom"></td>
            </tr>
            <tr>
                <td class="hour" rowspan="2">16.00</td>
                <td></td>
            </tr>
            <tr>
                <td class="buttom"></td>
            </tr>
            <tr>
                <td class="hour" rowspan="2">17.00</td>
                <td></td>
            </tr>
            <tr>
                <td class="buttom"></td>
            </tr>
            <tr>
                <td class="hour last" rowspan="2">18.00</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
            </tr>


        </table>



    </section>
    <section class="right">
        <section class="right_header">


        </section>

        <div class="myCalendar" id="myCalendar-1"></div>

    </section>




</div>

</body>
</html>
