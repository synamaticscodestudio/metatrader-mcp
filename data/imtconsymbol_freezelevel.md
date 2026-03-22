# FreezeLevel (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ FreezeLevel | [](imtconsymbol_stopslevel.md "StopsLevel") [](imtconsymbol_quotestimeout.md "QuotesTimeout") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::FreezeLevel
Get the price band, within which it is not allowed to modify orders and positions.
C++
INT IMTConSymbol::FreezeLevel() const  
---  
.NET (Gateway/Manager API)
int CIMTConSymbol.FreezeLevel()  
---  
Python (Manager API)
MTConSymbol.FreezeLevel  
---  
Return Value
The price band, within which it is not allowed to modify orders and positions.
IMTConSymbol::FreezeLevel
Set the price band, within which it is not allowed to modify orders and positions.
C++
MTAPIRES IMTConSymbol::FreezeLevel( const INT level // The price band )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.FreezeLevel( int level // The price band )  
---  
Python (Manager API)
MTConSymbol.FreezeLevel  
---  
Parameters
level
[in] The price band, within which it is not allowed to modify orders and positions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.