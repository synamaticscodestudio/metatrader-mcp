# ReportModuleNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Reports ](imtadminapi_config_report.md "Functions")/ ReportModuleNext | [](imtadminapi_reportmoduletotal.md "ReportModuleTotal") [](imtadminapi_reportmoduleget.md "ReportModuleGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ReportModuleNext
Get a report module by the index.
C++
MTAPIRES IMTAdminAPI::ReportModuleNext( const UINT pos, // Position of the configuration IMTConReportModule* module // An object of the report module configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.ReportModuleNext( uint pos, // Position of the configuration CIMTConReportModule module // An object of the report module configuration )  
---  
Python
AdminAPI.ReportModuleNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
module
[out] The report module configuration object. The module object must be first created using the [IMTAdminAPI::ReportModuleCreate](imtadminapi_reportmodulecreate.md "ReportModuleCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies a report configuration with a specified index to the module object.