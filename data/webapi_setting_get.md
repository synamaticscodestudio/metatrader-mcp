# Get (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Settings Files ](webapi_setting.md "Settings Files")/ Get | [](webapi_setting.md "Settings Files") [](webapi_setting_set.md "Update") |
| --- | --- | --- |
| --- | --- |

Get Settings
The request allows receiving a settings file from the trading server.
Request Format
GET /api/setting/get?section=directory&key=file POST /api/setting/get?section=directory&key=file  
---  
Response Format
{ "retcode" : "code description", "answer" : { JSON-description } }  
---  
Example
//--- request to the server /api/setting/get?section=web&key=settings.json //--- server response { "retcode" : "0 Done", "answer" :  { "RecordID" : "100", "Flags" : "1", "Windows" : "10" } }  
---  
Request Parameters
  * section — the name of the subfolder in the manager account directory, from which you want to receive the settings file.
  * key — the name of the settings file.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. For example:

  * [3](retcodes_common.md "Common errors") — invalid parameters, for example the name of the folder or file.
  * [13](retcodes_common.md "Common errors") — the requested file is not found.
  * [6](retcodes_common.md "Common errors") — not enough memory to receive the file.
  * answer — settings in JSON format.

Note
  * The path to the settings file is formed as follows: [trade server directory]\settings\\[manager login]\section\key. section and key are the first and the second parameters of the request, manager login is the manager's account using which the application is [connected to the trade server](webapi_rest_authentication.md "Authentication").
  * The Web API only supports JSON content. If the file contents are of a different format (for example if the manager was created via [Manager API](imtmanagerapi_setting.md "Settings Files")), an empty field will be returned in the answer.
