# SubscriptionHistoryUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionHistoryUpdate | [](imtserverapi_subscriptionhistoryadd.md "SubscriptionHistoryAdd") [](imtserverapi_subscriptionhistorydelete.md "SubscriptionHistoryDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionHistoryUpdate
Edit a user subscription action in the server database.
MTAPIRES IMTServerAPI::SubscriptionHistoryUpdate( IMTSubscriptionHistory* record // Action description )  
---  
Parameters
record
[in] [Subscription action description](imtsubscriptionhistory.md "IMTSubscriptionHistory"). The key field for finding an exiting record is [IMTSubscriptionHistory::ID](imtsubscriptionhistory_id.md "ID").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. For example, if the specified subscription does not exist, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
Note
An action can only be edited from the plugins running on the same trade server where the action was created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
All required action fields must be filled in, not only the ones that need to be changed. It is recommended that you first receive an action description from the server, change the required fields and then send it back to the server.