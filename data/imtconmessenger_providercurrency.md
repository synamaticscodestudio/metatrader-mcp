# ProviderCurrency (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ ProviderCurrency | [](imtconmessenger_providersubod.md "ProviderSubId") [](imtconmessenger_providercurrencyrate.md "ProviderCurrencyRate") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::ProviderCurrency
Get the currency which is used for service provider pricing.
C++
LPCWSTR IMTConMessenger::ProviderCurrency() const  
---  
.NET (Gateway/Manager API)
string CIMTConMessenger.ProviderCurrency()  
---  
Python
MTConMessenger.ProviderCurrency  
---  
Return Value
If successful, the method returns a pointer to a string with the currency name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConMessenger](imtconmessenger.md "IMTConMessenger") object.
You should create a string copy if you want to use it after the object removal (call of the [IMTConMessenger::Release](imtconmessenger_release.md "Release") method of this object).
IMTConMessenger::ProviderCurrency
Set the currency for service provider's pricing.
C++
MTAPIRES IMTConMessenger::ProviderCurrency( LPCWSTR currency // Currency )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.ProviderCurrency( srting currency // Currency )  
---  
Python
MTConMessenger.ProviderCurrency  
---  
Parameters
currency
[in] The currency for service provider's pricing.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.