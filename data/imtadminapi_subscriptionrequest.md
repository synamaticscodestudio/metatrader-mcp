# SubscriptionRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionRequest | [](imtadminapi_subscriptiondeletebatch.md "SubscriptionDeleteBatch") [](imtadminapi_subscriptionrequestbyid.md "SubscriptionRequestByID") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionRequest
Request all user subscriptions from the server.
C++
MTAPIRES IMTAdminAPI::SubscriptionRequest( const UINT64 login, // Login IMTSubscriptionArray* records // Array of subscriptions )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionRequest( ulong login, // Login CIMTSubscriptionArray records // Array of subscriptions )  
---  
Parameters
login
[in] The login of the user whose subscriptions you want to obtain.
records
[out] An object of the [array of subscriptions](imtsubscriptionarray.md "IMTSubscriptionArray"). The 'records' object must be previously created via the [IMTAdminAPI::SubscriptionCreateArray](imtadminapi_subscriptioncreatearray.md "SubscriptionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).