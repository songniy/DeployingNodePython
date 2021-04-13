## Intro
This is a nodeJS boilerplate application utilizing an express backend that can execute
a python script. It is set up to be deployed to Heroku with Travis-CI.

note: The python libraries are there only for demonstration purposes and are not
actually being used.

## To start on localhost:

npm install

npm run python-install

For Windows Users:
-------------------------------------------
npm run build-watch-client

npm run start-server



For All Others:
-------------------------------------------
npm run start-dev

Then go to localhost:8080

## To Deploy
If you are new to deploying, I highly suggest going to to his medium article to get started:

https://songniy.medium.com/nodejs-with-python-deployment-using-heroku-and-travis-ci-ea5d5fcdafc3

## OR

create a heroku app
add the node/js,python, and aptfile buildpacks.

go to .travis.yml file
change the app to your app's name and the branch to the git hub branch you want to deploy off of.
update the api_key with your own.

Go into .git/config and make sure your [travis] slug and url settings are all correct.

You may need to go into travis-ci.com to adjust some settings if travis-ci is not automatically picking up your github changes for this new repo. Also don't forget to add integrations for travis to your github repo.


Thanks for checking this out and let me know if you have any problems or thoughts!
