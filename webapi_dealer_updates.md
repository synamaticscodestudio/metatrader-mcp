# Get Request Result (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Trade Requests ](webapi_trade.md "Trade Requests")/ Get Request Result | [](webapi_dealer_send.md "Send Request") [](webapi_users.md "Users") |
| --- | --- | --- |
| --- | --- |

Get Request Execution Result
The request allows receiving the result of a trade request execution on the server. The execution result is returned in two forms: as an analog object [IMTConfirm](imtconfirm.md "IMTConfirm") (this variant is obsolete but is still used by some traders) and an analog object [IMTRequest](imtrequest.md "IMTRequest").
Request Format
POST /api/dealer/get_request_result?id=identifiers  
---  
Response Format
{ "retcode" : "code description", "request identifier" : [ "result" : { result description as an IMTConfirm object }, "answer" : { result description as an IMTResult object } ] }  
---  
Example
//--- request to the server GET /api/dealer/get_request_result?id=1,2,3 //--- server response { "retcode" : "0 Done", "1": [ { "result": { "ID": "1", "DealID": "", "OrderID": "", ... } }, { "answer": { "ID": "6", "IDClient": "1", "Login": "1001", "SourceLogin": "1000", .... } } ], "2": [ { "result": { "ID": "2", "DealID": "", "OrderID": "", ... } }, { "answer": { "ID": "7", "IDClient": "2", "Login": "1001", "SourceLogin": "1000", ... } } ], ... }  
---  
Request Parameters
  * id — the identifier of the request for which you wish to receive data. Multiple names can be specified as separated by commas. The request identifier is returned in response to [/api/dealer/send_request](webapi_dealer_send.md "Send Request").

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * id — an array of descriptions of trade requests, where the upper node is the identifiers of these requests. The execution result is returned in two forms: as an analog object [IMTConfirm](imtconfirm.md "IMTConfirm") (this variant is obsolete but is still used by some traders) and an analog object [IMTRequest](imtrequest.md "IMTRequest"). The description of parameters is provided under the [Data structure](webapi_trade_data_structure.md "Data Structure") section. If the "id" parameter is not specified, the list of all events (results) for all active [subscriptions](webapi_dealer_updates.htm#subscription) will be returned.

Subscription to request events
After each call of /api/dealer/send_request, a [subscription to events](webapi_dealer_send.md "Send Request") related to the execution of this request is created automatically. The subscription is automatically deleted after the final status of the relevant request is received. If events for a subscription are not selected within three minutes, the subscription is automatically deleted to free up the used resources.
If the network connection of the Web API client is lost (after which it is necessary to log in again), all previously created subscriptions are automatically deleted. All subscriptions are only available within the framework of the physical Web API connection through which the trade request was sent.
Note
  * If there are no events for a request, the node with the trade request identifier and an empty list of parameters will be returned. For example: "3" : [].
  * If the event subscription related to the request specified in the "id" parameter no longer exists, the appropriate results will not be included in the response.
