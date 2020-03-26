const resetLocalStorage = async () => {
    await localStorage.removeItem('token')
    await localStorage.removeItem('idUser')
    await localStorage.removeItem('firstname')
    await localStorage.removeItem('lastname')
    await localStorage.removeItem('email')
}

const Logout = async () => {
    await resetLocalStorage()
    document.location.reload()
    return false
}

export default Logout
