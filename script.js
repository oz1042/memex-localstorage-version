// Local Storageからメモを取得（なければ空配列）
let notes = JSON.parse(localStorage.getItem("notes")) || [];
const memoInput = document.getElementById("memoInput");
const notesContainer = document.getElementById("notesContainer");
const addBtn = document.getElementById("addBtn");
const deleteBtn = document.getElementById("deleteBtn");

// メモ一覧を表示する関数
function renderNotes() {
    notesContainer.innerHTML = "";
    notes.forEach((note, index) => {
        const p = document.createElement("p");
        p.textContent = note;
        notesContainer.appendChild(p);
    });
}

// 初期表示
renderNotes();

// 追加ボタンの挙動：textareaの内容をnotes配列に追加し、Local Storageにも保存
addBtn.addEventListener("click", () => {
    const text = memoInput.value.trim();
    if (text) {
        notes.push(text);
        localStorage.setItem("notes", JSON.stringify(notes));
        console.log(JSON.stringify(notes, null, 2)); //整形されたJSONを出力。
        memoInput.value = ""; // 入力欄クリア
        renderNotes(); // 再描画
    }
});

// 削除ボタンの挙動：ここでは最後に追加したメモを削除する例
deleteBtn.addEventListener("click", () => {
    if (notes.length > 0) {
        notes.pop(); // 最後の要素を削除
        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
    }
});
