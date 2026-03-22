# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Settings Files ](webapi_setting.md "Settings Files")/ Delete | [](webapi_setting_set.md "Update") [](webapi_subscription.md "Subscriptions") |
| --- | --- | --- |
| --- | --- |

Delete Settings
The request allows deleting a settings file from the server.
Request Format
GET /api/setting/delete?section=directory&key=file POST /api/setting/delete?section=directory&key=file  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server /api/setting/delete?section=web&key=settings.json //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * section — the name of the subfolder in the manager account directory, from which you want to delete the settings file.
  * key — the name of the settings file.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
The path to the settings file is formed as follows: [trade server directory]\settings\\[manager login]\section\key. section and key are the first and the second parameters of the request, manager login is the manager's account using which the application is [connected to the trade server](webapi_rest_authentication.md "Authentication").