# ManagerUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Managers ](serverapi_config_manager.md "Managers")/ ManagerUnsubscribe | [](imtserverapi_managersubscribe.md "ManagerSubscribe") [](imtserverapi_manageradd.md "ManagerAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ManagerUnsubscribe
Unsubscribe from events and hooks associated with the configuration of managers.
MTAPIRES IMTServerAPI::ManagerUnsubscribe( IMTConManagerSink* sink // A pointer to the IMTConManagerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConManagerSink](imtconmanagersink.md "IMTConManagerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::ManagerSubscribe](imtserverapi_managersubscribe.md "ManagerSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.