function allowCrossDomain(req, res, next) {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

    var origin = req.headers.origin;
    if (_.contains(app.get('allowed_origins'), origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
}

module.exports = {
    allowCrossDomain
}
