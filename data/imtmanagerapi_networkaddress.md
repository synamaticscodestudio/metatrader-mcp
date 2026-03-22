# NetworkAddress (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Operations with Connection ](imtmanagerapi_network.md "Network Functions")/ NetworkAddress | [](imtmanagerapi_networkserver.md "NetworkServer") [](imtmanagerapi_config.md "Configuration Functions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NetworkAddress
Receive IP address of the server Manager API is currently connected to.
C++
MTAPIRES IMTManagerAPI::NetworkAddress( MTAPISTR& address // Server address )  
---  
.NET
MTRetCode CIMTManagerAPI.NetworkAddress( out string  address // Server address )  
---  
Python
ManagerAPI.NetworkAddress()  
---  
Parameters
address
[out] A reference to the IP address of the server Manager API is connected to.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.