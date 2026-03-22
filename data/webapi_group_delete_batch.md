# Delete Multiple (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Groups ](webapi_groups.md "Groups")/ Delete Multiple | [](webapi_group_delete.md "Delete") [](webapi_group_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

Delete Multiple Groups
The request allows deleting multiple groups.
Request format
GET /api/group/delete_batch?group=list of names GET /api/group/delete_batch?name=list of names GET /api/group/delete_batch?index=list of indexes POST /api/group/delete_batch?group=list of names POST /api/group/delete_batch?name=list of names POST /api/group/delete_batch?index=list of indexes POST [list of indexes]  
---  
Response format
{ "retcode" : "code description", "answer" : [ response codes ] }  
---  
Example
//--- request to the server GET /api/group/delete_batch?group=demoforex-usd,demoforex-eur //--- server response { "retcode" : "0 Done", "answer" : [ 0, 13, 0  ] }  
---  
Request Parameters
  * group — names of groups to be deleted, separated by commas. The names are specified together with the path.
  * name — names of groups to be deleted, separated by commas. The names are specified together with the path.
  * index — indexes of groups to be deleted, separated by commas. Group numbering starts with 0.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of response codes regarding deletion of each of the specified groups.

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit group configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
  * A group which contains at least one account cannot be deleted. At an attempt to delete such a group, the error [2003](retcodes_configs.md "Configuration Management") will be returned.
  * The last manager group on the server cannot be deleted. At an attempt to delete such a group, the error [2001](retcodes_configs.md "Configuration Management") will be returned.
  * Only one of the parameters can be used in the request. Multiple lists are not allowed.
  * The 'name' and 'group' parameters are equivalent. They are supported for unification and backward compatibility of requests.
