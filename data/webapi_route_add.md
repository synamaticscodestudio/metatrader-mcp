# Add (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Routing ](webapi_route.md "Routing")/ Add | [](webapi_route_data_structure.md "Data Structure") [](webapi_route_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

Add Routing Rule
The request allows adding and updating routing rules in the trading platform.
Request Format
POST /api/route/add { Description of the configuration to be created/updated, in JSON format }  
---  
Response Format
{ "retcode" : "code description", "answer" : { Description of the created/updated configuration in JSON format } }  
---  
Example
//--- request to the server POST /api/route/add { "Name" : "Send to gateway", "Mode" : "1", "Request" : "33554431", "Type" : "255", "Action" : "1001", "Conditions" : [ { "Condition" : "1000", "Rule" : "3", "ValueUInt" : "1815998", } ], "Dealers" : [ { "Login" : "227" } ] } //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "Send to gateway", "Mode" : "1", "Request" : "33554431", "Type" : "255", "Flags" : "0", "Action" : "1001", "ActionValueInt" : "0", "ActionValueUInt" : "0", "ActionValueFloat" : "0.00", "ActionValueString" : "", "Conditions" : [ { "Condition" : "1000", "Rule" : "3", "ValueInt" : "0", "ValueUInt" : "1815998", "ValueFloat" : "0.00", "ValueString" : "" } ] "Dealers" : [ { "Login" : "227", "Name" : "MetaTrader 5 Gateway" } ] } }  
---  
Request Parameters
The request has no parameters. The description of the rule being created/updated is passed in JSON format as an additional body. The JSON description of the rule passed during creation is the same as the description returned by the server. The complete description of the possible parameters is provided in the ["Data structure"](webapi_route_data_structure.md "Data Structure") section.
Response Parameters
  * retcode � if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer � the description of the created routing rule in JSON format. The description of parameters is given in the "[Data structure](webapi_manager_data_structure.md "Data Structure")" section

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * When the request is run, the existence of the configuration to be added is checked. The key field to check is "Name". If the configuration already exists, the settings of this configuration are updated.
  * When adding a configuration, the fields which are not specified in the JSON description will be filled with default values. If a default value cannot be used, the request will return the error [3](retcodes_common.md "Common errors").
  * When you update the configuration, only those parameters that are explicitly specified in the JSON description are changed. Other parameters stay unchanged.
  * Before adding, the correctness of the account is checked. If the record is incorrect, the error code [3](retcodes_common.md "Common errors") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit routing configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
