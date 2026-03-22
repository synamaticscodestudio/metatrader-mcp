# SubscriptionCfgUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Subscriptions ](imtadminapi_config_subscription.md "Subscriptions")/ SubscriptionCfgUpdate | [](imtadminapi_subscriptioncfgunsubscribe.md "SubscriptionCfgUnsubscribe") [](imtadminapi_subscriptioncfgupdatebatch.md "SubscriptionCfgUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCfgUpdate
Add or update a subscription configuration.
C++
MTAPIRES IMTAdminAPI::SubscriptionCfgUpdate( IMTConSubscription* config // Subscription configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionCfgUpdate( CIMTConSubscription config // Subscription configuration object )  
---  
Parameters
config
[in] Subscription configuration object [IMTConSubscription](imtconsubscription.md "IMTConSubscription").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the record already exists. If the record already exists, it is updated, otherwise a new entry is added. A key field for comparison is the configuration name [IMTConSubscription::Name()](imtconsubscription_name.md "Name"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConSubscriptionSink::OnSubscriptionUpdate](imtconsubscriptionsink_onsubscriptioncfgupdate.md "OnSubscriptionCfgUpdate") notification method is not called.
A configuration can only be added or updated from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
Before adding, the correctness of the account is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.