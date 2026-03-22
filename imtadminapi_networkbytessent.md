# NetworkBytesSent (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Operations with Connection ](imtadminapi_network.md "Network Functions")/ NetworkBytesSent | [](imtadminapi_networkrescan.md "NetworkRescan") [](imtadminapi_networkbytesread.md "NetworkBytesRead") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetworkBytesSent
Receive the number of bytes sent to the server via Manager API. All copies of [IMTAdminAPI](imtadminapi.md "Administrator Interface") and [IMTManagerAPI](imtmanagerapi.md "Manager Interface") in the current process are considered.
C++
UINT64 IMTAdminAPI::NetworkBytesSent()  
---  
.NET
ulong CIMTAdminAPI.NetworkBytesSent()  
---  
Python
AdminAPI.NetworkBytesSent()  
---  
Return Value
Number of bytes sent to the server via Manager API. All copies of [IMTAdminAPI](imtadminapi.md "Administrator Interface") and [IMTManagerAPI](imtmanagerapi.md "Manager Interface") in the current process are considered.