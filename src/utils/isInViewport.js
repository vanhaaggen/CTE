/**
 * This listener triggers a boolean as soon as the user scrolls the page to middle height.
 * the "71" is the height of the Navbar.
 * 
 * @param {string} param 
 * 
 * @returns {Boolean}
 */


function isInViewport(param) {
    let elem = document.querySelector(param)
    const middHeight = (window.innerHeight / 2).toFixed()
    let elementPosition = elem.offsetTop
    const inViewZone = elementPosition - middHeight

    const distanceToTop = (window.pageYOffset + 71).toFixed()


    return distanceToTop >= inViewZone

}

export default isInViewport