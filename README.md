# Webtasks

### Summary
This is a tool I made to retrieve AWS pricing using the webtask tool from Auth0.  It uses JavaScript to automate certain tasks.  In this task, I am using HTTP protocols to get a JSON of Amazon pricing for the East Coast region.  Amazon has examples suggesting to use Dynamodb, but for this small project, we will jsut retrieve the prices.

### Requirements
1.  To use webtask and AWS, you will need to have the Node Package Manager (NPM) set up on your system.  You can download it from [here](https://www.npmjs.com/get-npm).   Once you have NPM in your system and configured per Node's instructions, you will need to install Webtask and the AWS SDK as well.  

2.  For Amazon, you will need an AWS account.  It is free for personal use for 12 months.  You read about the various ways to install AWS SDK from [here](https://github.com/aws/aws-sdk-js) or with NPM, you can simply put the `npm install aws-sdk` in your console for NPM to take care of the rest.

3.  The last thing you will need is the webtask CLI.  You can download the webtask CLI through [here](https://webtask.io/docs/101).

### To use
You can clone this repo through GitHub's GUI or you can do that with `git clone https://github.com/mcsmithers/webtasks` at your terminal of choice.  

Navigate to the directory and initiate the project with the command of ` wt init email@domain.com` with your own email you set up with webtask.

### To Run
To run this, all you need to do then is navigate to the directory with the js file and run the commands `node autho-0-hax.js` and it will run in the terminal.




