const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        console.log('req.user', req.user);
        pool.query('SELECT * FROM item;')
        
            .then(results => res.send(results.rows))
            .catch(error => {
                console.log('Error making SELECT for shelf:', error);
                res.sendStatus(500);
            });
        // if not a user then send this instead
    } else {
        res.sendStatus(403);
    }
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    if(req.isAuthenticated()){
        const item = req.body;
        console.log(item);
        const queryText = `INSERT INTO "item" ("description", "image_url", "person_id")
                           VALUES ($1, $2, $3);`;
        pool.query(queryText, [item.description, item.image_url, req.user.id])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error in /api/shelf POST', error);
        });
    } else{
        res.sendStatus(403);
    }
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
    if (req.isAuthenticated()) {
        const queryText = `SELECT "person"."username", COUNT("item") 
                            FROM "person" JOIN "item" ON "person"."id" = "item"."person_id" 
                            GROUP BY "person"."id";`;
        pool.query(queryText).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(`error in /count GET`, error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;