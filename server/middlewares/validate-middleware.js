const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody  = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        console.error(err);
        const message = err.error[0].message;
        console.error(message);
        res.status(400).json({ msg: message });
    }
};

module.exports = validate;
