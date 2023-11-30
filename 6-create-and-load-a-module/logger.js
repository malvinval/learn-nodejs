const log = (message) => {
    console.log(message);
}

const err = (message) => {
    console.error(`Err: ${message}`);
}

module.exports = {
    logf: log,
    errf: err
}