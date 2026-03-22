# Get All (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Holidays ](webapi_holiday.md "Holidays")/ Get All | [](webapi_holiday_next.md "Get by Index") [](webapi_manager.md "Managers") |
| --- | --- | --- |
| --- | --- |

Get All Holidays
Get all existing holiday configurations.
Request Format
GET /api/holiday/get_all POST /api/holiday/get_all  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/holiday/get_all //--- server response { "retcode" : "0 Done", "answer" : [ { "Mode" : "1", "Year" : "2025", "Month" : "1", "Day" : "1", "From" : "754", "To" : "825", "Description" : "Holiday", "Symbols" : [ { "Path" : "*" } ] }, { "Mode" : "1", "Year" : "2025", "Month" : "10", "Day" : "10", "From" : "754", "To" : "825", "Description" : "Holiday", "Symbols" : [ { "Path" : "*" } ] } ] }  
---  
Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array with descriptions of holiday configurations in JSON format. The complete description of the transmitted server parameters is provided under the ["Data Structure"](webapi_holiday_data_structure.md "Data Structure") section.
