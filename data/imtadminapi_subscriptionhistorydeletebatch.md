# SubscriptionHistoryDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionHistoryDeleteBatch | [](imtadminapi_subscriptionhistorydelete.md "SubscriptionHistoryDelete") [](imtadminapi_subscriptionhistoryrequest.md "SubscriptionHistoryRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionHistoryDeleteBatch
Delete a batch of user subscription actions from the server database.
MTAPIRES IMTAdminAPI::SubscriptionHistoryDeleteBatch( const UINT64*  ids, // Array of IDs const UINT ids_total, // The number of IDs in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionHistoryDeleteBatch( ulong[] ids, // Array of IDs MTRetCode[] retcodes // Array of results )  
---  
Parameters
ids
[in] A pointer to an array of IDs of subscription actions which you want to delete. The [IMTSubscriptionHistory::ID](imtsubscriptionhistory_id.md "ID") value is used for the identifier.
ids_total
[in] The number of identifiers in the 'ids' array.
results
[out] An array with action deletion results. The size of the 'results' array must not be less than that of 'ids'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all actions have been deleted. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the actions have been deleted. Analyze the 'results' array for a detailed information on execution results. The result of deletion of each action from the 'ids' array is added to 'results'. The result index corresponds to the action index in the source array.
Note
An action can only be deleted from the applications connected to the trade server, on which the action has been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
The manager account must have the [RIGHT_SUBSCRIPTIONS_EDIT](imtconmanager_enum.htm#enmanagerrights) permission to use this function.