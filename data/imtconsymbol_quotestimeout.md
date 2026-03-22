# QuotesTimeout (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ QuotesTimeout | [](imtconsymbol_freezelevel.md "FreezeLevel") [](imtconsymbol_volumemin.md "VolumeMin") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::QuotesTimeout
Get the time to wait for quotes, after which trading is automatically disabled for the symbol.
C++
UINT IMTConSymbol::QuotesTimeout() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.QuotesTimeout()  
---  
Python (Manager API)
MTConSymbol.QuotesTimeout  
---  
Return Value
The time to wait for quotes in seconds, after which trading is automatically disabled for the symbol.
IMTConSymbol::QuotesTimeout
Set the time to wait for quotes, after which trading is automatically disabled for the symbol.
C++
MTAPIRES IMTConSymbol::QuotesTimeout( const UINT timeout // Time to wait for quotes )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.QuotesTimeout( uint timeout // Time to wait for quotes )  
---  
Python (Manager API)
MTConSymbol.QuotesTimeout  
---  
Parameters
timeout
[in] The time to wait for quotes of the symbol in seconds.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.