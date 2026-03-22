# Get Positions (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Gateways ](webapi_gateway.md "Gateways")/ Get Positions | [](webapi_gateway_module_get.md "Get Module by Name") [](webapi_feeder.md "Data Feeds") |
| --- | --- | --- |
| --- | --- |

Request Gateway Trade Positions
The request allows receiving the current state of positions on trading accounts which are used by the gateway in an external system. Depending on the gateway tab, positions can be displayed via one or several accounts.
Request Format
GET /api/gateway/get_position?gateway_id=identifier POST /api/gateway/get_position?gateway_id=identifier  
---  
Response Format
{ "time" : "snapshot time", "positons" : [ description of positions ] }  
---  
Example
//--- request to the server GET /api/gateway/get_position?gateway_id=6 //--- server response { "time": 1574775746, "positions": [ { "Position": "0", "ExternalID": "", "Login": "0", "Dealer": "0", "Symbol": "AUDNZD", ... } ] }  
---  
Request Parameters
  * gateway_id — gateway ID for which position statuses in an external system should be requested.

Response Parameters
  * time — Position status snapshot in the number of seconds elapsed since 01.01.1970. Depending on the gateway (and external trading system), position statuses can be submitted either in real time mode or only at the end of a trading session.
  * positions — array of positions. The complete description of passed server parameters is available under the ["Data structure"](webapi_position_data_structure.md "Data Structure") section.

Note
Positions requests should be supported by the gateway.