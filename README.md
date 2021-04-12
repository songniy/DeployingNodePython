## Intro
This is a nodeJS boilerplate application utilizing an express backend that calls
a python script by promisifying exec. It is set up to be deployed to Heroku
with Travis-CI.

## To start on localhost:
The libraries are there only for demonstration purposes and are not
actually being used.
npm install
npm run python-install

For Windows:
npm run build-watch-client
npm run start-server
Then go to localhost:8080

For All Others:
npm run start-dev

## To Deploy
Go to his medium article to get more explanation on everything
https://songniy.medium.com/nodejs-with-python-deployment-using-heroku-and-travis-ci-ea5d5fcdafc3

## OR
follow these steps:
create a heroku app
add the node/js,python, and aptfile buildpacks.

go to .travis.yml file
change the app to your app's name and the branch to the git hub branch you want to deploy off of.
update the api_key with your own.

You may need to go into travis-ci.com to adjust some settings if travis-ci is not automatically picking up your github changes for this new repo. Also don't forget to add integrations for travis to your github repo.

Thanks for checking this out and let me know if you have any problems or thoughts!
