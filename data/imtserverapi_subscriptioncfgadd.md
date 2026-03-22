# SubscriptionCfgAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Subscriptions ](serverapi_config_subscription.md "Subscriptions")/ SubscriptionCfgAdd | [](imtserverapi_subscriptioncfgunsubscribe.md "SubscriptionCfgUnsubscribe") [](imtserverapi_subscriptioncfgdelete.md "SubscriptionCfgDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCfgAdd
Add or update a subscription configuration.
MTAPIRES IMTServerAPI::SubscriptionCfgAdd( IMTConSubscription* config // Subscription configuration object )  
---  
Parameters
config
[in] Subscription configuration object [IMTConSubscription](imtconsubscription.md "IMTConSubscription").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the record already exists. If the record already exists, it is updated, otherwise a new entry is added. A key field for comparison is the configuration name [IMTConSubscription::Name()](imtconsubscription_name.md "Name"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConSubscriptionSink::OnSubscriptionUpdate](imtconsubscriptionsink_onsubscriptioncfgupdate.md "OnSubscriptionCfgUpdate") notification method is not called.
A configuration can be added or updated only from the plugins that run on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_common.md "Common errors") will be returned.
Before adding, the correctness of the account is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.