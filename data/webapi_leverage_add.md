# Add (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Floating Margin ](webapi_leverage.md "Floating Margin")/ Add | [](webapi_leverage_data_structure.md "Data Structure") [](webapi_leverage_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

Add Configuration
Create or update the floating margin configuration on the server.
Request Format
POST /api/leverage/add { Description of the configuration to be created, in JSON format }  
---  
Response Format
{ "retcode" : "code description", "answer" : { Description of the created configuration, in JSON format } }  
---  
Example
//--- request to the server POST /api/leverage/add { "Name" : "Night rules", "Rules" : [ { "Name": "Forex symbols", "Description": "Night rules for Forex symbols", "RangeMode": "0", ... } //--- server response { "retcode" : "0 Done", "answer" : { "Name" : "Night rules", "Rules" : [ { "Name": "Forex symbols", "Description": "Night rules for Forex symbols", "RangeMode": "0", ... } }  
---  
Request Parameters
This command has no parameters. The description of the configuration to be created is transmitted in JSON format as an additional command body. When adding a configuration, you must describe all of it [parameters](webapi_leverage_data_structure.md "Data Structure").
The JSON description of the configuration passed during creation is similar to the description returned by the server. For example:
Response Parameters
  * retcode — if successful, the command returns [response code](retcodes_successful.md "Successful completion") 0\. Otherwise, the code of the encountered error is returned.
  * answer — parameters of the created configuration in JSON format. The full description of the passed symbol parameters is provided in the [Data structure](webapi_leverage_data_structure.md "Data Structure") section.

Note
  * This command works only when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * During command execution, the existence of the configuration to be added is checked. The key field for comparison is the name. If the configuration already exists, the settings of this configuration are updated.
  * When a configuration is updated, only those parameters that are explicitly specified in the JSON description are replaced. Other parameters stay unchanged.
  * A record is validated before being added. If the record is incorrect, error code [3](retcodes_common.md "Common errors") is returned.
  * To run the command, [the manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator and to edit leverage configurations. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.
