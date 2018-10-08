function addDNDHandlers() {

    var teamimages = document.getElementsByClassName("team_row");
    var MoMDropzone = document.getElementById("MoM");
    var MoM = document.querySelectorAll("#MoM ul")[0];

    for (var i = 0; i < teamimages.length; i++) {
        teamimages[i].addEventListener("dragstart", function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData("Text", this.getAttribute("id"));
        }, false);
    }

    MoMDropzone.addEventListener("dragover", function (ev) {
        if (ev.preventDefault)
        ev.dataTransfer.dropEffect = "copy";
        return false;
    },false);

    MoMDropzone.addEventListener("drop", function (ev) {
        if (ev.stopPropagation)
        ev.stopPropagation();



        return false;
    },false);
}