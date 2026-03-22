# PointsUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ PointsUpdate | [](imtconserver_pointsadd.md "PointsAdd") [](imtconserver_pointsshift.md "PointsShift") |
| --- | --- | --- |
| --- | --- |

IMTConServer::PointsUpdate
Update the access point (public address) at the specified position in the list.
C++
MTAPIRES IMTConServer::PointsUpdate( const UINT pos, // Position of the access point LPCWSTR address // Address and port of the access point )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.PointsUpdate( uint pos, // Position of the access point string address // Address and port of the access point )  
---  
Python (Manager API)
MTConServer.PointsUpdate( pos, # Position of the access point address # Address and port of the access point )  
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
Connections from other platform components, client connections from terminals and API (for access servers) are accepted through public access points.