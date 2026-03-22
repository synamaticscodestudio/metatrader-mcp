# SpliceTimeDays (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SpliceTimeDays | [](imtconsymbol_splicetimetype.md "SpliceTimeType") [](imtconsymbol_chartmode.md "ChartMode") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SpliceTimeDays
Getting the shift of splicing of futures contracts.
C++
UINT IMTConSymbol::SpliceTimeDays() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.SpliceTimeDays()  
---  
Python (Manager API)
MTConSymbol.SpliceTimeDays  
---  
Return Value
The splicing shift in the number of days to the past from the symbol's expiration date [IMTConSymbol::TimeExpiration](imtconsymbol_timeexpiration.md "TimeExpiration").
IMTConSymbol::SpliceTimeDays
Setting the shift of splicing of futures contracts.
C++
MTAPIRES IMTConSymbol::SpliceTimeDays( const UINT days // Splicing shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SpliceTimeDays( uint days // Splicing shift )  
---  
Python (Manager API)
MTConSymbol.SpliceTimeDays  
---  
Parameters
days
[in] The splicing shift as a number of days to the past from the symbol's expiration date [IMTConSymbol::TimeExpiration](imtconsymbol_timeexpiration.md "TimeExpiration").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.