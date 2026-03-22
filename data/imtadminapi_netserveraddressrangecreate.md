# NetServerAddressRangeCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerAddressRangeCreate | [](imtadminapi_netserverrangecreate.md "NetServerRangeCreate") [](imtadminapi_netserverclusterstatecreate.md "NetServerClusterStateCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerAddressRangeCreate
Create an object of the range of IP addresses. These objects are used for configuring the Anti-DDoS Proxy Server component which enables the use of [external Anti-DDoS service providers](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_network/network_anti_ddos).
C++
IMTConServerAddressRange* IMTAdminAPI::NetServerAddressRangeCreate()  
---  
.NET
CIMTConServerAddressRange CIMTAdminAPI.NetServerAddressRangeCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConServerAddressRange](imtconserveraddressrange.md "IMTConServerAddressRange") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConServerAddressRange::Release](imtconserveraddressrange_release.md "Release") method of this object.