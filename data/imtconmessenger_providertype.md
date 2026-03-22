# ProviderType (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ ProviderType | [](imtconmessenger_sender.md "Sender") [](imtconmessenger_provideraddress.md "ProviderAddress") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::ProviderType
Get the messaging service provider in the messenger configuration.
C++
UINT IMTConMessenger::ProviderType() const  
---  
.NET (Gateway/Manager API)
EnProviderType CIMTConMessenger.ProviderType()  
---  
Python
MTConMessenger.ProviderType  
---  
Return Value
messaging provider. Passed as a value of the [IMTConMessenger::EnProviderType](imtconmessenger_enum.htm#enprovidertype) enumeration.
IMTConMessenger::Mode
Set the messaging service provider in the messenger configuration.
C++
MTAPIRES IMTConMessenger::ProviderType( const UINT provider // Provider )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.ProviderType( EnProviderType provider // Provider )  
---  
Python
MTConMessenger.ProviderType  
---  
Parameters
provider
[in] Messaging service provider. Passed as a value of the [IMTConMessenger::EnProviderType](imtconmessenger_enum.htm#enprovidertype) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.