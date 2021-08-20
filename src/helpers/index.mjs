export function prepareQuery(model, args, likeFields = null) {
    const sanitizedArgs = sanitizeArgs(args);

    if (likeFields === null || Object.keys(sanitizedArgs).length === 0) {
        return model.where(sanitizedArgs);
    }

    return buildWhereClause(model, sanitizedArgs, likeFields);
}

function buildWhereClause(model, args, likeFields) {
    likeFields.map((field) => {
        if (typeof args[field] !== 'undefined') model.where(field, 'LIKE', `%${args[field]}%`);
    });

    return model;
}

function sanitizeArgs(args) {
    for (const key in args) {
        if (Object.hasOwnProperty.call(args, key) && (!args[key] && args[key] !== false)) {
            delete args[key];
        }
    }

    return args;
}
