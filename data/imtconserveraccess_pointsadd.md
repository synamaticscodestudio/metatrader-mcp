# PointsAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ PointsAdd | [](imtconserveraccess_antiflooderrors.md "AntifloodErrors") [](imtconserveraccess_pointsupdate.md "PointsUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::PointsAdd
Add an access point (public address).
C++
MTAPIRES IMTConServerAccess::PointsAdd( LPCWSTR path // Address and port of the access point )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.PointsAdd( string path // Address and port of the access point )  
---  
Python (Manager API)
MTConServerAccess.PointsAdd( path # Address and port of the access point )  
---  
Parameters
path
[in] Address and port of the access point, separated by a colon.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An access point is specified in the format address:port.
The length of the address is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
The method is obsolete. Use [IMTConServer::PointsAdd](imtconserver_pointsadd.md "PointsAdd") instead.