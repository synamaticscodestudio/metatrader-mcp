# SpliceType (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SpliceType | [](imtconsymbol_accruedinterest.md "AccruedInterest") [](imtconsymbol_splicetimetype.md "SpliceTimeType") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SpliceType
Getting the type of splicing of futures contracts.
C++
UINT IMTConSymbol::SpliceType() const  
---  
.NET (Gateway/Manager API)
EnSpliceType CIMTConSymbol.SpliceType()  
---  
Python (Manager API)
MTConSymbol.SpliceType  
---  
Return Value
A value of the [IMTConSymbol::EnSpliceType](imtconsymbol_enum.htm#ensplicetype) enumeration.
IMTConSymbol::SpliceType
Setting the type of splicing of futures contracts.
C++
MTAPIRES IMTConSymbol::AccruedInterest( const UINT  type // Splicing type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.AccruedInterest( EnSpliceType type // Splicing type )  
---  
Python (Manager API)
MTConSymbol.SpliceType  
---  
Parameters
type
[in] Futures contracts splicing type. [IMTConSymbol::EnSpliceType](imtconsymbol_enum.htm#ensplicetype) is used to pass the type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.