const registerUser = (req, res) => {
    res.json({message: 'Crear Usuario'})
}

const loginUser = (req, res) => {
    res.json({message: 'Login Usuario'})
}


const getUserData = (req, res) => {
    res.json({message: 'Datos Usuario'})
}

module.exports = {
    registerUser,
    loginUser,
    getUserData
}