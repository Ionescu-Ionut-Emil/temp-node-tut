const os=require('os')

//info about current user

const user= os.userInfo()

console.log(user)

//method reurns system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS ={

    name:os.type(),
    relese:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}

console.log(currentOS)