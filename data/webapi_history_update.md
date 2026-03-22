# Update Closed (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Orders ](webapi_orders.md "Orders")/ Update Closed | [](webapi_history_get_batch.md "Get Multiple Closed") [](webapi_history_delete.md "Delete Closed") |
| --- | --- | --- |
| --- | --- |

Update a Closed Order
The request allows changing an closed order (in history) on the server.
Request Format
POST /api/history/update { Description of the order to be changed in JSON format }  
---  
Response Format
{ "retcode" : "0 Done", "answer" : { description } }  
---  
Example
//--- request to the server POST /api/history/update { "Order" : "12832917", "ExternalID" : "", "Login" : "1020", ... } //--- server response { "retcode" : "0 Done", "answer" : {  "Order" : "12832917", "ExternalID" : "", "Login" : "1020", ... } }  
---  
Request Parameters
The request has no parameters. The description of the order to be changed is passed in JSON format as an additional body. The complete description of the possible order parameters is provided under the ["Data structure"](webapi_order_data_structure.md "Data Structure") section.
  * The record to be changed is identified based on the ticket.
  * If the parameter value is not specified, the corresponding parameter will not be changed.

  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — parameters of the updated order in JSON format. The full description of order parameters is available under the [Data Structure](webapi_order_data_structure.md "Data Structure") section.

Note
An order can only be updated when connected to the same trade server on which it was created. If the order with the specified ticket is not found, response code [13](retcodes_common.md "Common errors") is returned.