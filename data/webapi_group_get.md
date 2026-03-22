# Get by Name or Mask (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Groups ](webapi_groups.md "Groups")/ Get by Name or Mask | [](webapi_group_next.md "Get by Index") [](webapi_symbols.md "Symbols") |
| --- | --- | --- |
| --- | --- |

Getting a Group by Name
Use this request to receive a configuration of one or more groups by name or mask.
Request format
GET /api/group/get?group=name POST /api/group/get?group=name  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/group/get?group=demo\\\forex //--- server response { "retcode" : "0 Done", "answer" : {  "Group" : "demo\\\forex", "Server" : "0", "PermissionsFlags" : "2", "AuthMode" : "0", ... } //--- request to the server GET /api/group/get?mask=* //--- server response { "retcode" : "0 Done", "answer" : [ { "Group":"demo\\\forex-usd", "Server":"0", ... }, { "Group":"demo\\\forex-eur", "Server":"0", ... } ] }  
---  
Request Parameters
  * group — group name.

  * mask — one or more groups separated by commas. Specify the full name of the group, including the path. For example, demo\forex-usd. Groups can also be specified using wildcard characters: "*" (any value) and "!" (exclude). For example, demo\\*,!demo\forex-jpy — all groups in the demo subgroup except forex-jpy. For queries by mask, the server can return no more than 5,000 configurations. If the limit is exceeded, the first 5,000 records will be returned and the command will additionally return [response code 14](retcodes_common.md "Common errors").

Use only one of the parameters in the query: group or mask. If both parameters are specified, the request will only return information for the group specified in 'group'.  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — group configuration is passed in JSON format. A complete description of the passed parameters of groups is given in the ["Data structure"](webapi_group_data_format.htm#group) section. For queries by mask, the response is always sent as a JSON list (array), even if the request resulted in one or no configuration.
