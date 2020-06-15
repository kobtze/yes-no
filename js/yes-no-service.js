'use strict';

var ans = null;

function getAns(onSuccess) {
    
    $.get('https://yesno.wtf/api', (answer)=>{
        ans = answer;
        onSuccess(ans);
    });
}
