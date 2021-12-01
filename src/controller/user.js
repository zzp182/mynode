

const loginCheck = (username, password) => {
    if(username == 'zzp' && password == '123'){
        return true
    }
    return false
}

module.exports = {
    loginCheck
}