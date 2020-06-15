
function getAns(onSuccess) {
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

    httpRequest.open("GET", "https://yesno.wtf/api", true);
    httpRequest.send();   
}