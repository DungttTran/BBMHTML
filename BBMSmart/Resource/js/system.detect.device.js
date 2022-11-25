var isMobileDevice = function () {
    let agent = navigator.userAgent || navigator.vendor || window.opera;
    return /Mobi|Android|Tablet|iPad|iPhone/i.test(agent);
}