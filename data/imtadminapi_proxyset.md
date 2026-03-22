# ProxySet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Connection to the Server ](imtadminapi_connection.md "Connecting to the Server")/ ProxySet | [](imtadminapi_unsubscribe.md "Unsubscribe") [](imtadminapi_network.md "Network Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ProxySet
Set parameters of connection to the trading platform through a proxy server.
C++
void IMTAdminAPI::ProxySet( const MTProxyInfo& proxy // Proxy server )  
---  
.NET
void CIMTAdminAPI.ProxySet( MTProxyInfo  proxy // Proxy server )  
---  
Parameters
proxy
[in] A reference to the [MTProxyInfo](mtproxyinfo.md "MTProxyInfo") structure that contains information about the parameters of connection via a proxy server.