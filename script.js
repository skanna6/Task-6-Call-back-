let t = 10;

const s = document.getElementById('timer');

// setTimeout(() => {
//     setInterval(() => {
//         timer();
//     }, 1000);
// }, 2000);

// const timer = function () {
//     if (t == 0) {
//         s.innerHTML = "'>Happy Developers Day<'"
//         document.body.style.fontSize = '50px';
//         document.body.style.color = 'blue';
//         document.body.style.background = 'white';
//     }
//     else {
//         s.innerHTML = t;
//         t--;
//     }
// };
setTimeout(() => {
    s.innerHTML = t;
    t--;
    setTimeout(() => {
        s.innerHTML = t;
        t--;
        document.body.style.background = 'black';
        setTimeout(() => {
            s.innerHTML = t;
            t--;
            document.body.style.background = 'green';
            setTimeout(() => {
                s.innerHTML = t;
                t--;
                document.body.style.background = 'yellow';
                document.body.style.color = 'black';
                setTimeout(() => {
                    s.innerHTML = t;
                    t--;
                    document.body.style.background = 'red';
                    document.body.style.color = 'white';
                    setTimeout(() => {
                        s.innerHTML = t;
                        t--;
                        document.body.style.background = 'skyblue';
                        document.body.style.color = 'white';
                        setTimeout(() => {
                            s.innerHTML = t;
                            t--;
                            document.body.style.background = 'brown';
                            document.body.style.color = 'white';
                            setTimeout(() => {
                                s.innerHTML = t;
                                t--;
                                document.body.style.background = 'white';
                                document.body.style.color = 'black';
                                setTimeout(() => {
                                    s.innerHTML = t;
                                    t--;
                                    document.body.style.background = 'orange';
                                    setTimeout(() => {
                                        s.innerHTML = t;
                                        t--;
                                        document.body.style.background = 'blueviolet';
                                        setTimeout(() => {
                                            s.innerHTML = ">Happy Developers Day<";
                                            document.body.style.fontSize = '60px';
                                            document.body.style.background = 'white';
                                            document.body.style.color = 'blue';
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000);