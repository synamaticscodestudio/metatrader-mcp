# SubscriptionCfgUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Subscriptions ](serverapi_config_subscription.md "Subscriptions")/ SubscriptionCfgUnsubscribe | [](imtserverapi_subscriptioncfgsubscribe.md "SubscriptionCfgSubscribe") [](imtserverapi_subscriptioncfgadd.md "SubscriptionCfgAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCfgUnsubscribe
Unsubscribe from events and hooks associated with subscription configurations.
MTAPIRES IMTServerAPI::SubscriptionCfgUnsubscribe( IMTConSubscriptionSink* sink // A pointer to the IMTConSubscriptionSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConSubscriptionSink](imtconsubscriptionsink.md "IMTConSubscriptionSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is paired with [IMTServerAPI::SubscriptionCfgSubscribe](imtserverapi_subscriptioncfgsubscribe.md "SubscriptionCfgSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.