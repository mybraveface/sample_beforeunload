// 変更フラグ
var isChange = false;

/**
 * ロード時処理
 */
$(window).on("load", () => {
    showState();
});

/**
 * 変更ボタンイベント処理
 */
$(document).on("click", "#changeState", () => {
    // 変更なし状態であれば変更ありにしてbeforeunloadイベント登録
    if (!isChange) {
        isChange = true;
        showState();

        // beforeunloadイベント登録
        $(window).on("beforeunload", beforeUnloadListener);
    }
});

/**
 * 保存ボタンイベント処理
 */
$(document).on("click", "#save", () => {
    // 変更あり状態であれば変更なしにしてbeforeunloadイベント解除
    if (isChange) {
        isChange = false;
        showState();

        // beforeunloadイベント解除
        $(window).off("beforeunload");
    }
});

/**
 * 変更状態表示切り替え
 */
var showState = () => {
    $("#state").html(isChange ? "変更あり" : "変更なし");
};

/**
 * beforeunloadイベント処理
 */
var beforeUnloadListener = (e) => {
    e.preventDefault();
    return e.returnValue = '';
};
