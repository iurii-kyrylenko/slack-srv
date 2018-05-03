## Handling a Slack slash command and echoing the details back to the user.

1. Run server locally: `yarn start`

2. Expose the local server to internet: `ngrok http 3000`

3. Create a slash command in your slack application and provide the exposed address as a request URL

4. Type the slash command in slack. 

### TO DO:
1. Verify token

2. Use AWS lambda. See blueprint `slack-echo-command`.
