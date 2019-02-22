const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

// GET '/' just for fun

server.get('/', (req, res) => {
    res.send('<h1>Things are working on Sprint Challenge RDBMS!</h1>');
  });

// GET LIST OF ALL PROJECTS!

  server.get('/api/projects', (req, res) => {
    db('project')
    .then(projects => {
        res
        .status(200)
        .json(projects)
    })
    .catch(err => {
        res
        .status(500)
        .json({ error: "There was an error finding this project. Try again!" })
    })
}); 

// GET PROJECTS BY ID WITH LIST OF ACTIONS

server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    db('project')
    .where('id', id).first()
    .then(projectInfo => {
        if(projectInfo.length !==0){
            db('action')
            .where('project_id', id)
            .then(actions => {
                projectInfo.actions = actions;
                res
                .status(200)
                .json(projectInfo)
            })

        } else {
            res
            .status(404)
            .json({ error: "This project does not exist." })
        }
    })
    .catch(err => {
        res.status(500).json({ error: "There was an error finding this project. Try again!" })
    })
})

// POST PROJECTS

server.post('/api/projects', (req, res) => {
    const project = req.body;
    if(project.name && project.description && project.completed){
        db('project').insert(project)
        .then(id => {
            res
            .status(201)
            .json({ message: "Project was posted!" })
        })
        .catch(err => {
            res
            .status(500)
            .json({ error: "There was an error posting this project." })
        })
    } else {
        res
        .status(400)
        .json({ error: "Please include more project information." })
    }
}); 

// POST ACTIONS

server.post('/api/actions', (req, res) => {
    const action = req.body;
    if(action.action_description && action.action_finished){
        db('action').insert(action)
        .then(id => {
            res
            .status(201)
            .json({ message: "Action was posted!" })
        })
        .catch(err=>{
            res
            .status(500)
            .json({ error: "There was an error posting this action." })
        })
    } else {
        res
        .status(400)
        .json({ error: "Please include more action information." })
    }
});


  const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`\nrunning on ${port}\n`));