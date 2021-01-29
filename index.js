const express = require("express")
const mongoose = require("mongoose") // new
const routes = require("./app/routes") 

// Connect to MongoDB database
mongoose
	.connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
	const app = express()
	app.use(express.json()) 
	app.use("/api", routes) // new

	app.listen(5000, () => {
		console.log("Server has started!")
	})
})