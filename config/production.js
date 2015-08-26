module.exports = {
	
	// mongoDB access
	database: {
		host: 'apollo.modulusmongo.net',
		port: '27017',
		db: 'ny4voQan',
		options: {
			auto_reconnect: true
		}
	},

	// Bind port/IP
	server: {
		port: 3000,
		host: "webhookit2-50416.onmodulus.net"
	},
	

	sessions: {
		key: 'some-key',
		secret: 'some-We1rD sEEEEEcret!'
	},
	
	// Features
	cron: {
		enabled: true
	},

	users: {
		creation: {
			// Is the creation of new users public ?
			"public": true
		}
	}
	
};