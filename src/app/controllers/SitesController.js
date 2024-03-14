class SitesController{
    // [GET] /
    home(req, res){
        res.render('home');
    
    }
    // [GET] /search
    search(req, res){
        // in ra địa chỉ
        res.render('search');
    }
}
module.exports = new SitesController;
