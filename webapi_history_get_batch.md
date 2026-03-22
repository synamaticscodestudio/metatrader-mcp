# Get Multiple Closed (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Orders ](webapi_orders.md "Orders")/ Get Multiple Closed | [](webapi_history_get_page.md "Get Closed Paged") [](webapi_history_update.md "Update Closed") |
| --- | --- | --- |
| --- | --- |

Get Multiple Closed Orders
The request allows receiving information related to multiple closed orders (from history), based on a list of logins, tickets or groups.
Request Format
GET /api/history/get_batch?login=logins&group=groups&ticket=tickets&from=date&to=date&symbol=symbol POST /api/history/get_batch?login=logins&group=groups&ticket=tickets&from=date&to=date&symbol=symbol POST /api/history/get_batch?from=date&to=date&symbol=symbol { "ticket": [ 1012, 4034 ], "group": [ demoforex-eur, demoforex-usd ], "ticket": [ 96639, 13549 ], }   
---  
Response Format
{ "retcode" : "code description", "answer" : [ description of orders ] }  
---  
Example
//--- request to the server GET /api/history/get_batch?ticket=12832917,12832918 //--- server response { "retcode" : "0 Done", "answer" : [ {  "Order" : "12832917", "ExternalID" : "", "Login" : "1020", ... }, {  "Order" : "12832918", "ExternalID" : "", "Login" : "1020", ... }, ... ] }  
---  
Request Parameters
  * login — list of logins, the orders of which you want to receive. A commas separated list. Can be specified as an array in the POST request body.
  * group — the list of groups, for users from which you want to receive orders. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex. Groups can also be specified as an array in the POST request body.
  * ticket — the list of order tickets to receive. Can be specified as an array in the POST request body.
  * from — the beginning of the period for requesting orders. The date is specified in seconds elapsed since 01.01.1970. The parameter is required when requesting operations by login or group.
  * from — the end of the period for requesting orders. The date is specified in seconds elapsed since 01.01.1970. The parameter is required when requesting operations by login or group.
  * symbol — the symbol orders for which you are requesting. You can specify multiple symbols separated by commas. Only makes sense when used together with the 'login' or 'group' parameter.

Operations can be requested with only one parameter: by logins, by groups, or by tickets. You cannot specify all the three parameters together.  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — order array in JSON format. The complete description of the passed order parameters is given in the ["Data structure"](webapi_order_data_structure.md "Data Structure") section.
