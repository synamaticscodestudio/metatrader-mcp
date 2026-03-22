# Delete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Groups ](webapi_groups.md "Groups")/ Delete | [](webapi_group_add_batch.md "Add Multiple") [](webapi_group_delete_batch.md "Delete Multiple") |
| --- | --- | --- |
| --- | --- |

Deleting a Group
Using this request you can delete a group with the specified name.
Request format
GET /api/group/delete?group=name POST /api/group/delete?group=name  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/group/delete?group=demoforex //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * group — the name of the group to delete (including the path).

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.

Notes
  * This command works only when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * To run the command, [the manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator and edit group configurations. Otherwise, it returns the error code [8](retcodes_common.md "Common errors").
  * You cannot delete a group which contains at least one account. At an attempt to delete, the error code [2003](retcodes_configs.md "Configuration Management") is returned.
  * You cannot delete the last manager group on a server. At an attempt to delete, the error code [2001](retcodes_configs.md "Configuration Management") is returned.
