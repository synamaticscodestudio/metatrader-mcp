# NetServerRangeCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ NetServerRangeCreate | [](imtserverapi_netserverclusterstatecreate.md "NetServerClusterStateCreate") [](imtserverapi_netserveraddressrangecreate.md "NetServerAddressRangeCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NetServerRangeCreate
Create an object of the range of orders, deals or accounts.
IMTConServerRange* IMTServerAPI::NetServerRangeCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConServerRange](imtconserverrange.md "IMTConServerRange") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConServerRange::Release](imtconserverrange_release.md "Release") method of this object.