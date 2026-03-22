# FeederUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederUnsubscribe | [](imtadminapi_feedersubscribe.md "FeederSubscribe") [](imtadminapi_feederrestart.md "FeederRestart") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederUnsubscribe
Unsubscribe from events associated with the configuration of data feeds.
C++
MTAPIRES IMTAdminAPI::FeederUnsubscribe( IMTConFeederSink* sink // A pointer to the IMTConFeederSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.FeederUnsubscribe( CIMTConFeederSink sink // CIMTConFeederSink object )  
---  
Python
AdminAPI.FeederUnsubscribe( sink # IMTConFeederSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConFeederSink](imtconfeedersink.md "IMTConFeederSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::FeederSubscribe](imtadminapi_feedersubscribe.md "FeederSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.