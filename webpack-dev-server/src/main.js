import axios from 'axios'
document.querySelector('#app').innerHTML = 'hi~'

async function start() {
    try {
        await axios.get('/api/test')
    } catch (e) {
        console.log(e)
    }
}
start()