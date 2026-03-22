# Type (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ Type | [](imtconsubscription_name.md "Name") [](imtconsubscription_image.md "Image") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::Type
Get a subscription configuration type.
C++
UINT IMTConSubscription::Type() const  
---  
.NET (Gateway/Manager API)
EnType CIMTConSubscription.Type()  
---  
Return Value
Subscription configuration type. The type is passed as a value of the [IMTConSubscription::EnType](imtconsubscription_enum.htm#entype) enumeration.
IMTConSubscription::Type
Set a subscription configuration type.
C++
MTAPIRES IMTConSubscription::Type( const UINT type // Type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.Type( EnType type  // Type )  
---  
Parameters
type
[in] Subscription configuration type. The type is passed as a value of the [IMTConSubscription::EnType](imtconsubscription_enum.htm#entype) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.