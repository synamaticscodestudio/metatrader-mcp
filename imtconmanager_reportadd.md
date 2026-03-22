# ReportAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ ReportAdd | [](imtconmanager_accessnext.md "AccessNext") [](imtconmanager_reportupdate.md "ReportUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConManager::ReportAdd
Create a report access permission for a manager.
C++
MTAPIRES IMTConManager::ReportAdd( IMTConManagerReport* report // Access permission object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.ReportAdd( CIMTConManagerReport report // Access permission object )  
---  
Python (Manager API)
MTConManager.ReportAdd( report # Access permission object )  
---  
Parameters
report
[in] An object of a report access permission [IMTConManagerReport](imtconmanagerreport.md "IMTConManagerReport").
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code occurred.