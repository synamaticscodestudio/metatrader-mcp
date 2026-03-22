# ReportUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Reports ](imtadminapi_config_report.md "Functions")/ ReportUpdate | [](imtadminapi_reportunsubscribe.md "ReportUnsubscribe") [](imtadminapi_reportupdatebatch.md "ReportUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ReportUpdate
Add or update a report configuration.
C++
MTAPIRES IMTAdminAPI::ReportUpdate( IMTConReport* report // An object of report configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.ReportUpdate( CIMTConReport report // An object of report configuration )  
---  
Python
AdminAPI.ReportUpdate( report # An object of report configuration )  
---  
Parameters
report
[in] An object of report configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.