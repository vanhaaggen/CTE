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

        const toObjectProperty = jsonInstagram.graphql.user.edge_owner_to_timeline_media.edges

        const imagesArray = []

        for (let i = 0; i <= 5; i++) {
            imagesArray.push(toObjectProperty[i].node.display_url)
        }

        return imagesArray

    })()

}
