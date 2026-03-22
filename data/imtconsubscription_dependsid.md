# DependsID (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ DependsID | [](imtconsubscription_parentid.md "ParentID") [](imtconsubscription_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::DependsID
Get the subscription which the current subscription depends on.
C++
UINT64 IMTConSubscription::DependsID() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSubscription.DependsID()  
---  
Return Value
The identifier of the subscription ([IMTConSubscription::ID](imtconsubscription_id.md "ID")), which the current subscription depends on.
Note
This property sets if another product subscription is required in order to subscribe to the current product.
IMTConSubscription::DependsID
Set the subscription which the current subscription depends on.
C++
MTAPIRES IMTConSubscription::DependsID( const UINT64 depends_id // Subscription ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.DependsID( uint depends_id // Subscription ID )  
---  
Parameters
depends_id
[in] The identifier of the subscription ([IMTConSubscription::ID](imtconsubscription_id.md "ID")) which the current subscription depends on.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This property sets if another product subscription is required in order to subscribe to the current product.