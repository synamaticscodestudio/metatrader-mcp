# CommonUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Common ](imtadminapi_config_common.md "Functions")/ CommonUnsubscribe | [](imtadminapi_commonsubscribe.md "CommonSubscribe") [](imtadminapi_commonget.md "CommonGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::CommonUnsubscribe
Unsubscribe from events associated with the common configuration of the platform.
C++
MTAPIRES IMTAdminAPI::CommonUnsubscribe( IMTConCommonSink* sink // A pointer to the IMTConCommonSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.CommonUnsubscribe( CIMTConCommonSink sink // CIMTConCommonSink object )  
---  
Python
AdminAPI.CommonUnsubscribe( sink # IMTConCommonSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConCommonSink](imtconcommonsink.md "IMTConCommonSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::CommonSubscribe](imtadminapi_commonsubscribe.md "CommonSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.