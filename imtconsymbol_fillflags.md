# FillFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ FillFlags | [](imtconsymbol_gtcmode.md "GTCMode") [](imtconsymbol_expirflags.md "ExpirFlags") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::FillFlags
Get the types of filling allowed for a symbol in this symbol.
C++
UINT IMTConSymbol::FillFlags() const  
---  
.NET (Gateway/Manager API)
EnFillingFlags CIMTConSymbol.FillFlags()  
---  
Python (Manager API)
MTConSymbol.FillFlags  
---  
Return Value
A value of the [IMTConSymbol::EnFillingFlags](imtconsymbol_enum.htm#enfillingflags) enumeration.
IMTConSymbol::FillFlags
Set the types of filling allowed for a symbol in this symbol.
C++
MTAPIRES IMTConSymbol::FillFlags( const UINT flags // Flags of filling types )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.FillFlags( EnFillingFlags flags // Flags of filling types )  
---  
Python (Manager API)
MTConSymbol.FillFlags  
---  
Parameters
flags
[in] To pass the filling types, the [IMTConSymbol::EnFillingFlags](imtconsymbol_enum.htm#enfillingflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.