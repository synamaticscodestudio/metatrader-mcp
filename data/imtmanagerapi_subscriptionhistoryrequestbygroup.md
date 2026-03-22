# SubscriptionHistoryRequestByGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Subscriptions ](imtmanagerapi_subscription.md "Subscriptions")/ SubscriptionHistoryRequestByGroup | [](imtmanagerapi_subscriptionhistoryrequestbyids.md "SubscriptionHistoryRequestByIDs") [](imtmanagerapi_subscriptionhistoryrequestbylogins.md "SubscriptionHistoryRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SubscriptionHistoryRequestByGroup
Request subscription actions from the server by a client group.
C++
MTAPIRES IMTManagerAPI::SubscriptionHistoryRequestByGroup( LPCWSTR group, // Group const INT64 from, // Period start const INT64 to, // Period end IMTSubscriptionHistoryArray* records // Object of the actions array )  
---  
.NET
MTRetCode CIMTManagerAPI.SubscriptionHistoryRequestByGroup( string mask, // Group long from, // Period start long to, // Period end CIMTSubscriptionHistoryArray records // Action array object )  
---  
Parameters
group
[in] The groups the actions are requested for. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex.
from
[in] The beginning of the period for which you need to get actions. The date is specified in seconds since 01.01.1970.
to
[in] The end of the period for which you need to get actions. The date is specified in seconds since 01.01.1970.
records
[out] Object of an [array of subscription actions](imtsubscriptionhistoryarray.md "IMTSubscriptionHistoryArray"). The 'records' object must be pre-created by the [IMTManagerAPI::SubscriptionHistoryCreateArray](imtmanagerapi_subscriptionhistorycreatearray.md "SubscriptionHistoryCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).