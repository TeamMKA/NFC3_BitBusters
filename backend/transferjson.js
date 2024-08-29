const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOTEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Connection error', err);
});

const CandidateSchema = new mongoose.Schema({
    sno: { type: Number, required: true }, // Added sno
    name: { type: String, required: true, alias: 'candidate' }, // Alias candidate to name
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

const Candidate = mongoose.model('newcandidate', CandidateSchema);
const rawData = fs.readFileSync('cleaned_data.json', 'utf-8');
const candidates = JSON.parse(rawData);

// Function to save candidates to MongoDB
async function saveCandidatesToMongoDB(candidates) {
    try {
        for (const candidate of candidates) {
            const newCandidate = new Candidate({
                sno: candidate.sno, // Use the sno field
                name: candidate.candidate, // Using candidate name
                details: {
                    constituency: candidate.constituency, // Using constituency directly
                    party: candidate.party, // Using party directly
                    criminalCase: candidate.criminalCase, // Using criminalCase directly
                    education: candidate.education, // Using education directly
                    totalAssets: candidate.totalAssets, // Using totalAssets directly
                    liabilities: candidate.liabilities, // Using liabilities directly
                    additionalDetails: {
                        constituency: candidate.details__constituency, // Using details__constituency directly
                        selfProfession: candidate.Profession, // Using Profession directly
                        photo: candidate.photo // Using photo directly
                    }
                }
                // Assuming you don't have works in this example, modify as needed
            });

            await newCandidate.save();
        }

        console.log('Data has been successfully saved to MongoDB');
    } catch (error) {
        console.error('Error saving data to MongoDB:', error);
    }
}

// Call the function to save data
saveCandidatesToMongoDB(candidates);
