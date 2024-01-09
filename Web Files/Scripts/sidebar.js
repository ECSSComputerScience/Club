function moveButton(button, directionRight=true) {
    const startPos = parseInt(window.getComputedStyle(button).marginLeft)
    let moveAmount = 0
    if (directionRight) {
        moveAmount = window.innerHeight / 3
    } else {
        moveAmount = -(window.innerHeight / 3)
    }
    const targetPos = startPos + moveAmount
    let currentPos = startPos
    const distance = targetPos - currentPos
    const increments = 50
    const increment = distance / increments
    function moveStep() {
        currentPos += increment
        button.style.marginLeft = currentPos + 'px'
        if (directionRight && currentPos < targetPos) {
            setTimeout(moveStep, 20)
        } else if (!directionRight && currentPos > targetPos) {
            setTimeout(moveStep, 20)
        }
    }
    moveStep()
}


function phaseA(mobileButton, sidebarContainer, sidebarButtons) {
    moveButton(mobileButton)
    sidebarContainer.style.visibility = "visible"
    sidebarContainer.style.animation = 'mobileAnimation 1 1s'
    sidebarContainer.style.width = '70vw'
    sidebarButtons.forEach((button) => {
        button.style.visibility = "visible"
        button.style.animation = 'mobileAnimation 1 1s'
        button.style.width = '70vw'
    }) 
}

function phaseB(mobileButton, sidebarContainer, sidebarButtons) {
    moveButton(mobileButton, directionRight=false)
    sidebarContainer.style.animation = 'mobileAnimationReverse 1 1s'
    sidebarContainer.style.width = '0vw'
    sidebarContainer.style.visibility = "hidden"
    sidebarButtons.forEach((button) => {
        button.style.animation = 'mobileAnimationReverse 1 1s'
        button.style.width = '0vw'
        setTimeout(function() {
            button.style.visibility = "hidden"
        }, 500)
        
    })
}


function main() {
    const mobileButton = document.getElementById('mobile-sidebar-button')
    const sidebarContainer = document.getElementById('sidebar-container')
    let sidebarButtons = document.querySelectorAll('.sidebar-button')
    sidebarButtons = [...sidebarButtons]
    if (window.innerHeight <= 768) {
        let phase = 1
        mobileButton.addEventListener('click', function() {
            if (phase === 1) {
                phaseA(mobileButton, sidebarContainer, sidebarButtons)
                phase = 2
            } else if (phase === 2) {
                phaseB(mobileButton, sidebarContainer, sidebarButtons)
                phase = 1
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', main)