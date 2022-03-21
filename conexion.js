window.addEventListener('online', updateOnlineStatus)
window.addEventListener('offline', updateOnlineStatus)

function updateOnlineStatus(event){
    const condition = navigator.online
    ? 'online'
    : 'offline'
    alert(`El usuario esta ${condition}`)
}