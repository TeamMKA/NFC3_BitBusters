// models/Candidate.js

const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    details: {
        constituency: String,
        party: String,
        criminalCase: Number,
        education: String,
        totalAssets: String,
        liabilities: String,
        additionalDetails: {
            constituency: String,
            selfProfession: String,
            photo: String
        }
    },
    works: [{
        srNo: String,
        work: String,
        state: String,
        ida: String,
        honbleMemberOfParliament: String,
        recommendationDate: String,
        constituency: String,
        recommendedAmount: String
    }]
});

module.exports = mongoose.model('Candidate', CandidateSchema);
