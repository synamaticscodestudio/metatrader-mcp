# Delete from History (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Subscriptions ](webapi_subscription.md "Subscriptions")/ Delete from History | [](webapi_subscription_history_update.md "Update in History") [](webapi_subscription_history_get.md "Get from History") |
| --- | --- | --- |
| --- | --- |

Delete a subscription action from the server database
The request allows deleting a user subscription action directly from the server database.
Request Format
GET /api/subscription/history/delete?id=identifier POST /api/subscription/history/delete?id=identifier  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/subscription/history/delete?id=12345 //--- server response { "retcode": "0 Done" }  
---  
Request Parameters
  * id — identifier of a subscription action. The [ID](webapi_subscription_data_structure.htm#history) value is used for the identifier.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to edit subscriptions. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.