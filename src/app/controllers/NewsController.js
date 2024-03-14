class NewsController{
    // [GET] /news
    index(req, res){
        res.render('news');
    
    }
    // [GET] /news/:slug
    show(req, res){
        // in ra địa chỉ
        console.log("đia chi",req.params.slug);
        res.send('New Details');
    }
}
module.exports = new NewsController;
