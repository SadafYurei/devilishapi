const app = require('./app');
const settings = require('./config/settings');

app.listen(process.env.PORT || 5000, () => {
	console.log('Test Server Is Ready')
});