const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  // Access our User model and run .findAll() method)
  Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

/*router.get('/:id', (req, res) => {
  Comment.findOne({
    where: { id: req.params.id }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comments here' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});*/

// Create New comment
router.post('/', withAuth, (req, res) => {
  //check the session
  //console.log("Testing------------------");
  if (req.session) {
    console.log("user_id:" + req.session.user_id);
    console.log("post_id:" + req.body.post_id);
    console.log("feedback:" + req.body.feedback);
    Comment.create({
      feedback: req.body.feedback,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

// To update any comment
router.put('/', withAuth, (req, res) => {
  Comment.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id' });
        return;
      }
      return res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//Only signed in users can delete comments
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;