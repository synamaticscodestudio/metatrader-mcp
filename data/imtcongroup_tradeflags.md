# TradeFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ TradeFlags | [](imtcongroup_mailmode.md "MailMode") [](imtcongroup_tradetransfermode.md "TradeTransferMode") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::TradeFlags
Get trade options of a group.
C++
UINT64 IMTConGroup::TradeFlags() const  
---  
.NET (Gateway/Manager API)
EnTradeFlags CIMTConGroup.TradeFlags()  
---  
Python (Manager API)
MTConGroup.TradeFlags  
---  
Return Value
A value from the [IMTConGroup::EnTradeFlags](imtcongroup_enum.htm#entradeflags) enumeration.
IMTConGroup::TradeFlags
Get trade options of a group.
C++
MTAPIRES IMTConGroup::TradeFlags( const UINT64 flags // Trade options )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.TradeFlags( EnTradeFlags flags // Trade options )  
---  
Python (Manager API)
MTConGroup.TradeFlags  
---  
Parameters
flags
[in] The trading options of a group can be passed using the [IMTConGroup::EnTradeFlags](imtcongroup_enum.htm#entradeflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.