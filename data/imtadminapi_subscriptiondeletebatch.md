# SubscriptionDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionDeleteBatch | [](imtadminapi_subscriptiondelete.md "SubscriptionDelete") [](imtadminapi_subscriptionrequest.md "SubscriptionRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionDeleteBatch
Delete a user subscription from the server database.
MTAPIRES IMTAdminAPI::SubscriptionDeleteBatch( const UINT64*  ids, // Array of IDs const UINT ids_total, // Number of IDs in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionDeleteBatch( ulong[] ids, // Array of IDs MTRetCode[] retcodes // Array of results )  
---  
Parameters
ids
[in] A pointer to an array of IDs of subscriptions which you want to delete. The [IMTSubscription::ID](imtsubscription_id.md "ID") value is used as the identifier.
ids_total
[in] The number of identifiers in the 'ids' array.
results
[out] an array with subscription deletion results. The size of the 'results' array must not be less than that of 'ids'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all subscriptions have been deleted. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the subscriptions have been deleted. Analyze the 'results' array for a detailed information on execution results. The result of deletion of each subscription from the 'ids' array is added to 'results'. The result index corresponds to the id index in the source array.
Note
When the method is called, it is NOT checked whether subscription deletion is allowed according to the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") parameter. Changes take place directly in the database.
A subscription can only be deleted from the applications connected to the trade server, on which the subscription has been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
When a deleting a subscription by this method, the [IMTSubscriptionSink::OnSubscriptionDelete](imtsubscriptionsink_onsubscriptiondelete.md "OnSubscriptionDelete") handler is called, while the [IMTSubscriptionSink::OnSubscriptionCancel](imtsubscriptionsink_onsubscriptioncancel.md "OnSubscriptionCancel") handler is not called.
The manager account requires the [RIGHT_SUBSCRIPTIONS_EDIT](imtconmanager_enum.htm#enmanagerrights) permission in order to be able to use this function.