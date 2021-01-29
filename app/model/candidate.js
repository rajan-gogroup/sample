const mongoose = require("mongoose")

const schema = mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	location: String,
	pincode: String,
	source: String,
	age: String,
	experiences: String,
	gender: String,
	skills: String,
	Interview_state: String,
	profile_pic: String,
	Resume: String,
	married: Boolean,
	education_document: String,
	dob: String,
	expected_salary: String,
	current_salary: String,
	notice_period: String,
	negotiable: Boolean,
	years_of_total_experience: String,
	years_of_relevant_experience: String,
	applied_for: String,
	mobile: String
})

module.exports = mongoose.model("Candidate", schema)