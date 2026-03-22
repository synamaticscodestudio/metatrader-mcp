# Sector (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Sector | [](imtconsymbol_cfi.md "CFI") [](imtconsymbol_industry.md "Industry") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Sector
Get the economic sector the instrument belongs to.
C++
UINT IMTConSymbol::Sector() const  
---  
.NET (Gateway/Manager API)
EnSectors CIMTConSymbol.Sector()  
---  
Python (Manager API)
MTConSymbol.Sector  
---  
Return Value
[IMTConSymbol::EnSectors](imtconsymbol_enum.htm#ensectors) enumeration value.
IMTConSymbol::Sector
Set the economic sector the instrument belongs to.
C++
MTAPIRES IMTConSymbol::Sector( const UINT sector // economic sector )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Sector( EnGTCMode sector // economic sector )  
---  
Python (Manager API)
MTConSymbol.Sector  
---  
Parameters
sector
[in] The [IMTConSymbol::EnSectors](imtconsymbol_enum.htm#ensectors) enumeration type is used to pass the economic sector.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.