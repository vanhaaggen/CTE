import validate from '../../utils/validate'
const { REACT_APP_API_URL } = process.env

export default function (eathoneybitch, name, email, userMessage) {
    validate(eathoneybitch, name, email)

    return (async () => {
        const response = await fetch(`${REACT_APP_API_URL}/send`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ eathoneybitch, name, email, userMessage })
        })


        if (response.status >= 400) {
            const { error } = await response.text()

            throw Error(error)
        } else {
            return 'OK'
        }
    })()

}
