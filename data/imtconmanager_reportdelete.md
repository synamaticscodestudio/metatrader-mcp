# ReportDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ ReportDelete | [](imtconmanager_reportupdate.md "ReportUpdate") [](imtconmanager_reportshift.md "ReportShift") |
| --- | --- | --- |
| --- | --- |

IMTConManager::ReportDelete
Delete a report access permission for a manager.
C++
MTAPIRES IMTConManager::ReportDelete( const UINT pos // Position of the access permission )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.ReportDelete( uint pos // Position of the access permission )  
---  
Python (Manager API)
MTConManager.ReportDelete( pos # Position of the access permission )  
---  
Parameters
pos
[in] Permission position in the list, starting from 0.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code occurred.