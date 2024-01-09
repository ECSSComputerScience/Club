function scroll() {
    const targetElement = document.documentElement
    const rect = targetElement.getBoundingClientRect()
    const targetPos = targetElement.scrollHeight - (rect.top + rect.height)
    const startPos = window.scrollY
    let currentPos = startPos
    const distance = targetPos - currentPos
    const increments = 50
    const increment = distance / increments
    function scrollStep() {
        currentPos += increment
        window.scrollTo(0, currentPos)
        if (currentPos < targetPos) {
            setTimeout(scrollStep, 20)
        }
    }
    setTimeout(scrollStep, 1000)
}

document.addEventListener('DOMContentLoaded', scroll)

