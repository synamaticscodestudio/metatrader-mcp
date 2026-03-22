# Update (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Deals ](webapi_deal.md "Deals")/ Update | [](webapi_deal_get_batch.md "Get Multiple") [](webapi_deal_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

Deal Update
The request allows changing a deal on the server.
Request Format
POST /api/deal/update { Description of the deal to be changed in JSON format }  
---  
Response Format
{ "retcode" : "0 Done", "answer" : { description } }  
---  
Example
//--- request to the server POST /api/position/update { "Deal" : "11918642", "ExternalID" : '', "Login" : "1020", ... } //--- server response { "retcode" : "0 Done", "answer" : {  "Deal" : "11918642", "ExternalID" : '', "Login" : "1020", ... } }  
---  
Request Parameters
The request has no parameters. The description of the deal to be changed is passed in JSON format as an additional body. The complete description of the possible deal parameters is provided under the [Data Structure](webapi_deal_data_structure.md "Data Structure") section.
  * The record to be changed is identified based on the ticket.
  * If the parameter value is not specified, the corresponding parameter will not be changed.

  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — updated position parameters in JSON format. The complete description of the deal parameters is given under the [Data Structure](webapi_deal_data_structure.md "Data Structure") section.

Note
A deal can only be updated when connected to the same trade server on which it was created. If the deal with the specified ticket is not found, response code [13](retcodes_common.md "Common errors") is returned.