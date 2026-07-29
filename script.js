// 기본적으로 다크 모드를 위한 함수
const button = document.getElementById("theme-btn");
/* const (상수 변수 선언) button(id 이름) -> button이라는 id 변수 선언
= (대입) document (현재 웹페이지)  .(접근) "get(가져오다) Element(요소) By(~로) Id(id)" */
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

//D-DAY를 위한 함수
function getDday(targetDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const target = new Date(targetDate);
    target.setHours(0, 0, 0, 0);

    const diffTime = target - today;
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if(diffDays === 0) return 'D-Day';
    if(diffDays > 0) return `D-${diffDays}`;
    return `d+${Math.asd(diffDays)}`;
}

//
document.getElementById('results').textContent = getDday('2026-08-14'); 

function alertmenu(menu){
    alert(`오늘의 급식은 ${menu}`)
}