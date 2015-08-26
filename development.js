module.exports = {
	
	// mongoDB access
	database: {
		host: 'evennode.com',
		port: 27017,
		db: 'app_1067',
		user: 'app_1067',
		password: '1password2',
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
		key: 'app_1067',
		secret: '1password2'
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
