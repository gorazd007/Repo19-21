let shift = false;
let capsLock = false;

let text = [];

const keys = document.getElementsByClassName("key");

const keyPressed = e => {
    console.log(e);
}

const setKeyCss = (id, css) => {
    keys.namedItem(id).sty
}

window.oneclck = e => {
    if (e.target.id == "key-SHIFT") {
        shift = !shift;
    }
}