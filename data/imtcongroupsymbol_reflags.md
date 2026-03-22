# REFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ REFlags | [](imtcongroupsymbol_retimeoutdefault.md "RETimeoutDefault") [](imtcongroupsymbol_reflagsdefault.md "REFlagsDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::REFlags
Gets request execution flags for this group.
C++
UINT IMTConGroupSymbol::REFlags() const  
---  
.NET (Gateway/Manager API)
EnREFlags CIMTConGroupSymbol.REFlags()  
---  
Python (Manager API)
MTConGroupSymbol.REFlags  
---  
Return Value
A value of the [IMTConGroupSymbol::EnREFlags](imtcongroupsymbol_enum.htm#enreflags) enumeration.
IMTConGroupSymbol::REFlags
Sets request execution flags for this group.
C++
MTAPIRES IMTConGroupSymbol::REFlags( const UINT flags // Flags of request execution )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.REFlags( EnREFlags flags // Flags of request execution )  
---  
Python (Manager API)
MTConGroupSymbol.REFlags  
---  
Parameters
flags
[in] The request execution flags. To pass the options, the [IMTConGroupSymbol::EnREFlags](imtcongroupsymbol_enum.htm#enreflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.