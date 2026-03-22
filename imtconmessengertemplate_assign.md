# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerTemplate ](imtconmessengertemplate.md "IMTConMessengerTemplate")/ Assign | [](imtconmessengertemplate_release.md "Release") [](imtconmessengertemplate_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerTemplate::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConMessengerTemplate::Assign( const IMTConMessengerTemplate* tpl // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessengerGroup.Assign( CIMTConMessengerTemplate tpl // source object )  
---  
Parameters
group
[in] Source object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code is returned.