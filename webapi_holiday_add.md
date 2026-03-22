# Add (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Holidays ](webapi_holiday.md "Holidays")/ Add | [](webapi_holiday_data_structure.md "Data Structure") [](webapi_holiday_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

Add Holiday
The request allows adding and updating holiday configurations in the trading platform.
Request Format
POST /api/holiday/add { Description of the configuration to be created/updated, in JSON format }  
---  
Response Format
{ "retcode" : "code description", "answer" : { Description of the created/updated configuration in JSON format } }  
---  
Example
//--- request to the server POST /api/holiday/add { "Mode" : "1", "Year" : "2010", "Month" : "1", "Day" : "1", "From" : "754", "To" : "825", "Description" : "Holiday", "Symbols" : [ { "Path" : "*" } ] } //--- server response { "retcode" : "0 Done", "answer" : { "Mode" : "1", "Year" : "2010", "Month" : "1", "Day" : "1", "From" : "754", "To" : "825", "Description" : "Holiday", "Symbols" : [ { "Path" : "*" } ] } }  
---  
Request Parameters
The request has no parameters. The description of the holiday configuration being created/updated is passed in JSON format as an additional body. The JSON description of the rule passed during creation is the same as the description returned by the server. The complete description of the possible parameters is provided in the ["Data structure"](webapi_holiday_data_structure.md "Data Structure") section.
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — description of the created holiday configuration in JSON format. The description of parameters is given in the "[Data structure](webapi_holiday_data_structure.md "Data Structure")" section

Note
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * When the request is run, the existence of the server configuration to be added is checked. The key fields for comparison are: "Year", "Month", "Day", "From", "To" and "Description". If the configuration already exists, the settings of this configuration are updated.
  * When adding a configuration, the fields which are not specified in the JSON description will be filled with default values. If a default value cannot be used, the request will return the error [3](retcodes_common.md "Common errors").
  * When you update the configuration, only those parameters that are explicitly specified in the JSON description are changed. Other parameters stay unchanged.
  * Before adding, the correctness of the account is checked. If the record is incorrect, the error code [3](retcodes_common.md "Common errors") is returned.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit holiday configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
