# CommonSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Common ](imtadminapi_config_common.md "Functions")/ CommonSubscribe | [](imtadminapi_commoncreateagreement.md "CommonCreateAgreement") [](imtadminapi_commonunsubscribe.md "CommonUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::CommonSubscribe
Subscribe to events associated with the common configuration of the platform.
C++
MTAPIRES IMTAdminAPI::CommonSubscribe( IMTConCommonSink* sink // A pointer to the IMTConCommonSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.CommonSubscribe( CIMTConCommonSink sink // CIMTConCommonSink object )  
---  
Python
AdminAPI.CommonSubscribe( sink # IMTConCommonSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConCommonSink](imtconcommonsink.md "IMTConCommonSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTConCommonSink](imtconcommonsink.md "IMTConCommonSink") interface cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConCommonSink::OnCommonSync](imtconcommonsink_oncommonsync.md "OnCommonSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::CommonUnsubscribe](imtadminapi_commonunsubscribe.md "CommonUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.