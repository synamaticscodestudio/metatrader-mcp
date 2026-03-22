# SubscriptionCfgUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Subscriptions ](imtmanagerapi_config_subscription.md "Subscriptions")/ SubscriptionCfgUnsubscribe | [](imtmanagerapi_subscriptioncfgsubscribe.md "SubscriptionCfgSubscribe") [](imtmanagerapi_subscriptioncfgtotal.md "SubscriptionCfgTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCfgUnsubscribe
Unsubscribe from events and hooks associated with subscription configurations.
C++
MTAPIRES IMTManagerAPI::SubscriptionCfgUnsubscribe( IMTConSubscriptionSink* sink // A pointer to the IMTConSubscriptionSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionCfgUnsubscribe( CIMTConSubscriptionSink sink // The IMTConSubscriptionSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConSubscriptionSink](imtconsubscriptionsink.md "IMTConSubscriptionSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is paired with [IMTManagerAPI::SubscriptionCfgSubscribe](imtmanagerapi_subscriptioncfgsubscribe.md "SubscriptionCfgSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.