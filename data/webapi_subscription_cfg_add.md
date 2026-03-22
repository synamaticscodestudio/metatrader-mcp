# Add (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Subscriptions ](webapi_subscription_cfg.md "Subscriptions")/ Add | [](webapi_subscription_cfg_data_format.md "Data Structure") [](webapi_subscription_cfg_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

Add a subscription configuration.
The request allows adding and updating subscription configurations in the trading platform.
Request Format
POST /api/subscription/config/add { Description of the subscription configuration to be created/updated, in JSON format }  
---  
Response Format
{ "retcode" : "code description", "answer" : { Description of the created/updated subscription configuration, in JSON format } }  
---  
Example
//--- request to the server POST /api/subscription/config/add { "Name" : "Personal Manager", "Type" : "0", "Image" : "5" } //--- server response { "retcode" : "0 Done", "answer" : { "ID" : "132591622364003374", "ParentID" : "0", "Type" : "5", "Name" : "Personal Manager", "URL" : "", "AgreementURL" : "", "Flags" : "0", "Control" : "0", ... } }  
---  
Request Parameters
The request has no parameters. The description of the subscription configuration being created/updated is passed in JSON format as an additional body. The JSON description of the configuration passed during creation is the same as the description returned by the server. The complete description of possible server parameters is given under the ["Data structure"](webapi_subscription_cfg_data_format.md "Data Structure") section.
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — description of the created server in JSON format. The description of parameters is given in the "[Data structure](webapi_group_data_format.md "Data Structure")" section

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * When the request is run, the existence of the server configuration to be added is checked. A key field for comparison is the configuration name. If the configuration already exists, the settings of this configuration are updated.
  * When adding a configuration, the fields which are not specified in the JSON description will be filled with default values. If a default value cannot be used, the request will return error [3](retcodes_common.md "Common errors").
  * When you update the configuration, only those parameters that are explicitly specified in the JSON description are changed. Other parameters are not changed.
  * Record correctness is checked before it is added. If the record is incorrect, error code [3](retcodes_common.md "Common errors") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to access the Subscriptions section. Otherwise, error code [8](retcodes_common.md "Common errors") is returned.
