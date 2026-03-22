# SubscriptionRequestByGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Subscriptions ](imtadminapi_subscription.md "Subscriptions")/ SubscriptionRequestByGroup | [](imtadminapi_subscriptionrequestbyids.md "SubscriptionRequestByIDs") [](imtadminapi_subscriptionrequestbylogins.md "SubscriptionRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SubscriptionRequestByGroup
Request subscriptions from the server by a client group.
C++
MTAPIRES IMTAdminAPI::SubscriptionRequestByGroup( LPCWSTR group, // Group IMTSubscriptionArray* records // Object of array of subscriptions )  
---  
.NET
MTRetCode CIMTAdminAPI.SubscriptionRequestByGroup( string mask, // Group CIMTSubscriptionArray records // Object of array of subscriptions )  
---  
Parameters
group
[in] The groups for which the subscriptions are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups whose names begin with 'demo', except for the group demoforex.
records
[out] An object of the [array of subscriptions](imtsubscriptionarray.md "IMTSubscriptionArray"). The 'records' object must be previously created via the [IMTAdminAPI::SubscriptionCreateArray](imtadminapi_subscriptioncreatearray.md "SubscriptionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).