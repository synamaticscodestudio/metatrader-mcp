# ReportNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Reports ](imtadminapi_config_report.md "Functions")/ ReportNext | [](imtadminapi_reporttotal.md "ReportTotal") [](imtadminapi_reportget.md "ReportGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ReportNext
Get a report configuration by the index.
C++
MTAPIRES IMTAdminAPI::ReportNext( const UINT pos, // Position of the configuration IMTConReport* report // An object of report configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.ReportNext( uint  pos, // Position of the configuration CIMTConReport report // An object of report configuration )  
---  
Python
AdminAPI.ReportNext( pos, # Position of the configuration report # An object of report configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
report
[out] An object of report configuration. The report object must be first created using the [IMTAdminAPI::ReportCreate](imtadminapi_reportcreate.md "ReportCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a report with a specified index to the report object.