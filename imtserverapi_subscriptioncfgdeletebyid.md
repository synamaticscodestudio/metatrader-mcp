# SubscriptionCfgDeleteByID (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Subscriptions ](serverapi_config_subscription.md "Subscriptions")/ SubscriptionCfgDeleteByID | [](imtserverapi_subscriptioncfgdelete.md "SubscriptionCfgDelete") [](imtserverapi_subscriptioncfgshift.md "SubscriptionCfgShift") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionCfgDeleteByID
Delete a subscription configuration by internal ID.
MTAPIRES IMTServerAPI::SubscriptionCfgDeleteByID( const UINT64 id // Configuration ID )  
---  
Parameters
id
[in] Configuration ID. The [IMTConSubscription::ID](imtconsubscription_id.md "ID") value is used for the identifier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the applications that run on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.