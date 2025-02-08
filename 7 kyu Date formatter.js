const moment = require('moment');

function getDate(uts, loc) {
    return moment.unix(uts).format((formats[loc] || 'DD/MM/YYYY').toUpperCase());
}