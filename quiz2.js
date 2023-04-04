let BMuser = [
    {
        username: "ugak-ugak",
        password: "1234",
        name: "amir",
        email: "amirwin966@gmail.com"
    },
    {
        username: "range rover",
        password: "5678",
        name: "harith",
        email: "harith12@gmail.com"
    },
    {
        username: "booge3yninja",
        password: "4321",
        name: "afifi",
        email: "afifimercurial@gmail.com"
    },
    {
        username: "invader",
        password: "anep1234",
        name: "haniff",
        email: "anep90@gmail.com"
    },
]
function login(reqUsername, reqPassword) {
    let matchuser = BMuser.find (user => user.username == reqUsername)

    if (!matchuser) return "User not found!"
    if(matchuser.password == reqPassword){
        return matchuser
    } else {
        return "invalid password"
    }
}
function register(reqUsername,reqPassword,reqName,reqEmail){
    BMuser.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail
    })
}
//try login
console.log(login("ugak-ugak","1234"))
console.log(login("seriyazla","1234"))
console.log(login("invader","hahah"))
console.log(register("seriyazla","qwert","iqbal","bal34@gmail.com"))
console.log(login("seriyazla","qwert"))