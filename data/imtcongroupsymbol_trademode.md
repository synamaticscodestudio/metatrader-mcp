# TradeMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ TradeMode | [](imtcongroupsymbol_path.md "Path") [](imtcongroupsymbol_trademodedefault.md "TradeModeDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::TradeMode
Get the symbol trading mode for the group.
C++
UINT IMTConGroupSymbol::TradeMode() const  
---  
.NET (Gateway/Manager API)
EnTradeMode CIMTConGroupSymbol.TradeMode()  
---  
Python (Manager API)
MTConGroupSymbol.TradeMode  
---  
Return Value
One of the values of the [IMTConSymbol::EnTradeMode](imtconsymbol_enum.htm#entrademode) mode.
IMTConGroupSymbol::TradeMode
Set the symbol trading mode for the group.
C++
MTAPIRES IMTConGroupSymbol::TradeMode( const UINT mode // Trading mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.TradeMode( EnTradeMode mode // Trading mode )  
---  
Python (Manager API)
MTConGroupSymbol.TradeMode  
---  
Parameters
mode
[in] To pass the trading mode, the [IMTConSymbol::EnTradeMode](imtconsymbol_enum.htm#entrademode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.