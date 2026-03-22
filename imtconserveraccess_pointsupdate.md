# PointsUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ PointsUpdate | [](imtconserveraccess_pointsadd.md "PointsAdd") [](imtconserveraccess_pointsshift.md "PointsShift") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::PointsUpdate
Update the access point (public address) at the specified position in the list.
C++
MTAPIRES IMTConServerAccess::PointsUpdate( const UINT pos, // Position of the access point LPCWSTR address // Address and port of the access point )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.PointsUpdate( uint  pos, // Position of the access point string address // Address and port of the access point )  
---  
Python (Manager API)
MTConServerAccess.PointsUpdate( pos, # Position of the access point address # Address and port of the access point )  
---  
Parameters
pos
[in] Position of the access point in the list, starting with 0.
address
[in] The updated address and port of the access point, separated by a colon.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An access point is specified in the format address:port.
The length of the address is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
The method is obsolete. Use [IMTConServer::PointsUpdate](imtconserver_pointsupdate.md "PointsUpdate") instead.