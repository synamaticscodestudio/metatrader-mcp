# NetworkServer (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Operations with Connection ](imtmanagerapi_network.md "Network Functions")/ NetworkServer | [](imtmanagerapi_networkbytesread.md "NetworkBytesRead") [](imtmanagerapi_networkaddress.md "NetworkAddress") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NetworkServer
Receive the name of the server Manager API is currently connected to.
C++
MTAPIRES IMTManagerAPI::NetworkServer( MTAPISTR& server // Server name )  
---  
.NET
MTRetCode CIMTManagerAPI.NetworkServer( out string server // Server name )  
---  
Python
ManagerAPI.NetworkServer()  
---  
Parameters
server
[out] A reference to the name of the server Manager API is connected to.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.