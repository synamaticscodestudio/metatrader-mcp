# Add Subgroup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Symbols ](webapi_symbols.md "Symbols")/ Add Subgroup | [](webapi_symbol_get_group.md "Get by Group") [](webapi_symbol_group_delete.md "Delete Subgroup") |
| --- | --- | --- |
| --- | --- |

Add a Subgroup
Add a subgroup of symbols.
Request Format
POST /api/symbol_group/add [ list of names ]  
---  
Response Format
{ "retcode" : "code description", "answer" : [  {"Name":"name"}, {"Name":"name"}, ... ] }  
---  
Examples
//--- request to the server POST /api/symbol_group/add {"Name":"New group"} //--- server response { "retcode" : "0 Done", "answer" : {  "Name" : "New group" } }  
---  
Request Parameters
No parameters. The name of one or more subgroups is passed in JSON format as an additional command body.
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — list of names of created subgroups.

Note
The command only works when connected to the main trading server. Otherwise, error [12001](retcodes_api.md "API") is returned.