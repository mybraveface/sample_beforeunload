var isChange = false;

$(window).on("load", () => {
    showState();
});

$(document).on("click", "#changeState", () => {
    isChange = true;
    showState();
});

$(document).on("click", "#save", () => {
    isChange = false;
    showState();
});

$(window).on("beforeunload", (e) => {
    if (isChange) {
        e.returnValue = "一時保存していないデータが存在します。本当に閉じますか？";
    }
});

var showState = () => {
    $("#state").html(isChange ? "変更あり" : "変更なし");
}