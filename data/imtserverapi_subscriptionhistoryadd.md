# SubscriptionHistoryAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Subscriptions ](serverapi_subscription.md "Subscriptions")/ SubscriptionHistoryAdd | [](imtserverapi_subscriptionhistoryunsubscribe.md "SubscriptionHistoryUnsubscribe") [](imtserverapi_subscriptionhistoryupdate.md "SubscriptionHistoryUpdate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SubscriptionHistoryAdd
Add a user subscription action to the server database.
MTAPIRES IMTServerAPI::SubscriptionHistoryAdd( IMTSubscriptionHistory* record // Action description )  
---  
Parameters
record
[in] [Subscription action description](imtsubscriptionhistory.md "IMTSubscriptionHistory"). The key field for finding an exiting record is [IMTSubscriptionHistory::ID](imtsubscriptionhistory_id.md "ID").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. For example, if the specified subscription does not exist, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.