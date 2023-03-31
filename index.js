let dbUser = [
    {
        username:"ain",
        password:"1234",
        name:"ain suhana",
        email:"ainsuhana@utem.edu.my"
    },
    {
        username:"intan",
        password:"5678",
        name:"intan",
        email:"diamond@utem.edu.my"
    },
    {
        username:"sakura",
        password:"2468",
        name:"sakura",
        email:"sakura@utem.edu.my"
    }
]

function login(username,password){
    console.log ("someone trying to login with",username,password)
    let matched = dbUser.find (element =>
        //console.log (element)
        element.username == username
        //element.username.localeCompare(username)
    )

    if (matched) {
        if (matched.password == password){
            return matched
        }
        else {
            return "username not matched"
        }
    } else {
        return "username not found"
    }
    //console.log (matched)
}
function register (newusername, newpassword, newname, newemail){
    //to do: check if user exist

    dbUser.push({
        username: newusername,
        password: newpassword,
        name: newname,
        email: newemail
    })
}

//try to login
//console.log (login ("ain","12345"))
//console.log (login ("ain","123456"))

//try to register
register("bambam","1357","bambam","bambam@utem.edu.my")
console.log (login ("bambam","1357"))