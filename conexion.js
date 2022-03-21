window.addEventListener('online', updateOnLineStatus)
window.addEventListener('offline', updateOnLineStatus)

function updateOnlineStatus(event){
    const condition = navigator.online
    ? 'online'
    : 'offline'
    alert(`El usuario esta ${condition}`)
}