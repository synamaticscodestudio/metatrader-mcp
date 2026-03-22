# SubscriptionCfgUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Subscriptions ](imtadminapi_config_subscription.md "Subscriptions")/ SubscriptionCfgUpdateBatch | [](imtadminapi_subscriptioncfgupdate.md "SubscriptionCfgUpdate") [](imtadminapi_subscriptioncfgdelete.md "SubscriptionCfgDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionCfgUpdateBatch
Add or edit multiple subscription configurations.
C++
MTAPIRES IMTAdminAPI::SubscriptionCfgUpdateBatch( IMTConSubscription** configs, // Array of settings const UINT config_total, // Number of settings in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionCfgUpdateBatch( CIMTConSubscription[] configs, // Array of settings MTRetCode[] results // Array of results )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to add/edit.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of each configuration applying on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful change sending to a server; the results of applying the changes are passed in the 'results' parameter.
Note
A configuration can only be added or updated from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
Before adding, the correctness of the account is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.