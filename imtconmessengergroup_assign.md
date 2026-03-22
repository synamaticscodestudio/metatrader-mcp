# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerGroup ](imtconmessengergroup.md "IMTConMessengerGroup")/ Assign | [](imtconmessengergroup_release.md "Release") [](imtconmessengergroup_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerGroup::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConMessengerGroup::Assign( const IMTConMessengerGroup* group // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessengerGroup.Assign( CIMTConMessengerGroup group // Source object )  
---  
Parameters
group
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.