const { REACT_APP_API_URL, REACT_APP_APIKEY } = process.env

export default function () {
    return (async () => {
        const response = await fetch(`${REACT_APP_API_URL}${REACT_APP_APIKEY}`, {
            method: 'GET'
        })

        if (response.status !== 200) {
            const { error } = await response.json()

            throw Error(error)
        }

        const photos = await response.json()

        return photos
    })()

}
