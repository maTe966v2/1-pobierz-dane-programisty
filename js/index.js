$(function () {
    $(".get-data").click(function () {
        $.get(
            "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            function (data) {
                let dataObject = JSON.parse(data);
                $(".get-data").after(
                    `<div id='dane-programisty'>
                    <p>Imię: ${dataObject.imie}</p>
                    <p>Nazwisko: ${dataObject.nazwisko}</p>
                    <p>Zawód: ${dataObject.zawod}</p>
                    <p>Firma: ${dataObject.firma}</p>
                    </div>`
                );
            }
        );
    });
});
