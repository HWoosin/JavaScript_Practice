
function createCookie(name){
    const date = new Date();
    date.setDate(date.getDate + 1); //수명을 하루로.
    let cookie = '';
    cookie +=`${name} = true;`; //세미콜론 반드시 찍기
    cookie += 'expires=' +date.toUTCString();
    document.cookie = cookie;
}

function getCookie(name){
    const cookies = document.cookie.split(';');

    for(let c of cookies){
        if(c.search(name) !== -1){
            return true;
        }
    }
    return false;
}