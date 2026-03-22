# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ Flags | [](imtconmessenger_providercurrencyrate.md "ProviderCurrencyRate") [](imtconmessenger_messagetemplate.md "MessageTemplate") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::Flags
Get additional messenger settings.
C++
UINT64 IMTConMessenger::Flags() const  
---  
.NET (Gateway/Manager API)
EnFlags CIMTConMessenger.Flags()  
---  
Python
MTConMessenger.Flags  
---  
Return Value
Additional settings as the values of the [IMTConMessenger::EnFlags](imtconmessenger_enum.htm#enflags) enumeration.
IMTConMessenger::Flags
Set additional messenger settings.
C++
MTAPIRES IMTConMessenger::Flags( const UINT64 flags // Messenger settings )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.Flags( EnFlags flags // Messenger settings )  
---  
Python
MTConMessenger.Flags  
---  
Parameters
flags
[in] Additional settings as the values of the [IMTConMessenger::EnFlags](imtconmessenger_enum.htm#enflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.