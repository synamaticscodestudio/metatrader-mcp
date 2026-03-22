# SubscriptionRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionRequest | [](imtmanagerapi_subscriptiondeletebatch.md "SubscriptionDeleteBatch") [](imtmanagerapi_subscriptionrequestbyid.md "SubscriptionRequestByID") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionRequest
Request all user subscriptions from the server.
C++
MTAPIRES IMTManagerAPI::SubscriptionRequest( const UINT64 login, // Login IMTSubscriptionArray* records // Array of subscriptions )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionRequest( ulong login, // Login CIMTSubscriptionArray records // Array of subscriptions )  
---  
Parameters
login
[in] The login of the user whose subscriptions you want to obtain.
records
[out] An object of the [array of subscriptions](imtsubscriptionarray.md "IMTSubscriptionArray"). The 'records' object must be previously created via the [IMTManagerAPI::SubscriptionCreateArray](imtmanagerapi_subscriptioncreatearray.md "SubscriptionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).