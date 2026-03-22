# OrderFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ OrderFlags | [](imtcongroupsymbol_ieflagsdefault.md "IEFlagsDefault") [](imtcongroupsymbol_orderflagsdefault.md "OrderFlagsDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::OrderFlags
Gets the flags of order types allowed for the symbol.
C++
UINT IMTConGroupSymbol::OrderFlags() const  
---  
.NET (Gateway/Manager API)
EnOrderFlags CIMTConGroupSymbol.OrderFlags()  
---  
Python (Manager API)
MTConGroupSymbol.OrderFlags  
---  
Return Value
The flags are passed using the [IMTConSymbol::EnOrderFlags](imtconsymbol_enum.htm#enorderflags) enumeration.
Note
This method operates with individual symbol settings for groups.
IMTConGroupSymbol::OrderFlags
Sets the flags of order types allowed for the symbol.
C++
MTAPIRES IMTConGroupSymbol::OrderFlags( const UINT flags // Order flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.OrderFlags( EnOrderFlags flags // Order flags )  
---  
Python (Manager API)
MTConGroupSymbol.OrderFlags  
---  
Parameters
flags
[in] The flags are passed using the [IMTConSymbol::EnOrderFlags](imtconsymbol_enum.htm#enorderflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method operates with individual symbol settings for groups.