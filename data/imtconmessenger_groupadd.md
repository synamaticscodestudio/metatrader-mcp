# GroupAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ GroupAdd | [](imtconmessenger_countrynext.md "CountryNext") [](imtconmessenger_groupupdate.md "GroupUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::GroupAdd
Add a group of accounts for which the messenger will be used.
C++
MTAPIRES IMTConMessenger::GroupAdd( IMTConMessengerGroup* group // Group object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.GroupAdd( CIMTConMessengerGroup group // Group object )  
---  
Python
MTConMessenger.GroupAdd( group  # Group object )  
---  
Parameters
group
[in] Group object [IMTConMessengerGroup](imtconmessengergroup.md "IMTConMessengerGroup").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.