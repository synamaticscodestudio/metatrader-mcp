# Update in Database (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Subscriptions ](webapi_subscription.md "Subscriptions")/ Update in Database | [](webapi_subscription_add.md "Add to Database") [](webapi_subscription_delete.md "Delete from Database") |
| --- | --- | --- |
| --- | --- |

Update a subscription in the server database
The request allows editing a user subscription directly in the server database.
Request Format
POST /api/subscription/update [ Array of subscription descriptions in JSON format ]  
---  
Response Format
{ "retcode" : "0 Done", "answer" : [ response codes for each subscription ] }  
---  
Example
//--- request to the server POST /api/subscription/update [ { "Timestamp": "446824746", "Login": "1000", "Subscription": "330629627", "Status": "0", "Flags": "0", "TimeSubscribe": "1612778109", "TimeRenewal": "1612778109", "TimeExpire": "1615370109" }, { "Timestamp": "446824746", "Login": "1000", "Subscription": "330629627", "Status": "0", "Flags": "0", "TimeSubscribe": "1612778109", "TimeRenewal": "1612778109", "TimeExpire": "1615370109" } ] //--- server response { "retcode": "0 Done", "answer": [ 0, 17 ] }  
---  
Request Parameters
The request has no parameters. The description of the subscriptions to be edited is passed in JSON format, as an additional body. The key field for finding an exiting record is ID.
All required fields of a subscription must be filled in, not only the ones that need to be changed. It is recommended that you first [receive](webapi_subscription_get.md "Get Subscriptions") a subscription from the server, change the required fields, and then send it back to the server.
The complete description of possible parameters is provided in the ["Data structure"](webapi_subscription_data_structure.htm#subscription) section.
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of response codes regarding the update of each subscription.

Note
  * During the request, it is NOT checked whether editing a subscription is allowed in accordance with the [ControlMode](webapi_subscription_cfg_data_format.htm#subscription) parameter. Changes take place directly in the database.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to edit subscriptions. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.
