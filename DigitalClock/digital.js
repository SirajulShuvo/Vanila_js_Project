// add setInterval
setInterval(() => {
    // select element
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let secand = document.getElementById('secand');
    let amPm = document.getElementById('period')

    let getTime = new Date();
    let h = getTime.getHours();
    let m = getTime.getMinutes();
    let s = getTime.getSeconds();

    // provide ampm rule's
    let period = (h > 12) ? 'PM': 'AM'
    amPm.innerHTML = period;

    // digital hour to local hour
    h = (h >= 12) ? (h-12) : h;

    // provide 0 front of h,m,s if h,m,s lessthan 10z
    h = (h < 10) ? ('0' + h) : h;
    m = (m < 10) ? ('0' + m) : m;
    s = (s < 10) ? ('0' + s) : s;

    // add two html element
    hour.innerHTML = h;
    minute.innerHTML = m;
    secand .innerHTML = s;

},1000)
