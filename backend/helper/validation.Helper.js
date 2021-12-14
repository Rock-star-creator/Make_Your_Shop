const { validationResult } = require("express-validator");

exports.expressValidation = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({ status: 0, errors: errors.array() });

    }

    return next()
}

