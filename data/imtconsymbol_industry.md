# Industry (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ Industry | [](imtconsymbol_sector.md "Sector") [](imtconsymbol_country.md "Country") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::Industry
Get the industry branch the instrument belongs to.
C++
UINT IMTConSymbol::Industry() const  
---  
.NET (Gateway/Manager API)
EnIndustries CIMTConSymbol.Industry()  
---  
Python (Manager API)
MTConSymbol.Industry  
---  
Return Value
[IMTConSymbol::EnIndustries](imtconsymbol_enum.htm#enindustries) enumeration value.
IMTConSymbol::Industry
Set the industry branch the instrument belongs to.
C++
MTAPIRES IMTConSymbol::Industry( const UINT industry // industry type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.Industry( EnIndustries industry // industry type )  
---  
Python (Manager API)
MTConSymbol.Industry  
---  
Parameters
industry
[in] The [IMTConSymbol::EnIndustries](imtconsymbol_enum.htm#enindustries) enumeration type is used to pass the industry type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.