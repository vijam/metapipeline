const schedule = require('node-schedule')

const job = schedule.scheduleJob('*/5 * * *', () => {
    console.log('The answer to life, the universe, and everything!');
});

module.exports = {
    job
}