# SubscriptionCfgSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Subscriptions ](serverapi_config_subscription.md "Subscriptions")/ SubscriptionCfgSubscribe | [](imtserverapi_subscriptioncfgnewscreate.md "SubscriptionCfgNewsCreate") [](imtserverapi_subscriptioncfgunsubscribe.md "SubscriptionCfgUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCfgSubscribe
Subscribe to events and hooks associated with subscription configurations.
MTAPIRES IMTServerAPI::SubscriptionCfgSubscribe( IMTConSubscriptionSink* sink // A pointer to the IMTConSubscriptionSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConSubscriptionSink](imtconsubscriptionsink.md "IMTConSubscriptionSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
Subscribing to events is thread safe. The same [IMTConSubscriptionSink](imtconsubscriptionsink.md "IMTConSubscriptionSink") interface cannot subscribe to an event twice. The [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned in this case.
The object at which 'sink' points must remain in memory (must not be deleted) until [IMTServerAPI::SubscriptionCfgUnsubscribe](imtserverapi_subscriptioncfgunsubscribe.md "SubscriptionCfgUnsubscribe") is called or or until the plugin is deleted.