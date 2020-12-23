/**
     * If cells inner text match with cellContent parameter the cell changes its style.
     * 
     * @param {string} selector
     * @param {boolean} boolean 
     * 
     * @returns {nodeList}
     */

const highlightCell = (selector, boolean) => {

    const cells = document.querySelectorAll(selector)

    const cssClassName = (string) => {
        let toArr = Array.from(string)
        let pushNum = toArr.push("-td")
        let del = toArr.splice(0, 2)
        let result = toArr.join('')

        return result
    }

    for (let i = 0; i < cells.length; i++) {

        let parent = cells[i].parentNode
        let parentName = parent.nodeName


        boolean && (parentName === 'TD' ?
            parent.classList.add(cssClassName(selector)) :
            parent.parentNode.classList.add(cssClassName(`${selector}-splt`)))

        !boolean && (parentName === 'TD' ?
            parent.classList.remove(cssClassName(selector)) :
            parent.parentNode.classList.remove(cssClassName(`${selector}-splt`)))
    }
}

export default highlightCell