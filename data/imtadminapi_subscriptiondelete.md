# SubscriptionDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionDelete | [](imtadminapi_subscriptionupdatebatcharray.md "SubscriptionUpdateBatchArray") [](imtadminapi_subscriptiondeletebatch.md "SubscriptionDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionDelete
Delete a user subscription from the server database.
C++
MTAPIRES IMTAdminAPI::SubscriptionDelete( const UINT64 id // Subscription ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAdminAPI.SubscriptionDelete( ulong  id // Subscription ID )  
---  
Parameters
id
[in] Subscription ID. The [IMTSubscription::ID](imtsubscription_id.md "ID") value is used as the identifier.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. For example, if the specified subscription does not exist, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
Note
When the method is called, it is NOT checked whether subscription change is allowed according to the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") parameter. Changes take place directly in the database.
A subscription can only be deleted from the applications connected to the trade server, on which the subscription has been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
When a deleting a subscription by this method, the [IMTSubscriptionSink::OnSubscriptionDelete](imtsubscriptionsink_onsubscriptiondelete.md "OnSubscriptionDelete") handler is called, while the [IMTSubscriptionSink::OnSubscriptionCancel](imtsubscriptionsink_onsubscriptioncancel.md "OnSubscriptionCancel") handler is not called.
The manager account requires the [RIGHT_SUBSCRIPTIONS_EDIT](imtconmanager_enum.htm#enmanagerrights) permission in order to be able to use this function.