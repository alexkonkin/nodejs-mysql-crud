var config = {
	database: {
		host:	  'db', 	// database host
		user: 	  '${DB_USER}', 		// your database username
		password: '${DB_PASSWORD}', 		// your database password
		port: 	  3306, 		// default MySQL port
		db: 	  '${DB_NAME}' 		// your database name
	},
	server: {
		host: '${IP_EXT}',
		port: '3000'
	}
}

module.exports = config
