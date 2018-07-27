import { Router } from 'express';
import base from './base';


let router = Router();

router

    .get('/', (req, res, next) => {

        base.readall('spGetAllMovies').then(results => res.send(results))

    })

    .get('/:id?', (req, res, next) => {
        let id = req.params.id;
        if (id) {
            base.read('spGetMovie', [id]).then(results => res.send(results))
        } else {

        }
    })



    .post('/', (req, res, next) => {
        let { title, director, poster } = req.body
        if (!title || !director || !poster) {
            res.status(400).send("Invaid post")
        } else {
            res.send('got post')
            base.create('spCreateMovie', [title, director, poster])
            // .then(results => res.send(results))            
        }

    })



    .put('/:id?', (req, res, next) => {
        let {title, director, poster} = req.body;
        let id = req.params.id;
        if (!title || !director) {
            res.status(400).send("Invaid update")
        }else if(poster === null){
            return poster
        }else{
            res.send('got update')
            base.update('spUpdateMovie', [id, title, director, poster])
            res.sendStatus(200)
        }
    })

    .delete('/:id?', (req, res, next) => {
        let id = req.params.id;
        if (id) {
            res.send('post deleted')
    base.destroy('spDeleteMovie', [id]).then(results => res.send(results))
        } else {
    
        }
    
      });
export default router;