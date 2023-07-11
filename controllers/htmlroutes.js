const router = require('express').Router();



const posts = [
    {
        id: 1,
        title: "Why MVC is so important",
        user: "Juder",
        content: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic."
    },
    {
        id: 2,
        title: "Authentication vs Authorization",
        user: "Craig Xen",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestias aspernatur quam dolor officiis, perferendis natus optio! Totam quibusdam, praesentium ullam quae excepturi omnis, quia sunt, quos eum voluptatum sed."
    },
    {
        id: 3,
        title: "ORM",
        user: "Squiggle Squaggle",
        content: "Iridoseclitus erie erie my name is squiggle squiggle"
    }
]

// GET route for rendering the Main page template
router.get('/', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
    } else {
        res.render('login');
    }
    //Rendering individual post template
    

});

router.get('/post/:num', async (req, res) => {
    return res.render('post', posts[req.params.num - 1]);
});

router.get('/login', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/blogcontainer');
        return;
    }
    res.render('login');
});

router.get('/signup', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/blogcontainer');
        return;
    }
    res.render('signup');
});

module.exports = router;