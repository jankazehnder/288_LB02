$(document).ready(function(){

  /* Load JSON-encoded data for the articles */
    $.getJSON('info.json', function(respons){
        // console.log(respons)
        $.each(respons, function(i, info){

            /* assembles the html structure with the JSON strings (with the class all-info) */
            $('.all-info').append(`

                  <h5>${info.title}</h5>
                  <p">${info.author}</p>
                  <p">${info.pharagraph1}</p>
                  <p">${info.pharagraph2}</p>
                  <p">${info.pharagraph3}</p>
                  <p"><small>${info.date}</small></p>

            `);

            console.log(info.date);

            })
        })
});
