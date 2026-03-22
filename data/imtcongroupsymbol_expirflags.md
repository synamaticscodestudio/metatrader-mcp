# ExpirFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ ExpirFlags | [](imtcongroupsymbol_fillflagsdefault.md "FillFlagsDefault") [](imtcongroupsymbol_expirflagsdefault.md "ExpirFlagsDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::ExpirFlags
Get the type of order expiration allowed for a symbol in this group.
C++
UINT IMTConGroupSymbol::ExpirFlags() const  
---  
.NET (Gateway/Manager API)
EnExpirationFlags CIMTConGroupSymbol.ExpirFlags()  
---  
Python (Manager API)
MTConGroupSymbol.ExpirFlags  
---  
Return Value
One of the values of the [IMTConSymbol::EnExpirationFlags](imtconsymbol_enum.htm#enexpirationflags) enumeration.
IMTConGroupSymbol::ExpirFlags
Set the type of order expiration allowed for a symbol in this group.
C++
MTAPIRES IMTConGroupSymbol::ExpirFlags( const UINT flags // Expiration types )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.ExpirFlags( EnExpirationFlags flags // Expiration types )  
---  
Python (Manager API)
MTConGroupSymbol.ExpirFlags  
---  
Parameters
flags
[in] To pass the expiration type, the [IMTConSymbol::EnExpirationFlags](imtconsymbol_enum.htm#enexpirationflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.