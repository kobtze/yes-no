'use strict';

var gUsers = null;

function getUserList(onSuccess) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange =  () => {
        // console.log('READINESS CHANGED:', httpRequest.readyState);
        if (httpRequest.readyState === XMLHttpRequest.DONE &&
             httpRequest.status === 200) {
            const ans = JSON.parse(httpRequest.responseText)
            onSuccess(ans);
            // console.log('GOT:', httpRequest.responseText);
            // console.log('GOT:', res);
            // document.body.innerHTML = httpRequest.responseText;
        }
    }

    httpRequest.open("GET", "http://www.filltext.com/?rows=24&firstName={firstName}&lastName={lastName}&country={country}&phone={phone|format}&email={email}&city={city}&pretty=true", true);
    httpRequest.send();   
}

// "http://www.filltext.com/?rows=10&firstName={firstName}&lastName={lastName}&country={country}&phone={phone|format}&email={email}&ip={ip}&pretty=true"