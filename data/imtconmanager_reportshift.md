# ReportShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ ReportShift | [](imtconmanager_reportdelete.md "ReportDelete") [](imtconmanager_reporttotal.md "ReportTotal") |
| --- | --- | --- |
| --- | --- |

IMTConManager::ReportShift
Shift a report access permission for a manager.
C++
MTAPIRES IMTConManager::ReportShift( const UINT pos, // Position of the access permission const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.ReportShift( uint pos, // Position of the access permission int shift // Shift )  
---  
Python (Manager API)
MTConManager.ReportShift( pos, # Position of the access permission shift # Shift )  
---  
Parameters
pos
[in] Permission position in the list, starting from 0.
shift
[in] Shift of a permission relative to its current position. A negative value means shift towards the top of the list, a positive value shifts towards the end.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code occurred.