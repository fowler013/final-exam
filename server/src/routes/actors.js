import { Router } from 'express';
import base from './base';


let router = Router();

router

    .get('/', (req, res, next) => {

        base.readall('spGetAllActors').then(results => res.send(results))

    })

    .get('/:id?', (req, res, next) => {
        let id = req.params.id;
        if (id) {
            base.read('spGetActor', [id]).then(results => res.send(results))
        } else {

        }
    })



    .post('/', (req, res, next) => {
        let { actor } = req.body
        if (!actor) {
            res.status(400).send("Invaid post")
        } else {
            res.send('got post')
            base.create('spCreateActor', [actor])
            // .then(results => res.send(results))            
        }

    })



    .put('/:id?', (req, res, next) => {
        let {actor} = req.body;
        let id = req.params.id;
        if (!actor) {
            res.status(400).send("Invaid update")
        }else{
            res.send('got update')
            base.update('spUpdateActor', [id, actor])
            res.sendStatus(200)
        }
    })

    .delete('/:id?', (req, res, next) => {
        let id = req.params.id;
        if (id) {
            res.send('post deleted')
    base.destroy('spDeleteActor', [id]).then(results => res.send(results))
        } else {
    
        }
    
      });
export default router;