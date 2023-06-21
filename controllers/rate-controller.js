const Rate = require("../models/rate");

async function index(req, res) {
    const user = req.session.user;
    const userRates = Rate.getByUserId(user.id);

    return res.render('rate', {
        page_tab: 'home',
        user_name: req.session.user.name,
        avatar_name: req.session.user.image_name,
        rates: userRates,
    });
}

async function indexPost(req, res) {
    const estimator = req.session.user;
    const userId = req.body.user_id || 0;
    const rate = req.body.rate || 0;

    if (!userId || !rate) {
        return res.send({ success: false , errors: [ 'all fields is required' ]});
    }

    if(!await Rate.canEstimate(estimator.id, userId)){
        return res.send({ success: false , errors: ['you cant estimate']});
    }

    const newRate = new Rate(userId, estimator.id, rate);
    await newRate.save();

    return res.send({ success: true , errors: []});
}


module.exports = {
    index,
    indexPost
}