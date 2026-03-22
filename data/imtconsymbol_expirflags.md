# ExpirFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ ExpirFlags | [](imtconsymbol_fillflags.md "FillFlags") [](imtconsymbol_spread.md "Spread") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::ExpirFlags
Get the available type of order expiration for a symbol.
C++
UINT IMTConSymbol::ExpirFlags() const  
---  
.NET (Gateway/Manager API)
EnExpirationFlags CIMTConSymbol.ExpirFlags()  
---  
Python (Manager API)
MTConSymbol.ExpirFlags  
---  
Return Value
A value of the [IMTConSymbol::EnExpirationFlags](imtconsymbol_enum.htm#enexpirationflags) enumeration.
IMTConSymbol::ExpirFlags
Set the available types of order execution for a symbol.
C++
MTAPIRES IMTConSymbol::ExpirFlags( const UINT flags // The flags of order expiration types )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.ExpirFlags( EnExpirationFlags flags // The flags of order expiration types )  
---  
Python (Manager API)
MTConSymbol.ExpirFlags  
---  
Parameters
flags
[in] To pass the order expiration types, the [IMTConSymbol::EnExpirationFlags](imtconsymbol_enum.htm#enexpirationflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.