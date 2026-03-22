# TradeMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ TradeMode | [](imtconsymbol_subscriptionsdelay.md "SubscriptionsDelay") [](imtconsymbol_calcmode.md "CalcMode") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::TradeMode
Get the current symbol trading mode.
C++
UINT IMTConSymbol::TradeMode() const  
---  
.NET (Gateway/Manager API)
EnTradeMode CIMTConSymbol.TradeMode()  
---  
Python (Manager API)
MTConSymbol.TradeMode  
---  
Return Value
One of the values of the [IMTConSymbol::EnTradeMode](imtconsymbol_enum.htm#entrademode) mode.
IMTConSymbol::TradeMode
Set the current symbol trading mode.
C++
MTAPIRES IMTConSymbol::TradeMode( const UINT mode // Trading mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.TradeMode( EnTradeMode mode // Trading mode )  
---  
Python (Manager API)
MTConSymbol.TradeMode  
---  
Parameters
mode
[in] To pass the trading mode, the [IMTConSymbol::EnTradeMode](imtconsymbol_enum.htm#entrademode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.