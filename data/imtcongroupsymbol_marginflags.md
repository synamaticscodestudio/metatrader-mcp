# MarginFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ MarginFlags | [](imtcongroupsymbol_volumelimitextdefault.md "VolumeLimitExtDefault") [](imtcongroupsymbol_marginflagsdefault.md "MarginFlagsDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::MarginFlags
Gets additional modes of symbol margin checking for the group.
C++
UINT IMTConGroupSymbol::MarginFlags() const  
---  
.NET (Gateway/Manager API)
EnMarginFlags CIMTConGroupSymbol.MarginFlags()  
---  
Python (Manager API)
MTConGroupSymbol.MarginFlags  
---  
Return Value
One of the values of the [IMTConSymbol::EnMarginFlags](imtconsymbol_enum.htm#enmarginflags) enumeration.
IMTConGroupSymbol::MarginFlags
Sets additional modes of symbol margin checking for the group.
C++
MTAPIRES IMTConGroupSymbol::MarginFlags( const UINT mode // Margin checking mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.MarginFlags( EnMarginFlags mode // Margin checking mode )  
---  
Python (Manager API)
MTConGroupSymbol.MarginFlags  
---  
Parameters
mode
[in] Margin checking mode is passed using the [IMTConSymbol::EnMarginFlags](imtconsymbol_enum.htm#enmarginflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.