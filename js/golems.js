window.addEventListener('DOMContentLoaded', (event) => {

    $('.golem-col').each(function() {
        $(this).hover(function() {
            console.log("mamamio");
            $(this).animate({
                color: "green",
                backgroundColor: "rgb( 20, 20, 20 )"
            });
        });
    });
});