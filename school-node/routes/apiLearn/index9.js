var ws = require("nodejs-websocket")

let chatA = null
let chatB = null

let server = ws.createServer(function (conn) {
    conn.on("text", function (msg) {
        if (chatA && chatB) {
            if (conn === chatA) {
                chatB.send(msg)
            } else {
                chatA.send(msg)
            }
            return;
        }
        if (msg === 'chatA_token') {
            chatA = conn
            return;
        }
        if (msg === 'chatB_token') {
            chatB = conn
        }
    })
    conn.on("close", function (code, reason) {
        console.log("closed closed")
    })
    conn.on("error", function (code, reason) {
        console.log("error error")
    })
}).listen(5000)
module.exports = server