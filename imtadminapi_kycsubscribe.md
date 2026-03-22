# KYCSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ KYC ](imtadminapi_config_kyc.md "KYC")/ KYCSubscribe | [](imtadminapi_kycgroupcreate.md "KYCGroupCreate") [](imtadminapi_kycunsubscribe.md "KYCUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::KYCSubscribe
Subscribe to events and hooks associated with KYC provider configurations.
C++
MTAPIRES IMTAdminAPI::KYCSubscribe( IMTConKYCSink* sink // A pointer to the IMTConKYCSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.KYCSubscribe( CIMTConKYCSink sink // The IMTConKYCSink object )  
---  
Parameters
sink
[in] A pointer to the object implementing the [IMTConKYCSink](imtconkycsink.md "IMTConKYCSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
Subscribing to events is thread safe. The same [IMTConKYCSink](imtconkycsink.md "IMTConKYCSink") interface cannot be subscribed to an event twice. In this case code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") will be returned.
The object at which 'sink' points, must remain in memory (must not be removed) until [IMTAdminAPI::KYCUnsubscribe](imtadminapi_kycunsubscribe.md "KYCUnsubscribe") is called or until the plugin is deleted.