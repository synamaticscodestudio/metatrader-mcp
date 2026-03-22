# SubscriptionCfgSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Subscriptions ](imtmanagerapi_config_subscription.md "Subscriptions")/ SubscriptionCfgSubscribe | [](imtmanagerapi_subscriptioncfgnewscreate.md "SubscriptionCfgNewsCreate") [](imtmanagerapi_subscriptioncfgunsubscribe.md "SubscriptionCfgUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCfgSubscribe
Subscribe to events and hooks associated with subscription configurations.
C++
MTAPIRES IMTManagerAPI::SubscriptionCfgSubscribe( IMTConSubscriptionSink* sink // A pointer to the IMTConSubscriptionSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionCfgSubscribe( CIMTConSubscriptionSink sink // The IMTConSubscriptionSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConSubscriptionSink](imtconsubscriptionsink.md "IMTConSubscriptionSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
Subscribing to events is thread safe. The same [IMTConSubscriptionSink](imtconsubscriptionsink.md "IMTConSubscriptionSink") interface cannot subscribe to an event twice. The [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned in this case.
The object at which 'sink' points must remain in memory (must not be deleted) until [IMTManagerAPI::SubscriptionCfgUnsubscribe](imtmanagerapi_subscriptioncfgunsubscribe.md "SubscriptionCfgUnsubscribe") is called or until the administrator interface is deleted by the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.