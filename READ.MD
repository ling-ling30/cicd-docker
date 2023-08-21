Please before compose up to docker , change the DATABASE_URL to docker-environment on the .env and .env.testing

npm run migrate
npm run migrate:test <---- for migration on testing database
npm run test <------------ for unit testing
