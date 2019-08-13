const fetch = require("node-fetch");
fetch('https://senior.104-dev.com.tw/api/v2/my/courses',{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0MjcwNiIsIkNTIjoiNzkyZDY4MmI5MTQ4NGNmNTg4MjhlYjcyMDRkNDVjMTciLCJpYXQiOjE1NTkxMjU5MDAsImV4cCI6MTU2MTcxNzkwMH0.pwbd6Jj2zhqjso1UtLn_yIV6-SJ-S_y-P8MOAiWCTxg',
        'Referer': 'https://senior.104-dev.com.tw',
    },
    // body: JSON.stringify(data)
}).then(function checkStatus(response) {
    console.log('response.status', response.status);
})
