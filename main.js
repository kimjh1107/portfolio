// IntersectionObserver를 사용하여 섹션이 화면에 나타날 때 애니메이션 추가하기

document.addEventListener('DOMContentLoaded', function () {
    // 애니메이션을 추가할 요소들을 선택
    const sections = document.querySelectorAll('section');

    // 각 섹션에 대해 애니메이션 효과를 추가하는 함수
    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 화면에 섹션이 들어오면 'active' 클래스 추가
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // 이미 관찰된 요소는 다시 관찰하지 않음
            }
        });
    }

    // IntersectionObserver 설정
    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.5, // 화면의 50% 이상 보일 때 애니메이션 실행
    });

    // 모든 섹션에 대해 observer 시작
    sections.forEach(section => {
        observer.observe(section);
    });
});

window.onscroll = function () {
    let topBtn = document.getElementById("topBtn");
    
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block"; 
    } else {
        topBtn.style.display = "none"; 
    }
    topBtn.addEventListener("click", function(){
        window.scroll({
            top: 0,
            behavior: "smooth" 
        });
    }) 

    let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.opacity = "0.9";
        header.style.position = "fixed";
        header.style.zIndex = "10";
        header.style.width = "100%";
    } else {
        header.style.opacity = "1"; 
        header.style.position = "relative"; 
        header.style.zIndex = "auto"; 
        
    }
});

};

window.onload = function() {
    const mottoSection = document.getElementById('motto');
    const paragraphs = mottoSection.querySelectorAll('p br');

    // 각 <br> 태그에 대해 글씨가 안쪽부터 바깥쪽으로 확산되며 나타나도록 애니메이션 적용
    paragraphs.forEach((br, index) => {
        setTimeout(() => {
            br.style.opacity = 1;
            br.style.transform = "scale(1)";
        }, 1000 * index);
    });
};


document.addEventListener('wheel', function(event) {
    let delta = event.deltaY;

    if (delta > 0) {
        // 아래로 스크롤
        scrollToNextSection();
    } else {
        // 위로 스크롤
        scrollToPreviousSection();
    }
});

function scrollToNextSection() {
    let currentSection = getCurrentSection();
    if (currentSection && currentSection.nextElementSibling) {
        let nextSection = currentSection.nextElementSibling;
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToPreviousSection() {
    let currentSection = getCurrentSection();
    if (currentSection && currentSection.previousElementSibling) {
        let prevSection = currentSection.previousElementSibling;
        prevSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function getCurrentSection() {
    let sections = document.querySelectorAll('section');
    for (let section of sections) {
        let rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
            return section;
        }
    }
    return null;
}



   
