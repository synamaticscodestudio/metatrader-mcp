# ManagerSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Managers ](serverapi_config_manager.md "Managers")/ ManagerSubscribe | [](imtserverapi_managerreportcreate.md "ManagerReportCreate") [](imtserverapi_managerunsubscribe.md "ManagerUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ManagerSubscribe
Subscribe to events and hooks associated with the configuration of managers.
MTAPIRES IMTServerAPI::ManagerSubscribe( IMTConManagerSink* sink // A pointer to the IMTConManagerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConManagerSink](imtconmanagersink.md "IMTConManagerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConManagerSink](imtconmanagersink.md "IMTConManagerSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::ManagerUnsubscribe](imtserverapi_managerunsubscribe.md "ManagerUnsubscribe") or until the plugin is deleted.