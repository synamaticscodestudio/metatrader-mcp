# SubscriptionHistoryUpdateBatchArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionHistoryUpdateBatchArray | [](imtadminapi_subscriptionhistoryupdatebatch.md "SubscriptionHistoryUpdateBatch") [](imtadminapi_subscriptionhistorydelete.md "SubscriptionHistoryDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionHistoryUpdateBatchArray
Bulk change of user subscription actions in the server database.
C++
MTAPIRES IMTAdminAPI::SubscriptionHistoryUpdateBatchArray( IMTSubscriptionHistory** records, // Array of actions MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionHistoryUpdateBatchArray( CIMTSubscriptionHistory[] records, // Array of actions MTRetCode[] res // Array of results )  
---  
Parameters
records
[in] A pointer to an array of [subscription actions](imtsubscriptionhistory.md "IMTSubscriptionHistory"). The key field for finding exiting records is [IMTSubscriptionHistory::ID](imtsubscriptionhistory_id.md "ID").
results
[out] An array with action editing results. The size of the 'results' array must not be less than that of 'records'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that all specified actions have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the actions have been updated. Analyze the 'results' array for a detailed information on execution results. The result of update of each subscription action from the 'records' array is added to 'results'. The index of a result corresponds to the index of a subscription in the source array.
Note
An action can only be edited from the applications connected to the trade server, on which the action has been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
All required action fields must be filled in, not only the ones that need to be changed. It is recommended that you first receive action descriptions from the server, change the required fields in them and then send them back to the server.
The manager account must have the [RIGHT_SUBSCRIPTIONS_EDIT](imtconmanager_enum.htm#enmanagerrights) permission to use this function.