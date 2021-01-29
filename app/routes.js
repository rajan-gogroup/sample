const express = require("express")
const Candidate = require("./model/candidate.js") // new
const router = express.Router()

// Get candidates
router.get("/candidates/", async (req, res) => {
	const candidate = await Candidate.find()
	res.send(candidate)
})

// Get single candidate
router.get("/candidates/:id", async (req, res) => {
	try{
		const candidate = await Candidate.findOne({ _id: req.params.id })
		res.send(candidate)
	} catch {
		res.status(404)
		res.send({ error: "Candidate doesn't exist!" })
	}
})

// Update Candidate
router.patch("/candidates/:id", async (req, res) => {
	try {
		// var $set = { $set: {} };
		const candidate = await Candidate.findOne({ _id: req.params.id })
		for (key in req.body) {
			candidate[key] = req.body[key];
		}
		
		await candidate.save()
		res.send(candidate)
	} catch {
		res.status(404)
		res.send({ error: "Candidate doesn't exist!" })
	}
})


// Save Candidate
router.post("/candidates", async (req, res) => {
	const candidate = new Candidate({
		"first_name": req.body.first_name,
		"last_name": req.body.last_name,
		"email": req.body.email,
		"location": req.body.location,
		"pincode": req.body.pincode,
		"source": req.body.source,
		"age": req.body.age,
		"experiences": req.body.experiences,
		"gender": req.body.gender,
		"skills": req.body.skills,
		"interview_state": req.body.Interview_state,
		"profile_pic": req.body.profile_pic,
		"Resume": req.body.Resume,
		"married": req.body.married,
		"education_document": req.body.education_document,
		"dob": req.body.dob,
		"expected_salary": req.body.expected_salary,
		"current_salary": req.body.current_salary,
		"notice_period": req.body.notice_period,
		"negotiable": req.body.negotiable,
		"years_of_total_experience": req.body.years_of_total_experience,
		"years_of_relevant_experience": req.body.years_of_relevant_experience,
		"applied_for": req.body.applied_for,
		"mobile": req.body.mobile
	})
	await candidate.save()
	res.send(candidate)
})


// Delete candidate
router.delete("/candidates/:id", async (req, res) => {
	try {
		await Candidate.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Candidate doesn't exist!" })
	}
})

module.exports = router