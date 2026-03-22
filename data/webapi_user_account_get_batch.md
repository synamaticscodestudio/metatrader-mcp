# Get Multiple Trade States (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Get Multiple Trade States | [](webapi_user_account_get.md "Get Trade State") [](webapi_user_logins.md "Get List") |
| --- | --- | --- |
| --- | --- |

Get Multiple Trade States
The request allows receiving information related to the states of multiple trading accounts, based on a list of logins or groups.
Request format
GET /api/user/account/get_batch?login=logins GET /api/user/account/get_batch?group=groups POST /api/user/account/get_batch?login=logins POST /api/user/account/get_batch?group=groups  
---  
Response format
{ "retcode" : "code description", "answer" : [ description of trading states ] }  
---  
Example
//--- request to the server GET /api/user/account/get?login=764636,764635 //--- server response { "retcode" : "0 Done", "answer" : [ { "Login" : "764636", "CurrencyDigits" : "2", "Balance"": "26000.00", "Credit"": "0.00", "Margin" : "11.73", "MarginFree" : "25981.83", "MarginLevel"": "221598.98", "MarginLeverage" : "10", "Profit" : "-6.44", ... }, { "Login" : "764635", "CurrencyDigits" : "2", "Balance"": "35000.00", "Credit"": "0.00", "Margin" : "956.73", "MarginFree" : "19981.83", "MarginLevel"": "119982.98", "MarginLeverage" : "10", "Profit" : "500.87", ... } ] }  
---  
Request Parameters
  * login — the login of the account for which the trading state is requested.
  * login — list of user logins for which you want to request the trading states. A commas separated list.
  * group — the list of groups, for accounts from which you want to receive the trading states. A commas separated list.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array of trading states in JSON format. The full description of passed account parameters is available under the ["Data structure"](webapi_user_data_structure.htm#account) section.

Note
  * Trade account state can be received only in case it has open orders or positions or a trade activity has been detected at the account after the last server restart.
  * Only one of the parameters can be used in the request. Multiple lists are not allowed.
