var isChange = false;

$(window).on("load", () => {
    showState();
});

$(document).on("click", "#changeState", () => {
    if (!isChange) {
        isChange = true;
        showState();
    
        $(window).on("beforeunload", function (e) {
            e.preventDefault();
            return "";
        });
    }
});

$(document).on("click", "#save", () => {
    if (isChange) {
        isChange = false;
        showState();
        $(window).off("beforeunload");
    }
});

var showState = () => {
    $("#state").html(isChange ? "変更あり" : "変更なし");
}