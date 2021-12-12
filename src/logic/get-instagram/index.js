
export default function () {

    return (async () => {

        const response = await fetch(`${process.env.REACT_APP_INSTAGRAM}`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': 'https://www.crosstrainingemporda.com',
            }
        })
        console.warn(response)
        if (response.status !== 200) {
            const { error } = await response.json()

            throw Error(error)
        }

        const jsonInstagram = await response.json()

        const pathToData = jsonInstagram.graphql.user.edge_owner_to_timeline_media.edges

        const filteredData = []

        for (let i = 0; i < 5; i++) {
            let myImage = pathToData[i].node.thumbnail_resources[3].src
            let myCaption = pathToData[i].node.edge_media_to_caption.edges[0].node.text
            let likes = pathToData[i].node.edge_liked_by.count
            filteredData.push({ image: myImage, caption: myCaption, likes: likes })
        }

        return filteredData

    })()

}
