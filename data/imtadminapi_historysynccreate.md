# HistorySyncCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ History Synchronization ](imtadminapi_config_historysync.md "Functions")/ HistorySyncCreate | [](imtadminapi_config_historysync.md "Functions") [](imtadminapi_historysyncsubscribe.md "HistorySyncSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HistorySyncCreate
Create an object of configuration of price data synchronization.
C++
IMTConHistorySync* IMTAdminAPI::HistorySyncCreate()  
---  
.NET
CIMTConHistorySync CIMTAdminAPI.HistorySyncCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConHistorySync](imtconhistorysync.md "IMTConHistorySync") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConHistorySync::Release](imtconhistorysync_release.md "Release") method of this object.