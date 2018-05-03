const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => res.send('===== OK =====\n'));

app.post('/slack-commands', (req, res) => {
  const { token, user_id, channel_id, command, text } = req.body;
  console.log(req.body);
  res.send({
    text: `<@${user_id}> invoked *${command}* in <#${channel_id}> with the following text: ${text}`
  });
});

app.listen(3000, () => console.log('Listening on port 3000...'));
