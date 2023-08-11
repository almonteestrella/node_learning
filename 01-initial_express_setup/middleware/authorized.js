const authorized = (req, res, next) => {
    const { user } = req.query;

    if (user) {
        req.user = { name: 'any name', id: 2 };
        next();
    } else {
        res.status(401).send('Unathorized');
    }
};

module.exports = authorized;
