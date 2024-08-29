const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
require('dotenv').config();

const politicanModel = require('./models/models');
const candidateModel=require('./models/newmodels')

mongoose.connect(process.env.MONGOTEST)
    .then(() => console.log('Database is successfully connected'))
    .catch((error) => console.log(error));

    app.get('/getcandidatename', async (req, res) => {
        try {
            // Find all candidates
            const candidates = await candidateModel.find({});
    
            if (candidates.length === 0) {
                return res.status(404).json({ message: 'No candidates found' });
            }
    
            // Return names of all candidates directly
            res.json(candidates); // Return the entire candidate objects
        } catch (error) {
            res.status(500).send('Error retrieving candidate data');
        }
    });
    app.get('/getcandidatebyparty', async (req, res) => {
        try {
            const { party } = req.body;
            
            const candidates = party ? await candidateModel.find({ "details.party": party }) : await candidateModel.find({});
    
            if (candidates.length === 0) {
                return res.status(404).json({ message: 'No candidates found' });
            }
    
            
          
            res.json(candidates); 
        } catch (error) {
            res.status(500).send('Error retrieving candidate data');
        }
    });
    app.get('/getcandidatebyconstituency', async (req, res) => {
        try {
            const { constituency } = req.body;
            
            const candidates = constituency ? await candidateModel.find({ "details.constituency": constituency }) : await candidateModel.find({});
    
            if (candidates.length === 0) {
                return res.status(404).json({ message: 'No candidates found' });
            }
    
            
            
            res.json(candidates); 
        } catch (error) {
            res.status(500).send('Error retrieving candidate data');
        }
    });
    app.get('/getcandidatebyconstituencyandname', async (req, res) => {
        try {
            const { constituency, name } = req.body; // Get constituency and name from the request body
            
            // Create an object to hold query conditions
            const query = {};
    
            // Add condition for constituency first
            if (constituency) {
                query['details.constituency'] = constituency; // Filter by constituency
            }
    
            // Then add condition for name
            if (name) {
                query.name = name; // Filter by name
            }
    
            // Find candidates based on the constructed query
            const candidates = await candidateModel.find(query);
    
            // Check if candidates were found
            if (candidates.length === 0) {
                return res.status(404).json({ message: 'No candidates found' });
            }
    
            // Return the found candidates
            res.json(candidates);
        } catch (error) {
            res.status(500).send('Error retrieving candidate data');
        }
    });
    
app.listen(3500, () => {
    console.log('Server is listening on port 3500');
});
