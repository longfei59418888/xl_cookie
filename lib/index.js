export function get(name) {
    let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return JSON.parse(unescape(arr[2]));
    return null;
}

export function set(name, value, timeout = 60 * 60 * 24) {
    let date = new Date();
    date.setTime(date.getTime() + timeout * 1000)
    document.cookie = name + '=' + JSON.stringify(value) + ';expires=' + date.toGMTString()
}

export function del(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = get(name);
    if (cval != null)
        document.cookie = name + "=" + JSON.stringify(cval) + ";expires=" + exp.toGMTString();
}

export function clear() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys) {
        for(var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}
