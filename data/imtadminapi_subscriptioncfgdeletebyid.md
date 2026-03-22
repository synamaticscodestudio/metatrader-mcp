# SubscriptionCfgDeleteByID (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Subscriptions ](imtadminapi_config_subscription.md "Subscriptions")/ SubscriptionCfgDeleteByID | [](imtadminapi_subscriptioncfgdelete.md "SubscriptionCfgDelete") [](imtadminapi_subscriptioncfgdeletebatch.md "SubscriptionCfgDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCfgDeleteByID
Delete a subscription configuration by internal ID.
C++
MTAPIRES IMTAdminAPI::SubscriptionCfgDeleteByID( const UINT64 id // Configuration ID )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionCfgDeleteByID( ulong id // Configuration ID )  
---  
Parameters
id
[in] Configuration ID. The [IMTConSubscription::ID](imtconsubscription_id.md "ID") value is used for the identifier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be deleted from the applications that run on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.