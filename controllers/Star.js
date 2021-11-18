var Star = require('../models/Star');

// List of all Star 
// List of all Star 
exports.Star_list = async function (req, res) {
    try {
        theStar = await Star.find();
        res.send(theStar);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS 
// Handle a show all view 
exports.Star_view_all_Page = async function (req, res) {
    try {
        theStars = await Star.find();
        res.render('Star', { title: 'Star Search Results', results: theStar });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Star. 
exports.Star_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Star.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Star create on POST. 
exports.Star_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Star();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Star_type":"goat", "cost":12, "size":"large"} 
    document.color = req.body.color;
    document.light = req.body.light;
    document.temperature = req.body.temperature;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Star delete form on DELETE. 
exports.Star_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Star delete DELETE ' + req.params.id);
};


//Handle Star update form on PUT. 
exports.Star_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Star.findById(req.params.id)
        // Do updates of properties 
        if (req.body.Star_type)
            toUpdate.Star_type = req.body.Star_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

// Handle Star delete on DELETE. 
exports.Star_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Star.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query 
exports.Star_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Star.findById(req.query.id)
        res.render('Stardetail',
            { title: 'Star Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};