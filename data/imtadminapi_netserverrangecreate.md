# NetServerRangeCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerRangeCreate | [](imtadminapi_netservercreate.md "NetServerCreate") [](imtadminapi_netserveraddressrangecreate.md "NetServerAddressRangeCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerRangeCreate
Create an object of the range of orders, deals or accounts.
C++
IMTConServerRange* IMTAdminAPI::NetServerRangeCreate()  
---  
.NET
CIMTConServerRange CIMTAdminAPI.NetServerRangeCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConServerRange](imtconserverrange.md "IMTConServerRange") interface. In case of failure, it returns Null.
Note
The created object must be deleted by calling the [IMTConServerRange::Release](imtconserverrange_release.md "Release") method of this object.