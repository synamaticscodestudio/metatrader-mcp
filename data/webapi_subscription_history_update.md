# Update in History (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Subscriptions ](webapi_subscription.md "Subscriptions")/ Update in History | [](webapi_subscription_history_add.md "Add to History") [](webapi_subscription_history_delete.md "Delete from History") |
| --- | --- | --- |
| --- | --- |

Update subscription action in the history database
The request allows editing a user subscription action directly in the server database.
Request Format
POST /api/subscription/history/update [ Array of subscription action descriptions in JSON format ]  
---  
Response Format
{ "retcode" : "0 Done", "answer" : [ response codes for each subscription action ] }  
---  
Example
//--- request to the server POST /api/subscription/history/update [ { "Timestamp": "-74492877", "Login": "1000", "Subscription": "3735542259", "Record": "1", "TimeCreated": "1612777198", "Action": "0", "Flags": "0", "Amount": "0", "AmountDeal": "0" }, { "Timestamp": "841632718", "Login": "1000", "Subscription": "330629627", "Record": "2", "TimeCreated": "1613642109", "Action": "1", "Flags": "0", "Amount": "123123", "AmountDeal": "0" } ]  
---  
Request Parameters
The request has no parameters. The description of the actions to be edited is passed in JSON format, as an additional body. The key field for finding an exiting record is ID.
All required action fields must be filled in, not only the ones that need to be changed. It is recommended that you first [receive](webapi_subscription_history_get.md "Get from History") an action from the server, edit the required fields and then send it back to the server.
The complete description of possible parameters is provided in the ["Data structure"](webapi_subscription_data_structure.htm#history) section.
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of response codes for each of the subscription actions being updated.

Note
To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to edit subscriptions. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.