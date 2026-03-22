# KYCSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ KYC ](serverapi_kyc.md "KYC")/ KYCSubscribe | [](imtserverapi_kycgroupcreate.md "KYCGroupCreate") [](imtserverapi_kycunsubscribe.md "KYCUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::KYCSubscribe
Subscribe to events and hooks associated with KYC provider configurations.
MTAPIRES IMTServerAPI::KYCSubscribe( IMTConKYCSink* sink // A pointer to the IMTConKYCSink object )  
---  
Parameters
sink
[in] A pointer to the object implementing the [IMTConKYCSink](imtconkycsink.md "IMTConKYCSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
Subscribing to events is thread safe. The same [IMTConKYCSink](imtconkycsink.md "IMTConKYCSink") interface cannot be subscribed to an event twice. In this case code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") will be returned.
The object at which 'sink' points, must remain in memory (must not be removed) until [IMTServerAPI::KYCUnsubscribe](imtserverapi_kycunsubscribe.md "KYCUnsubscribe") is called or until the plugin is deleted.