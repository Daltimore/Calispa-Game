<script>
import Pusher from "pusher-js"

const pusher = new Pusher('841235', {
  cluster: 'eu',
  encrypted: true,
  authEndpoint: 'http://localhost:4000/pusher/auth'
})
export default {
  getPresenceID () {
    // This function checks the address bar of the browser for params
    let getQueryString = (field, url) => {
      let href = url ? url : window.location.href
      let reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i')
      let string = reg.exec(href)
      return string ? string[1] : null
    }
    // Appends 'presence' to the result
    let id = getQueryString('id')
    id = 'presence-' + id
    return id
  },
  subscribeToPusher () {
    let presenceid = this.getPresenceID()
    let channel = pusher.subscribe(presenceid)
    return channel
  }
}
</script>
