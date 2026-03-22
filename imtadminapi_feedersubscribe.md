# FeederSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederSubscribe | [](imtadminapi_feedertranslatecreate.md "FeederTranslateCreate") [](imtadminapi_feederunsubscribe.md "FeederUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederSubscribe
Subscribe to events associated with the configuration of data feeds.
C++
MTAPIRES IMTAdminAPI::FeederSubscribe( IMTConFeederSink* sink // A pointer to the IMTConFeederSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.FeederSubscribe( CIMTConFeederSink sink // CIMTConFeederSink object )  
---  
Python
AdminAPI.FeederSubscribe( sink # IMTConFeederSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConFeederSink](imtconfeedersink.md "IMTConFeederSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConFeederSink](imtconfeedersink.md "IMTConFeederSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConFeederSink::OnFeederSync](imtconfeedersink_onfeedersync.md "OnFeederSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::FeederUnsubscribe](imtadminapi_feederunsubscribe.md "FeederUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.