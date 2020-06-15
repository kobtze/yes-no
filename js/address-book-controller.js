'use strict';


function onGetUserList() {
    getUserList(renderUsers)
}

function renderUsers(users){
    const strHTMLs = users.map(user => 
        `<li>
        <div class="card-header">
        ${user.firstName} ${user.lastName}
        </div>
        <div class="card-content">
        <div class="card-image" style="background-image: url('https://api.adorable.io/avatars/78/${user.email}.png')">
        </div>
        <table>
        <tr><td class="value">${user.phone}</td></tr>
        <tr><td class="value">${user.email}</td></tr>
        <tr><td class="value">${user.city}</td></tr>
        <tr><td class="value">${user.country}</td></tr>
        </table>
        </li>`)
    document.querySelector('.user-list').innerHTML = strHTMLs.join('')
}