const BlogPost = require('../models/BlogPost');
class SiteController {
    home(req, res, next) {
        // BlogPost.find({}, function (err, BlogPost)
        // {
        //     if(!err) { res.render('home', BlogPost); }
        //     else {
        //         next(err);
        //     }
        // }
        // )
        BlogPost.find({}).lean()
        .then(BlogPost => {
            res.render('home', {BlogPost});
        }
        )
        .catch(next)

    }
    search(req, res) {
        res.render('search');
    }
    newpost(req, res) {
        res.send('New Post In Here')    
    }
}

module.exports = new SiteController();