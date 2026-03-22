# Update (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Positions ](webapi_positions.md "Positions")/ Update | [](webapi_position_get_batch.md "Get Multiple") [](webapi_position_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

Position Update
The request allows changing a position on the server.
Request Format
POST /api/position/update { Description of the position to be changed in JSON format }  
---  
Response Format
{ "retcode" : "0 Done", "answer" : { description } }  
---  
Example
//--- request to the server POST /api/position/update { "Position" : "618", "ExternalID" : "", "Login" : "764636", ... } //--- server response { "retcode" : "0 Done", "answer" : {  "Position" : "618", "ExternalID" : "", "Login" : "764636", ... } }  
---  
Request Parameters
The request has no parameters. The description of the position to be changed is passed in JSON format as an additional body. The complete description of the possible position parameters is provided under the ["Data structure"](webapi_position_data_structure.md "Data Structure") section.
  * The record to be changed is identified based on the ticket.
  * If the parameter value is not specified, the corresponding parameter will not be changed.

  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — updated position parameters in JSON format. The full description of position parameters is available under the [Data Structure](webapi_position_data_structure.md "Data Structure") section.

Note
A position can only be updated when connected to the same trade server on which it was created. If the position with the specified ticket is not found, response code [13](retcodes_common.md "Common errors") is returned.