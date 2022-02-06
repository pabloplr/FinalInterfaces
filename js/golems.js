window.addEventListener('DOMContentLoaded', (event) => {

    $("#btn_flip_to_front").click(() => {
        console.log("cambiando golem");
        if ($("#btn_flip_to_front").innerHtml === 'ver estadisticas') {
            $("#btn_flip_to_front").html('ver golem');
            $("#card").flip(true);
        } else {
            $("#card").flip(false);
            $("#btn_flip_to_front").html('ver estadisticas');
        }
    });
});