# URLAgreement (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ URLAgreement | [](imtconsubscription_urldescription.md "URLDescription") [](imtconsubscription_controlmode.md "ControlMode") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::URLAgreement
Get a link to a subscription agreement.
C++
LPCWSTR IMTConSubscription::URLAgreement() const  
---  
.NET (Gateway/Manager API)
string CIMTConSubscription.URLAgreement()  
---  
Return Value
If successful, a pointer to the string with the link is returned. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConSubscription](imtconsubscription.md "IMTConSubscription") object.
To continue using the string after the object removal (call of the [IMTConSubscription::Release](imtconsubscription_release.md "Release") method of this object), create its copy.
IMTConSubscription::URLAgreement
Set a link to a subscription agreement.
C++
MTAPIRES IMTConSubscription::URLAgreement( LPCWSTR url // Agreement link )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.URLAgreement( srting url  // Agreement link )  
---  
Parameters
url
[in] Agreement link.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.
Note
The link length is limited to 128 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.