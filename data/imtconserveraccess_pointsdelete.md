# PointsDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ PointsDelete | [](imtconserveraccess_pointsshift.md "PointsShift") [](imtconserveraccess_pointsclear.md "PointsClear") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::PointsDelete
Delete an access point by the index.
C++
MTAPIRES IMTConServerAccess::PointsDelete( const UINT pos // Position of the access point )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.PointsDelete( uint pos // Position of the access point )  
---  
Python (Manager API)
MTConServerAccess.PointsDelete( pos # Position of the access point )  
---  
Parameters
pos
[in] Position of the access point in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is obsolete. Use [IMTConServer::PointsDelete](imtconserver_pointsdelete.md "PointsDelete") instead.