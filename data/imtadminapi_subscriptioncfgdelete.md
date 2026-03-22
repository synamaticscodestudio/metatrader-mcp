# SubscriptionCfgDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Subscriptions ](imtadminapi_config_subscription.md "Subscriptions")/ SubscriptionCfgDelete | [](imtadminapi_subscriptioncfgupdatebatch.md "SubscriptionCfgUpdateBatch") [](imtadminapi_subscriptioncfgdeletebyid.md "SubscriptionCfgDeleteByID") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCfgDelete
Delete a subscription configuration by name.
C++
MTAPIRES IMTAdminAPI::SubscriptionCfgDelete( LPCWSTR name // Configuration name )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionCfgDelete( string name // Configuration name )  
---  
Parameters
name
[in] The name of the configuration to delete. The [IMTConSubscription::Name](imtconsubscription_name.md "Name") value is used for the configuration name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be deleted from the applications that run on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
IMTAdminAPI::SubscriptionCfgDelete
Delete a subscription configuration by index.
C++
MTAPIRES IMTAdminAPI::SubscriptionCfgDelete( const UINT pos // Configuration position )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionCfgDelete( uint pos // Configuration position )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be deleted from the applications that run on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.