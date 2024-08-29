const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
require('dotenv').config();
const axios=require('axios')

const politicanModel = require('./models/models');
const candidateModel=require('./models/newmodels')

mongoose.connect(process.env.MONGOTEST)
    .then(() => console.log('Database is successfully connected'))
    .catch((error) => console.log(error));




    app.get('/getcandidatename', async (req, res) => {
        try {
         
            const candidates = await candidateModel.find({});
    
            if (candidates.length === 0) {
                return res.status(404).json({ message: 'No candidates found' });
            }
    
          
            res.json(candidates); 
        } catch (error) {
            res.status(500).send('Error retrieving candidate data');
        }
    });
    app.post('/getcandidatebyparty', async (req, res) => {
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
    app.post('/getcandidatebyconstituency', async (req, res) => {
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
    app.post('/getcandidatebyconstituencyandname', async (req, res) => {
        try {
            const { constituency, name } = req.body; 
            
         
            const query = {};
    
           
            if (constituency) {
                query['details.constituency'] = constituency; 
            }
    
          
            if (name) {
                query.name = name; 
            }
    
            const candidates = await candidateModel.find(query);
    
            if (candidates.length === 0) {
                return res.status(404).json({ message: 'No candidates found' });
            }
    
            res.json(candidates);
        } catch (error) {
            res.status(500).send('Error retrieving candidate data');
        }
    });
    app.get('/getworksdata',async(req,res)=>{
      try{
        const candidate=await politicanModel.find({})
        res.json(candidate)
      }catch(error){
        console.error(error)
      }
    })
    app.post('/getworksdatabyname', async (req, res) => {
      try {
          const { name } = req.body;
          
          
          const candidate = await politicanModel.findOne({ name: name });
          
         
          if (!candidate) {
              return res.status(404).json({ message: 'Candidate not found' });
          }
  
        
          res.json(candidate.works);
      } catch (error) {
          console.error(error);
          res.status(500).send('Error retrieving candidate data');
      }
  });
  
    
app.listen(3500, () => {

    console.log('Server is listening on port 3500');

    
})

