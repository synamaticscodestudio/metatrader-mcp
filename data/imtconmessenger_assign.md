# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ Assign | [](imtconmessenger_release.md "Release") [](imtconmessenger_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConMessenger::Assign( const IMTConMessenger* messenger // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.Assign( CIMTConMessenger messenger // Source object )  
---  
Parameters
messenger
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.