# Check Positions (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Positions ](webapi_positions.md "Positions")/ Check Positions | [](webapi_position_backup_restore.md "Restore from Backup") [](webapi_position_fix.md "Fix Position") |
| --- | --- | --- |
| --- | --- |

Check Positions
This request allows checking the correctness of account's trading positions based on the history of deals.
Request Format
GET /api/position/check?login=login POST /api/position/check?login=login  
---  
Response Format
{ "retcode" : "code description", "current" : [ description of positions ] "invalid" : [ description of positions ] "missed" : [ description of positions ] "nonexsit" : [ description of positions ] }  
---  
Example
//--- request to the server GET /api/position/check?login=73339 //--- server response { "retcode" : "0 Done", "answer" : [ {  "Position" : "618", "ExternalID" : "", "Login" : "764636", ... }, ... ], "invalid" : [ {  "Position" : "619", "ExternalID" : "", "Login" : "764636", ... }, ... ], "missed" : [ {  "Position" : "620", "ExternalID" : "", "Login" : "764636", ... }, ], "nonexist" : [ {  "Position" : "621", "ExternalID" : "", "Login" : "764636", ... }, ] ]   
---  
Request Parameters
  * login — login of the user whose positions you want to check.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * current — array of current positions on the account, in JSON format. The complete description of the passed position parameters is provided under the [Data Structure](webapi_position_data_structure.md "Data Structure") section.
  * invalid — during the check, the platform calculates what positions a client should have based on his history of trades. Calculated positions are compared with actual ones. If the calculate list contains positions that do not match actual positions, such records will be passed to the invalid array.
  * missed — positions that were calculated based on the client's history and that are not found among actual positions are placed into this array. In other words, missing positions are placed into the 'missed' array.
  * nonexist — the client's actual positions that are not found in the calculated list based on the history of deals are added to this array. In other words, the client's odd positions that do not exist in the history are added to the 'nonexist' array.

Note
If you need to correct positions based on the history of deals, you should use the [/api/position/fix](webapi_position_fix.md "Fix Position") request.