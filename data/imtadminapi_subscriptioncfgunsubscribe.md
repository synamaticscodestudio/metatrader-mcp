# SubscriptionCfgUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Subscriptions ](imtadminapi_config_subscription.md "Subscriptions")/ SubscriptionCfgUnsubscribe | [](imtadminapi_subscriptioncfgsubscribe.md "SubscriptionCfgSubscribe") [](imtadminapi_subscriptioncfgupdate.md "SubscriptionCfgUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCfgUnsubscribe
Unsubscribe from events and hooks associated with subscription configurations.
C++
MTAPIRES IMTAdminAPI::SubscriptionCfgUnsubscribe( IMTConSubscriptionSink* sink // A pointer to the IMTConSubscriptionSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionCfgUnsubscribe( CIMTConSubscriptionSink sink // The IMTConSubscriptionSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConSubscriptionSink](imtconsubscriptionsink.md "IMTConSubscriptionSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is paired with [IMTAdminAPI::SubscriptionCfgSubscribe](imtadminapi_subscriptioncfgsubscribe.md "SubscriptionCfgSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.