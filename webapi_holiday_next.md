# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Holidays ](webapi_holiday.md "Holidays")/ Get by Index | [](webapi_holiday_total.md "Get Total") [](webapi_holiday_get_all.md "Get All") |
| --- | --- | --- |
| --- | --- |

Get Holiday by Index
The request allows receiving a holiday configuration by an index in the list.
Request Format
GET /api/holiday/next?index=index POST /api/holiday/next?index=index  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/holiday/next?index=0 { "retcode" : "0 Done", "answer" : { "Mode" : "1", "Year" : "2010", "Month" : "1", "Day" : "1", "From" : "754", "To" : "825", "Description" : "Holiday", "Symbols" : [ { "Path" : "*" } ] } } }  
---  
Request Parameters
  * index — holiday configuration index starting with 0.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent holiday is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — description of the holiday configuration in JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_holiday_data_structure.md "Data Structure") section.
