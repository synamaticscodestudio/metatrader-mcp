# Get from History (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Subscriptions ](webapi_subscription.md "Subscriptions")/ Get from History | [](webapi_subscription_history_delete.md "Delete from History") [](webapi_common_request.md "Common Requests") |
| --- | --- | --- |
| --- | --- |

Get a history of user's subscription actions
The request allows receiving a history of actions related to the user's subscriptions.
Request Format
GET /api/subscription/history/get?from=date&to=date&login=login GET /api/subscription/history/get?id=identifier POST /api/subscription/history/get?from=date&to=date&login=login POST /api/subscription/history/get?id=identifier  
---  
Response Format
{ "retcode" : "0 Done", "answer" : [ one or more subscription descriptions ] }  
---  
Example
//--- request to the server GET /api/subscription/history/get?id=2 //--- server response { "retcode": "0 Done", "answer": { "Id": "2", "Timestamp": "841632718", "Login": "1000", "Subscription": "330629627", "Record": "2", "TimeCreated": "1613642109", "Action": "1", "Flags": "0", "Amount": "123123", "AmountDeal": "0" } }  
---  
Request Parameters
  * id — identifier of a subscription action. The [ID](webapi_subscription_data_structure.htm#history) value is used for the identifier.
  * login — the login of the user whose history of subscription actions you want to obtain.
  * from — the beginning of the history requesting period. The date is specified in seconds elapsed since 01.01.1970. The parameter is required when using the 'login' parameter.
  * to — the end of the history requesting period. The date is specified in seconds elapsed since 01.01.1970. The parameter is required when using the 'login' parameter.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to view subscriptions. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.