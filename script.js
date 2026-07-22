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

function getDday(targetDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const target = new Date(targetDate);
    target.setHours(0,0,0,0);

    const diffTime = target - today;
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if(diffDays === 0) return 'D-Day';
    if(diffDays > 0) return `D-${diffDays}`;
    return `d+${Math.ads(diffDays)}`;
}

//
document.getElementById('result').textContent = getDday('2026-8-14');