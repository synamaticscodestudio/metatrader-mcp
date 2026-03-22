# SubscriptionHistoryUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionHistoryUpdate | [](imtmanagerapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") [](imtmanagerapi_subscriptionhistoryupdatebatch.md "SubscriptionHistoryUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionHistoryUpdate
Edit a user subscription action in the server database.
C++
MTAPIRES IMTManagerAPI::SubscriptionHistoryUpdate( IMTSubscriptionHistory* record // Action description )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTManagerAPI.SubscriptionHistoryUpdate( CIMTSubscriptionHistory  record // Action description )  
---  
Parameters
record
[in] [Subscription action description](imtsubscriptionhistory.md "IMTSubscriptionHistory"). The key field for finding an exiting record is [IMTSubscriptionHistory::ID](imtsubscriptionhistory_id.md "ID").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. For example, if the specified subscription does not exist, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
Note
An action can only be edited from the applications connected to the trade server, on which the action has been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
All required action fields must be filled in, not only the ones that need to be changed. It is recommended that you first receive an action description from the server, change the required fields in them and then send it back to the server.
The manager account must have the [RIGHT_SUBSCRIPTIONS_EDIT](imtconmanager_enum.htm#enmanagerrights) permission to use this function.