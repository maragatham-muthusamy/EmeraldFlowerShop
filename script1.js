const nav = document.querySelector('.topnavmenu');
fetch('/menubar.html')
.then(res=>res.text())
.then(data=>
{
    nav.innerHTML = data;
});
