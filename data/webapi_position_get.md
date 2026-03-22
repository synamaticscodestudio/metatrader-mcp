# Get by Symbol (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Positions ](webapi_positions.md "Positions")/ Get by Symbol | [](webapi_position_data_structure.md "Data Structure") [](webapi_position_get_total.md "Get Total") |
| --- | --- | --- |
| --- | --- |

Getting a Position by Symbol
This request allows to receive a client's position by the symbol name.
Request format
GET /api/position/get?login=login&symbol=name POST /api/position/get?login=login&symbol=name  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/position/get?login=764636&symbol=EURUSD //--- server response { "retcode" : "0 Done", "answer" : {  "Position" : "617", "ExternalID" : "", "Login" : "764636", "Dealer" : "0", "Symbol" : "EURUSD", "Action" : "0", "Digits" : "5", "DigitsCurrency" : "2", "Reason" : "16", ... }  
---  
Request Parameters
  * login — the login of a client.
  * symbol — the name of the symbol for which you need to get a position.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — position parameters in JSON format. The complete description of the passed position parameters is given in the ["Data structure"](webapi_position_data_structure.md "Data Structure") section.

Note
  * The request should only be used for [netting accounts](group_position.htm#netting), in which only one position per symbol can be open at a time. For hedging accounts, use [/api/position/get_batch](webapi_position_get_batch.md "Get Multiple"). When using [/api/position/get](webapi_position_get.md "Get by Symbol") for hedging accounts having multiple positions for the specified symbol, the request will only return the first of them.

  * The request only works with open positions on the client's account. The history of positions is formed on the side of client terminals based on the history of trades. It is impossible to obtain it.
