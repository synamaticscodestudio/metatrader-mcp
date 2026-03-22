# KYCUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ KYC ](serverapi_kyc.md "KYC")/ KYCUnsubscribe | [](imtserverapi_kycsubscribe.md "KYCSubscribe") [](imtserverapi_kycadd.md "KYCAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::KYCUnsubscribe
Unsubscribe from events and hooks associated with KYC provider configurations.
MTAPIRES IMTServerAPI::KYCUnsubscribe( IMTConKYCSink* sink // A pointer to the IMTConKYCSink object )  
---  
Parameters
sink
[in] A pointer to the object implementing the [IMTConKYCSink](imtconkycsink.md "IMTConKYCSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is paired with [IMTServerAPI::KYCSubscribe](imtserverapi_kycsubscribe.md "KYCSubscribe"). If an attempt is made to unsubscribe from the interface which has not been previously subscribed to, the [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.