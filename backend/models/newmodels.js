const mongoose=require('mongoose')

const newCandidateSchema = new mongoose.Schema({
    sno: { type: Number, required: true }, // Added sno
    name: { type: String, required: true, alias: 'newcandidates' }, // Alias candidate to name
    details: {
        constituency: { type: String, required: true },
        party: { type: String, required: true },
        criminalCase: { type: Number, required: true },
        education: { type: String, required: true },
        
        additionalDetails: {
            constituency: { type: String, required: true, alias: 'details__constituency' }, // Added alias for constituency
            // Alias for Profession
            photo: { type: String, required: true }
        }
    }
});

module.exports= mongoose.model('newcandidates', newCandidateSchema);