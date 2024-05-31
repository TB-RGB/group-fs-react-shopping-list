// Set up all routers
const express = require('express')
const pool = require('../modules/pool')

const router = express.Router();

// GET /shopping
router.get('/', (req,res)=>{
    const queryText = `
    SELECT * FROM "shopping list"
    ORDER BY "name" ASC;
    `;

    pool.query(queryText)
        .then((response)=>{
            res.send(response.rows)
        })
        .catch((err)=>{
            console.error('GET /shopping error', err)
            res.sendStatus(500)
        })
})

// POST /shopping
router.post('/', (req, res)=>{
    const queryText = `
    INSERT INTO "shopping list" ("name", "quantity", "unit")
    VALUES ($1, $2, $3);
    `
    const listArray = [req.body.name, req.body.quantity, req.body.unit]

    pool.query(queryText, listArray)
        .then((response)=>{
            res.sendStatus(201)
        })
        .catch((err)=>{
            console.error('POST /shopping error', err)
            res.sendStatus(500)
        })
})

// PUT /shopping/:id
router.put('/:id', (req,res)=>{
    const listId = [req.params.id];
    const isPurchased = req.body.isPurchased;

    let queryText = ''

    if (isPurchased === true){
        queryText = `
        UPDATE "shopping list" SET "purchased"=true
        WHERE "id"=$1;
        `
    } else {
        console.error('Trouble marking purchased')
        res.sendStatus(500)
    }

    pool.query(queryText, listId)
        .then((response)=>{
            res.sendStatus(204)
        })
        .catch((err)=>{
            console.error('Error making PUT query', err)
            res.sendStatus(500)
        })
})

// PUT /api/shopping/all
router.put('/items/all', (req,res)=>{
    const isPurchased = req.body.isPurchased;
    let queryText = ''

     if (isPurchased === false){
        queryText = `
        UPDATE "shopping list" SET "purchased"=false;
        `;
    } 

    pool.query(queryText)
        .then((response)=>{
            res.sendStatus(204)
        })
        .catch((err)=>{
            console.error('Error making PUT query for all', err)
            res.sendStatus(500)
        })
})

// DELETE /shopping/:id
router.delete('/:id', (req,res)=>{
    let listId = [req.params.id];
    let queryText =''
    console.log(listId)

    if(listId){
        queryText = `
        DELETE FROM "shopping list"
        WHERE "id" = $1
        `
        pool.query(queryText, listId)
        .then((response)=>{
            res.sendStatus(204)
        })
        .catch((err)=>{
            console.error('Error making query:', queryText, 'error:', err)
            res.sendStatus(500)
        })
    } 
})

// DELETE /api/shopping/all
router.delete('/items/all', (req, res)=>{
   let queryText = `
    DELETE FROM "shopping list";
    `
    pool.query(queryText)
    .then((response)=>{
        res.sendStatus(204)
    })
    .catch((err)=>{
        console.error('Error making query:', queryText, 'error:', err)
        res.sendStatus(500)
    })
})

module.exports = router;

