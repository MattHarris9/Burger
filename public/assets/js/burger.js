$(function () {
    $.ajax("/burgers", {
        type: "GET"
    }).then(function(data){
        var eatenEl = $("eaten");
        var devourEl = $("devoured");

        var burgers = data.burgers;
        var len = burgers.length;

        for (var i=0; i< len; i++) {
            var new_elem = 
            "<li>" +
            burgers[i].id +
            "<button class='change-devour' data=id'" +
            burgers[i].id +
            "'data-newDevoured'" +
            !burgers[i].devoured +
            "'>";

            if (burgers[i].devoured) {
                new_elem += "DEVOURED";
            } else {
                new_elem += "EATEN";
            }

            new_elem += "</button>";

            new_elem += "<button class 'delete-burger' data+id'" +
            burgers[i].id +
            "'>DELETE<button></li>";

            if(burgers[i].devoured) {
                devourEl.append(new_elem);
            } else {
                eatenEl.append(new_elem);
            }
        }

    });

    $(document).on("click", ".change-devour", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour")===true;

        var newDevoured = {
            devoured: newDevoured
        };

        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: JSON.stringify(newDevoured),
            dataType: 'json',
            contentType: 'application/json'
        }).then(function() {
            console.log("changed burger to" + newDevoured);
            location.reload();
        });
    });

    $(".create.form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name: $("ca")
                .val()
                .trim(),
            eaten: $("[name= eaten]: checked")
                .val()
                .trim()

        };

        $.ajax("/burgers", {
            type: "POST",
            data: JSON.stringify(newBurger),
            dataType: 'JSON',
            contentType: 'application/json'
        }).then(function(){
            console.log("created a new burger");

            location.reload();
        });
    });

    $(document).on("click", ".delete.burger", function(event) {
        var id= $(this).data("id");

        $.ajax("/burgers/" +id, {
            type: "DELTE"
        }).then(function(){
            console.log("deleted burger", id);

            location.reload();
        });
    });


});