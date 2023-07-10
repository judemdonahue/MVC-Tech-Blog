const router = require('express').Router();

const posts = [
    {
        id: 1,
        title: "Why MVC is so important",
        user: "Juder",
        body: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic."
    },
    {
        id: 2,
        title: "Authentication vs Authorization",
        user: "Craig Xen",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias aspernatur quam dolor officiis, perferendis natus optio! Totam quibusdam, praesentium ullam quae excepturi omnis, quia sunt, quos eum voluptatum sed."
    },
    {
        id: 3,
        title: "ORM",
        user: "Squiggle Squaggle",
        body: "Iridoseclitus erie erie my name is squiggle squiggle"
    }
]

// GET route for rendering the Main page template
router.get('/', async (req, res) => {

    //Rendering individual post template
    res.render('individualpost');

});

module.exports = router;