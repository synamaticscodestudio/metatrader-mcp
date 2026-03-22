# Fix Position (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Positions ](webapi_positions.md "Positions")/ Fix Position | [](webapi_position_check.md "Check Positions") [](webapi_trade.md "Trade Requests") |
| --- | --- | --- |
| --- | --- |

Fix Positions
This request allows correcting account's trading positions based on the history of deals.
Request Format
GET /api/position/fix?login=login POST /api/position/fix?login=login  
---  
Response Format
{ "retcode" : "code description", "answer" : [ description of positions ] }  
---  
Example
//--- request to the server GET /api/position/fix?login=73339 //--- server response { "retcode" : "0 Done", "answer" : [ {  "Position" : "618", "ExternalID" : "", "Login" : "73339", ... }, {  "Position" : "617", "ExternalID" : "", "Login" : "73339", ... }, ...  
---  
Request Parameters
  * login — login of the user whose positions should be fixed.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of positions after correction based on history, in JSON format. The complete description of the passed position parameters is provided under the [Data Structure](webapi_position_data_structure.md "Data Structure") section.

Note
Upon the execution of the request, the platform calculates a client's positions based on the history of his deals, and corrects current positions if necessary.