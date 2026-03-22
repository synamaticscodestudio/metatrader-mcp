# CustomUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Custom Functions ](serverapi_custom.md "Custom Functions")/ CustomUnsubscribe | [](imtserverapi_customsubscribe.md "CustomSubscribe") [](imtserverapi_customcreatestream.md "CustomCreateStream") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CustomUnsubscribe
Unsubscribe from events and hooks associated with the execution of custom functions.
MTAPIRES IMTServerAPI::CustomUnsubscribe( IMTCustomSink* sink // A pointer to the IMTCustomSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTCustomSink](imtcustomsink.md "Custom Events Interface") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::CustomSubscribe](imtserverapi_customsubscribe.md "CustomSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.
The method is only used in plugins running on the trade server.