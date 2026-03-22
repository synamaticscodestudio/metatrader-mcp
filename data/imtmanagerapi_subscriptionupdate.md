# SubscriptionUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionUpdate | [](imtmanagerapi_subscriptioncancelbatch.md "SubscriptionCancelBatch") [](imtmanagerapi_subscriptionupdatebatch.md "SubscriptionUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionUpdate
Edit a user subscription in the server database.
C++
MTAPIRES IMTManagerAPI::SubscriptionUpdate( IMTSubscription* record // Subscription description )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTManagerAPI.SubscriptionUpdate( CIMTSubscription  record // Subscription description )  
---  
Parameters
record
[in] [Subscription description](imtsubscription.md "IMTSubscription"). The key field for finding an exiting record is [IMTSubscription::ID](imtsubscription_id.md "ID").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. For example, if the specified subscription does not exist, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
Note
When the method is called, it is NOT checked whether subscription change is allowed according to the [IMTConSubscription::ControlMode](imtconsubscription_controlmode.md "ControlMode") parameter. Changes take place directly in the database.
A subscription can only be updated from the applications connected to the trade server, on which the subscription has been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
All required fields of subscriptions must be filled in, not only the ones that need to be changed. It is recommended that you first receive a subscription from the server, change the required fields, and then send it back to the server.
The manager account requires the [RIGHT_SUBSCRIPTIONS_EDIT](imtconmanager_enum.htm#enmanagerrights) permission in order to be able to use this function.