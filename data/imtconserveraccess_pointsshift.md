# PointsShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ PointsShift | [](imtconserveraccess_pointsupdate.md "PointsUpdate") [](imtconserveraccess_pointsdelete.md "PointsDelete") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::PointsShift
Move an access point in the list.
C++
MTAPIRES IMTConServerAccess::PointsShift( const UINT pos, // Position of the access point const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.PointsShift( uint pos, // Position of the access point int shift // Shift )  
---  
Python (Manager API)
MTConServerAccess.PointsShift( pos, # Position of the access point shift # Shift )  
---  
Parameters
pos
[in] Position of the access point in the list, starting with 0.
shift
[in] Shift from its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is obsolete. Use [IMTConServer::PointsShift](imtconserver_pointsshift.md "PointsShift") instead.