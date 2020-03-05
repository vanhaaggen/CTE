const { REACT_APP_API_URL } = process.env

export default function (name, email, userMessage) {

    return (async () => {
        const response = await fetch(`${REACT_APP_API_URL}/send`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name, email, userMessage })
        })

        if (response.status !== 200) {
            const { error } = await response.text()

            throw Error(error)
        } else {
            return 'OK'
        }
    })()

}
