# SubscriptionHistoryDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionHistoryDelete | [](imtmanagerapi_subscriptionhistoryupdatebatcharray.md "SubscriptionHistoryUpdateBatchArray") [](imtmanagerapi_subscriptionhistorydeletebatch.md "SubscriptionHistoryDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionHistoryDelete
Delete a user subscription action from the server database.
C++
MTAPIRES IMTManagerAPI::SubscriptionHistoryDelete( const UINT64 id // Action identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTManagerAPI.SubscriptionHistoryDelete( ulong  id // Action identifier )  
---  
Parameters
id
[in] Action identifier. The [IMTSubscriptionHistory::ID](imtsubscriptionhistory_id.md "ID") value is used for the identifier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. For example, if the specified subscription does not exist, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
Note
An action can only be deleted from the applications connected to the trade server, on which the action has been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
The manager account must have the [RIGHT_SUBSCRIPTIONS_EDIT](imtconmanager_enum.htm#enmanagerrights) permission to use this function.