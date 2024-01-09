function handleHeaderAnimations() {
    let baseDelay = 1000
    if (window.innerHeight <= 768) {
        baseDelay *= 1.25
    }
    const targetElements = document.querySelectorAll('.heading-content')
    function appendHeaderContent() {
        const headerContent = "ECSSComputerScience".split('')
        for (let i = 0; i < targetElements.length; i++) {
            targetElements[i].textContent = headerContent[i]
            setTimeout(function() {
                targetElements[i].style.visibility = "visible"
            }, i * 100)
        }
    }
    appendHeaderContent()
    function headerAnimation() {
        function phaseOne() {
            for (let i = 0; i < 4; i++) {
                targetElements[i].style.animation = 'phaseOneHeaderAnimations 1s ease-in-out'
            }
            for (let i = 4; i < targetElements.length; i++) {
                targetElements[i].style.animation = 'phaseOneHeaderAnimations 1s ease-in-out'
            }
            setTimeout(function() {
                targetElements.forEach((element) => {
                    element.style.visibility = "hidden"
                })
            }, 1000)
        }
        setTimeout(phaseOne, baseDelay * 2)
        function phaseTwo() {
            const finalHeaderElements = document.querySelectorAll('.final-heading-content')
            finalHeaderElements.forEach((element) => {
                element.style.visibility = "visible"
            })
        }
        let optimizedDelay;
        if (window.innerHeight <= 768) {
            optimizedDelay = 3
        } else {
            optimizedDelay = 3.5
        }
        setTimeout(phaseTwo, baseDelay * optimizedDelay)
    }
    headerAnimation()
}

function ensureSideBarElementsAreHIdden() {
    const sidebarElements = [
        document.getElementById('sidebar-container'),
        document.getElementById('buttons-container')
    ]
    sidebarElements.forEach((element) => {
        element.style.visibility = "hidden"
    })
}

function handleSidebar() {
    const sidebarElements = [
        document.getElementById('sidebar-container'),
        document.getElementById('buttons-container')
    ]
    function sidebarAnimation() {
        sidebarElements.forEach((element) => {
            element.style.visibility = "visible"
        })
        sidebarElements[0].style.animation = 'sidebarAnimation 1s ease-in-out'
    }
    if (window.innerHeight > 768) {
        sidebarAnimation()
    }   
}

function ensureLoadToTop() {
    window.scrollTo(0, 0)
}

function revealContent() {
    const content = document.getElementById('main-content-container')
    content.style.visibility = "visible"
}

function main() {
    ensureSideBarElementsAreHIdden()
    ensureLoadToTop()
    setTimeout(handleHeaderAnimations, 500)
    setTimeout(handleSidebar, 3500)
    setTimeout(revealContent, 5000)
}

document.addEventListener('DOMContentLoaded', main)