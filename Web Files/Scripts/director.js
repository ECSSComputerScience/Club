document.addEventListener('DOMContentLoaded', function() {
    const targetElements = document.querySelectorAll('.sidebar-button')
    const targetArray = [...targetElements]
    const pages = [
        'index.html',
        'club leaders & partners.html',
        'https://www.instagram.com/ecsscomputerscience/',
        'scheduling.html',
        'activities.html',
        'registration.html'
    ]

    targetArray.forEach((element) => {
        element.addEventListener('click', function() {
                const activatedElement = document.getElementById(element.id)
                const activatedElementIndex = targetArray.indexOf(activatedElement)
                window.open(pages[activatedElementIndex])
        })
    })
})

