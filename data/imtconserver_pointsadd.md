# PointsAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServer ](imtconserver.md "IMTConServer")/ PointsAdd | [](imtconserver_antiddosserver.md "AntiDDoSServer") [](imtconserver_pointsupdate.md "PointsUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConServer::PointsAdd
Add an access point (public address).
C++
MTAPIRES IMTConServer::PointsAdd( LPCWSTR path // Address and port of the access point )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServer.PointsAdd( string path // Address and port of the access point )  
---  
Python (Manager API)
MTConServer.PointsAdd( path # Address and port of the access point )  
---  
Parameters
path
[in] Address and port of the access point, separated by a colon.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An access point is specified in the format address:port.
The length of the address is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
Connections from other platform components, client connections from terminals and API (for access servers) are accepted through public access points.