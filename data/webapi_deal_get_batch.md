# Get Multiple (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Deals ](webapi_deal.md "Deals")/ Get Multiple | [](webapi_deal_get_page.md "Get Paged") [](webapi_deal_update.md "Update") |
| --- | --- | --- |
| --- | --- |

Get Multiple Deals
The request allows receiving information related to multiple deals, based on a list of logins, tickets or groups.
Request Format
GET /api/deal/get_batch?login=logins&group=groups&ticket=tickets&from=date&to=date&symbol=symbol POST /api/deal/get_batch?login=logins&group=groups&ticket=tickets&from=date&to=date&symbol=symbol POST /api/deal/get_batch?from=date&to=date&symbol=symbol { "ticket": [ 1012, 4034 ], "group": [ demoforex-eur, demoforex-usd ], "ticket": [ 96639, 13549 ], }   
---  
Response Format
{ "retcode" : "code description", "answer" : [ description of deals ] }  
---  
Example
//--- request to the server GET /api/deal/get_batch?login=764636,764637&from=1546300800&to=1603093199 //--- server response { "retcode" : "0 Done", "answer" : [ {  "Deal" : "11918642", "ExternalID" : '', "Login" : "764636", ... }, {  "Deal" : "11918643", "ExternalID" : "", "Login" : "764637", ... }, ... ] }  
---  
Request Parameters
  * login — the list of logins, the positions of which you want to receive. A commas separated list. Can also be specified as an array in the POST request body.
  * group — the list of groups, for users from which you want to receive deals. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex. Groups can also be specified as an array in the POST request body.
  * ticket — the list of deal tickets to receive. Can be specified as an array in the POST request body.
  * from — the beginning of the period for requesting deals. The date is specified in seconds elapsed since 01.01.1970. The parameter is required when requesting operations by login or group.
  * to — the end of the period for requesting deals. The date is specified in seconds elapsed since 01.01.1970. The parameter is required when requesting operations by login or group.
  * symbol — the symbol deals for which you are requesting. You can specify multiple symbols separated by commas. Only makes sense when used together with the 'login' or 'group' parameter.

Operations can be requested with only one parameter: by logins, by groups, or by tickets. You cannot specify all the three parameters together.  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — deal array in JSON format. The complete description of the passed deal parameters is given under the [Data structure](webapi_deal_data_structure.md "Data Structure") section.
