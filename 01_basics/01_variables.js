const accountId = 123456
let accountEmail = "h@g.com"
var accountPass = "234560"
accountCity = "Gurgaon"

// accountId=123

accountEmail = "ChangeEmail@g.com"
accountPass = "321456"
accountCity = "New Delhi"


console.table([accountId,accountEmail,accountCity,accountCity])
/*
┌─────────┬─────────────────────┐
│ (index) │       Values        │
├─────────┼─────────────────────┤
│    0    │       123456        │
│    1    │ 'ChangeEmail@g.com' │
│    2    │     'New Delhi'     │
│    3    │     'New Delhi'     │
└─────────┴─────────────────────┘
NOT TO USE VAR, instead USE LET
*/