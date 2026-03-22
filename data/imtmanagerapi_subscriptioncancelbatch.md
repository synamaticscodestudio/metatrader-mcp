# SubscriptionCancelBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionCancelBatch | [](imtmanagerapi_subscriptioncancel.md "SubscriptionCancel") [](imtmanagerapi_subscriptionupdate.md "SubscriptionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionCancelBatch
Bulk canceling of user subscriptions.
C++
MTAPIRES IMTManagerAPI::SubscriptionCancelBatch( const UINT64* logins, // Array of users const UINT64*  subscriptions, // Array of configuration IDs const UINT total, // Number MTAPIRES* results, // Array of results IMTSubscriptionArray* records, // Description of subscriptions IMTSubscriptionHistoryArray* history // Description of subscription actions )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTManagerAPI.SubscriptionCancelBatch( ulong[] logins, // Array of users ulong[] subscriptions, // Array of configuration IDs MTRetCode[] results, // Array of results CIMTSubscriptionArray  records, // Description of subscriptions CIMTSubscriptionHistoryArray history // Description of subscription actions )  
---  
Parameters
logins
[in] An array of [user logins](imtuser_login.md "Login") for which the subscriptions are canceled. The array size must match the array of the 'subscriptions' array.
subscriptions
[in] An array of [IDs of subscription configurations](imtconsubscription_id.md "ID") which are canceled. The array size must match the array of the 'logins' array.
total
[in] The number of logins/subscriptions.
results
[out] an array with subscription canceling results. The size of the 'results' array must not be less than that of 'logins'.
records
[out] An array of [descriptions of canceled subscriptions](imtsubscription.md "IMTSubscription").
history
[out] An array of [descriptions of actions](imtsubscriptionhistory.md "IMTSubscriptionHistory") which were performed to canceled subscriptions
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all orders have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the subscriptions have been added. To obtain further details, you can check subscription statuses in the returned 'records' array ([IMTSubscription::Status](imtsubscription_status.md "Status")).
Note
When the method is called, it is checked whether unsubscription is allowed according to the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") parameter.
When a subscription is added by this method, both handlers are called: [IMTSubscriptionSink::OnSubscriptionJoin](imtsubscriptionsink_onsubscriptionjoin.md "OnSubscriptionJoin") and [IMTSubscriptionSink::OnSubscriptionAdd](imtsubscriptionsink_onsubscriptionadd.md "OnSubscriptionAdd").
Sorting of logins and subscriptions added for them in the 'logins' and 'subscriptions' arrays must match.