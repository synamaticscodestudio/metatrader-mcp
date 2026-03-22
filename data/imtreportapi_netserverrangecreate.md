# NetServerRangeCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Network ](imtreportapi_config_network.md "Network")/ NetServerRangeCreate | [](imtreportapi_netservercreate.md "NetServerCreate") [](imtreportapi_netservertotal.md "NetServerTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::NetServerRangeCreate
Create an object of the range of orders, deals or accounts.
IMTConServerRange* IMTReportAPI::NetServerRangeCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConServerRange](imtconserverrange.md "IMTConServerRange") interface. In case of failure, it returns Null.
Note
The created object must be deleted by calling the [IMTConServerRange::Release](imtconserverrange_release.md "Release") method of this object.