const button = document.getElementById("theme-btn");

// 기본적으로 다크 모드를 위한 함수
function updateTheme(){
    if(document.body.classList.contains("dark")){
        button.textContent="☀️ 라이트모드";
    } else {
        button.textContent="🌙 다크모드";
    }
}

if(localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

updateTheme();
button.addEventListener("click",function () {
    document.body.classList.toggle("dark");
     if(document.body.classList.contains("dark")){
    localStorage.setItem("theme", "dark");
    } else {
    localStorage.setItem("theme", "light");
    }
    updateTheme();
});