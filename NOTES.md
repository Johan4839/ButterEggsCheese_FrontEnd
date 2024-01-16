✅ Basic setup for the front end: 3x3 grid
✅ e2e test: start button visible
✅ e2e test: start button clickable --> grid visible (green, because of dummy grid being shown)

🙌 Add functionality to call the API to start a new game
🙌 - Create component test: function to start new game > call API to start new game > id returned > set id in state

Unit
 - Call API to start new game
     ✅ -- Succesfull request --> 200 response and gameId returned
     🙌 -- Bad request --> 404 response and gameId is '' (literal)

❔ Mike: check component test case. For us it feels natural to also assert the output. But this is, strictly speaking, not what should be done, right?