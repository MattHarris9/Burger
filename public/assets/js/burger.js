$(function () {
    $(".eaten-burger").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");


        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/burgers" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function () {
            console.log("changed devour to", newDevour);

            location.reload();
        }
        );
    });

    $(".form-control").on("submit", function (event) {

        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: 0
        };

        $.ajax(/api/burgers, {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("created a new burger"):

            location.reload();
        });
    });

    $(".delete-burger").("click", function (){
        var id= $(this).data("id");

        $.ajax("/burgers" + id, {
            type: "DELETE",
        }).then(function () {
            console.log("deleted burger", id);

            location.reload();
        });
    });

}):




