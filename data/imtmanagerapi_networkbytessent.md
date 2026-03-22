# NetworkBytesSent (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Operations with Connection ](imtmanagerapi_network.md "Network Functions")/ NetworkBytesSent | [](imtmanagerapi_networkrescan.md "NetworkRescan") [](imtmanagerapi_networkbytesread.md "NetworkBytesRead") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NetworkBytesSent
Receive the number of bytes sent to the server via Manager API. All copies of [IMTAdminAPI](imtadminapi.md "Administrator Interface") and [IMTManagerAPI](imtmanagerapi.md "Manager Interface") in the current process are considered.
C++
UINT64 IMTManagerAPI::NetworkBytesSent()  
---  
.NET
uint CIMTManagerAPI.NetworkBytesSent()  
---  
Python
ManagerAPI.NetworkBytesSent()  
---  
Return Value
Number of bytes sent to the server via Manager API. All copies of [IMTAdminAPI](imtadminapi.md "Administrator Interface") and [IMTManagerAPI](imtmanagerapi.md "Manager Interface") in the current process are considered.