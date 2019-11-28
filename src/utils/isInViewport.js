function isInViewport(param) {
    let elem = document.querySelector(param)

    const desiredActivationHeight = (window.innerHeight / 2).toFixed()
    const elementPosition = elem.offsetTop
    const inViewZone = elementPosition - desiredActivationHeight

    const distanceToTop = (window.pageYOffset + 71).toFixed()

    if (distanceToTop >= inViewZone) {
        return true
    } else {
        return
    }
}

export default isInViewport