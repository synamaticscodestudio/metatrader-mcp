# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Deals ](webapi_deal.md "Deals")/ Delete | [](webapi_deal_update.md "Update") [](webapi_deal_backup_list.md "Get Backups List") |
| --- | --- | --- |
| --- | --- |

Delete a Deal
The request allows deleting one or more deals by ticket.
Request Format
GET /api/deal/delete?ticket=tickets POST /api/deal/delete?ticket=tickets POST /api/deal/delete [ 1012, 4034 ]  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/deal/delete?ticket=73339,73340 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * ticket — the ticket of the deal to be deleted. Multiple IDs can be specified as separated by commas. Tickets can also be specified as an array in the POST request body.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * A deal can only be deleted when connected to the same trade server on which it was created. If the deal with the specified ticket is not found, response code [13](retcodes_common.md "Common errors") is returned.
  * To use the function, the manager account used by the Web API application must have the following permissions: [RIGHT_TRADE_DELETE](imtconmanager_enum.htm#enmanagerrights) and [RIGHT_TRADES_MANAGER](imtconmanager_enum.htm#enmanagerrights).
