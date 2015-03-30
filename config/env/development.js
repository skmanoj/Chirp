'use strict';

module.exports = {
	db: 'mongodb://localhost/chirp-dev',
	app: {
		title: 'Chirp - Development Environment'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '647511225394576',
		clientSecret: process.env.FACEBOOK_SECRET || '9c62a385056aa54dd3b9b1be758a4797',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '326795449527-dp3nf8e2se0cskhsa0qk1vrv9ov094dt.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || '4qI-91mq1wzm2X4cAxf0QO_C',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
