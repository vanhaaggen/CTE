const { REACT_APP_INSTAGRAM } = process.env


export default function () {

    return (async () => {
        const response = await fetch(`${REACT_APP_INSTAGRAM}`, {
            method: 'GET'
        })

        if (response.status !== 200) {
            const { error } = await response.json()

            throw Error(error)
        }

        const jsonInstagram = await response.json()

        const pathToData = jsonInstagram.graphql.user.edge_owner_to_timeline_media.edges

        const filteredData = []

        for (let i = 0; i < 5; i++) {
            let myImage = pathToData[i].node.display_url
            let myCaption = pathToData[i].node.edge_media_to_caption.edges[0].node.text
            filteredData.push({ image: myImage, caption: myCaption })
        }

        return filteredData

    })()

}
