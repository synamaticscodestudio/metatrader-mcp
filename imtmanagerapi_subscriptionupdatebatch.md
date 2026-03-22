# SubscriptionUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionUpdateBatch | [](imtmanagerapi_subscriptionupdate.md "SubscriptionUpdate") [](imtmanagerapi_subscriptionupdatebatcharray.md "SubscriptionUpdateBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionUpdateBatch
Bulk change of user subscriptions in the server database.
C++
MTAPIRES IMTManagerAPI::SubscriptionUpdateBatch( IMTSubscriptionArray* records, // Array of subscriptions MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionUpdateBatch( CIMTSubscriptionArray records, // Array of subscriptions MTRetCode[] res // Array of results )  
---  
Parameters
records
[in] [Array of subscriptions](imtsubscriptionarray.md "IMTSubscriptionArray"). The key field for finding exiting records is [IMTSubscription::ID](imtsubscription_id.md "ID").
results
[out] an array with subscription changing results. The size of the 'results' array must not be less than that of 'records'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all subscriptions have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the subscriptions have been updated. Analyze the 'results' array for a detailed information on execution results. The result of update of each subscription from the 'records' array is added to 'results'. The result index corresponds to the subscription index in the source array.
Note
When the method is called, it is NOT checked whether subscription change is allowed according to the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") parameter. Changes take place directly in the database.
A subscription can only be updated from the applications connected to the trade server, on which the subscription has been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
All required fields of subscriptions must be filled in, not only the ones that need to be changed. It is recommended that you first receive subscriptions from the server, change the required fields, and then send them back to the server.
The manager account requires the [RIGHT_SUBSCRIPTIONS_EDIT](imtconmanager_enum.htm#enmanagerrights) permission in order to be able to use this function.