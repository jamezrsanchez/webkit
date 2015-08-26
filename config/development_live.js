module.exports = {
	
	// mongoDB access
	database: {
		host: 'localhost',
		port: 27017,
		db: 'app_1067',
		options: {
			auto_reconnect: true
		}
	},

	// Bind port/IP
	server: {
		port: 3000,
		host: "webhookit.evennode.com"
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