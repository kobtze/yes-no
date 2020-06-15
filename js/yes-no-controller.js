'use strict';


function onGetAns() {
    const elQuest = document.querySelector('.question')
    if (elQuest.value.length >= 3 && elQuest.value.includes('?')) {
        document.querySelector('.loading').hidden = false;
        const elAns = document.querySelector('.ans')
        elAns.hidden = true;

        getAns(renderAns);
    }
}

function onImgLoaded() {
    document.querySelector('.loading').hidden = true;
    const elAns = document.querySelector('.ans')
    elAns.hidden = false;
}

function renderAns(ans) {
    const elAns = document.querySelector('.ans')
    elAns.querySelector('h2').innerText = ans.answer + '!';
    elAns.querySelector('img').src = ans.image;
}
