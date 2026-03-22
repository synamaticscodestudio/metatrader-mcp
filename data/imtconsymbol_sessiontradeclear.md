# SessionTradeClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SessionTradeClear | [](imtconsymbol_sessiontradedelete.md "SessionTradeDelete") [](imtconsymbol_sessiontradeshift.md "SessionTradeShift") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SessionTradeClear
Clear the list of all trading sessions of a symbol.
C++
MTAPIRES IMTConSymbol::SessionTradeClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SessionTradeClear()  
---  
Python (Manager API)
MTConSymbol.SessionTradeClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.