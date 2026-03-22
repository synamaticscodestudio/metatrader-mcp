# SelectedAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Selected Symbols ](imtmanagerapi_selected.md "Selected Symbols")/ SelectedAdd | [](imtmanagerapi_selected.md "Selected Symbols") [](imtmanagerapi_selectedaddbatch.md "SelectedAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SelectedAdd
Add a symbol to the list by the name.
C++
MTAPIRES IMTManagerAPI::SelectedAdd( LPCWSTR symbol // Symbol name )  
---  
.NET
MTRetCode CIMTManagerAPI.SelectedAdd( string symbol // Symbol name )  
---  
Python
ManagerAPI.SelectedAdd( symbol  # Symbol name )  
---  
Parameters
symbol
[in] Symbol name. The [IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the symbol name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.