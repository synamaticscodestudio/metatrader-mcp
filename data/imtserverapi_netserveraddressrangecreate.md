# NetServerAddressRangeCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ NetServerAddressRangeCreate | [](imtserverapi_netserverrangecreate.md "NetServerRangeCreate") [](imtserverapi_netserverbackupfoldercreate.md "NetServerBackupFolderCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NetServerAddressRangeCreate
Create an object of the range of IP addresses. These objects are used for configuring the Anti-DDoS Proxy Server component which enables the use of [external Anti-DDoS service providers](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_network/network_anti_ddos).
IMTConServerAddressRange* IMTServerAPI::NetServerAddressRangeCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConServerAddressRange](imtconserveraddressrange.md "IMTConServerAddressRange") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConServerAddressRange::Release](imtconserveraddressrange_release.md "Release") method of this object.