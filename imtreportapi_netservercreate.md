# NetServerCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Network ](imtreportapi_config_network.md "Network")/ NetServerCreate | [](imtreportapi_config_network.md "Network") [](imtreportapi_netserverrangecreate.md "NetServerRangeCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::NetServerCreate
Create an object of configuration of the platform components.
IMTConServer* IMTReportAPI::NetServerCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConServer](imtconserver.md "IMTConServer") interface. In case of failure, it returns Null.
Note
The created object must be deleted by calling the [IMTConServer::Release](imtconserver_release.md "Release") method of this object.