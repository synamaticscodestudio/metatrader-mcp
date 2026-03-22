# ReportNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ ReportNext | [](imtconmanager_reporttotal.md "ReportTotal") [](imtconmanageraccess.md "IMTConManagerAccess") |
| --- | --- | --- |
| --- | --- |

IMTConManager::ReportNext
Get a manager's report access permission based on the permission position in the list.
C++
MTAPIRES IMTConManager::ReportNext( const UINT pos, // Position of the access permission IMTConManagerReport* report // Access permission object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.ReportNext( uint pos, // Position of the access permission CIMTConManagerReport report // Access permission object )  
---  
Python (Manager API)
MTConManager.ReportNext( pos # Position of the access permission )  
---  
MTConManager.ReportGet()  
---  
Parameters
pos
[in] Position of the access permission in the list, starting from 0.
report
[out] Access permission object. The 'access' object must be pre-created using the [IMTAdminAPI::ManagerReportCreate](imtadminapi_managerreportcreate.md "ManagerReportCreate"), [IMTManagerAPI::ManagerReportCreate](imtmanagerapi_managerreportcreate.md "ManagerReportCreate"), [IMTServerAPI::ManagerReportCreate](imtserverapi_managerreportcreate.md "ManagerReportCreate") or [IMTReportAPI::ManagerReportCreate](imtreportapi_managerreportcreate.md "ManagerReportCreate") method.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code occurred.