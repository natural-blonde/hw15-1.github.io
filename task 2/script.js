let string = '';
let s1 = $('span#s1').text();
let s2 = $('b.s2').text();
let s3 = $('#second i').text();
let s4 = $('q[title="hello"]').text();
let s5 = $('a[target="_blank"]').text();
let s6 = $('span.extra').eq(1).text();
alert(string.concat(s1, s2, s3, s4, s5, s6));


