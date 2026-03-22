# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Groups ](webapi_groups.md "Groups")/ Get by Index | [](webapi_group_list.md "Get List") [](webapi_group_get.md "Get by Name or Mask") |
| --- | --- | --- |
| --- | --- |

Getting a Group by Index
Get the configuration of one or more groups by index in the list.
Request format
GET /api/group/next?index=index&count=number POST /api/group/next?index=index&count=number  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/group/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : {  "Group" : "demo\\\forex", "Server" : "0", "PermissionsFlags" : "2", "AuthMode" : "0", ... }  
---  
Request Parameters
  * index — the index of the group starting with 0.
  * count — the number of configurations to get. If the parameter is not set or is equal to 1, the query returns one object with a configuration description. If count > 1, the query will return an array of objects. For example, when sending a query with parameters ?index=1&count=3, you will get three configurations, from the second to the fourth one.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code will be returned. If an index of a nonexistent group is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — group configuration is passed in JSON format. A complete description of the passed parameters of groups is given in the ["Data structure"](webapi_group_data_format.htm#group) section.
