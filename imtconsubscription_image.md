# Image (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ Image | [](imtconsubscription_type.md "Type") [](imtconsubscription_description.md "Description") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::Image
Get a subscription logo.
C++
UINT IMTConSubscription::Image() const  
---  
.NET (Gateway/Manager API)
EnImageType CIMTConSubscription.Image()  
---  
Return Value
Subscription logo. The logo is passed as a value of the [IMTConSubscription::EnImageType](imtconsubscription_enum.htm#enimagetype) enumeration.
IMTConSubscription::Image
Set a subscription logo.
C++
MTAPIRES IMTConSubscription::Image( const UINT image // Logo )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.Image( EnImageType image  // Logo )  
---  
Parameters
image
[in] Subscription configuration type. The logo is passed as a value of the [IMTConSubscription::EnImageType](imtconsubscription_enum.htm#enimagetype) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.