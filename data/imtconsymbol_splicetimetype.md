# SpliceTimeType (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SpliceTimeType | [](imtconsymbol_splicetype.md "SpliceType") [](imtconsymbol_splicetimedays.md "SpliceTimeDays") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SpliceTimeType
Gets the date of splicing of futures contracts.
C++
UINT IMTConSymbol::SpliceTimeType() const  
---  
.NET (Gateway/Manager API)
EnSpliceTimeType CIMTConSymbol.SpliceTimeType()  
---  
Python (Manager API)
MTConSymbol.SpliceTimeType  
---  
Return Value
A value of the [IMTConSymbol::EnSpliceTimeType](imtconsymbol_enum.htm#ensplicetimetype) enumeration.
IMTConSymbol::SpliceTimeType
Sets the date of splicing of futures contracts.
C++
MTAPIRES IMTConSymbol::SpliceTimeType( const UINT time_type // Splicing date )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SpliceTimeType( EnSpliceTimeType time_type // Splicing date )  
---  
Python (Manager API)
MTConSymbol.SpliceTimeType  
---  
Parameters
time_type
[in] Futures contracts splicing date. [IMTConSymbol::EnSpliceTimeType](imtconsymbol_enum.htm#ensplicetimetype) is used to pass the date.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.