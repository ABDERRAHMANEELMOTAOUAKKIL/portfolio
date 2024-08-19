const body = document.querySelector('body');
const button = document.querySelector('#darkbutton');

function toggleDark() {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        localStorage.setItem("theme", "light");
        button.innerHTML = "Turn on dark mode";
    } else {
        body.classList.add('dark');
        localStorage.setItem("theme", "dark");
        button.innerHTML = "Turn off dark mode";
    }
}

if (localStorage.getItem("theme") === "dark") {
    body.classList.add('dark');
    button.innerHTML = "Turn off dark mode";
}

document.querySelector('#darkbutton').addEventListener('click', toggleDark); <