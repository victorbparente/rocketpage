const express = require("express")
const nunjucks = require("nunjucks")
const infos = require("./data")

const server = express()

server.set("view engine", "njk")
server.use(express.static("public"))

nunjucks.configure("views", {
    express: server
})

server.listen(5000, function() {
    console.log("Server is running!!!")
})

server.get("/", function(req, res) {
    return res.render("about")
})

server.get("/courses", function(req, res) {
    console.log(infos[0].link)
    return res.render("courses", {items : infos})
})