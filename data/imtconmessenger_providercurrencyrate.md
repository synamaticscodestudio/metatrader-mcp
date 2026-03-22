# ProviderCurrencyRate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ ProviderCurrencyRate | [](imtconmessenger_providercurrency.md "ProviderCurrency") [](imtconmessenger_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::ProviderCurrencyRate
Get the rate at which the service pricing currency is converted to US dollars.
C++
double IMTConMessenger::ProviderCurrencyRate() const  
---  
.NET (Gateway/Manager API)
double CIMTConMessenger.ProviderCurrencyRate()  
---  
Python
MTConMessenger.ProviderCurrencyRate  
---  
Return Value
Rate of conversion to USD.
Note
The provider's service pricing currency is set using the [IMTConMessenger::ProviderCurrency](imtconmessenger_providercurrency.md "ProviderCurrency") method.
IMTConMessenger::ProviderCurrencyRate
Set the rate at which the service pricing currency is converted to US dollars.
C++
MTAPIRES IMTConMessenger::ProviderCurrencyRate( double rate // Rate of conversion to USD )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.ProviderCurrencyRate( double rate // Rate of conversion to USD )  
---  
Python
MTConMessenger.ProviderCurrencyRate  
---  
Parameters
rate
[in] The rate at which the provider's service pricing currency is converted to US dollars.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The provider's service pricing currency is set using the [IMTConMessenger::ProviderCurrency](imtconmessenger_providercurrency.md "ProviderCurrency") method.