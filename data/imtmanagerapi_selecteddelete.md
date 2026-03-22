# SelectedDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Selected Symbols ](imtmanagerapi_selected.md "Selected Symbols")/ SelectedDelete | [](imtmanagerapi_selectedaddall.md "SelectedAddAll") [](imtmanagerapi_selecteddeletebatch.md "SelectedDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SelectedDelete
Remove a symbol from the list of selected symbols by the name.
C++
MTAPIRES IMTManagerAPI::SelectedDelete( LPCWSTR symbol // Symbol name )  
---  
.NET
MTRetCode CIMIManagerAPI.SelectedDelete( string symbol // Symbol name )  
---  
Python
ManagerAPI.SelectedDelete( str symbol # Symbol name )  
---  
Parameters
symbol
[in] Symbol name. The [IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the symbol name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Symbols for which there are [unfulfilled orders](imtmanagerapi_ordergetopen.md "OrderGetOpen") pr [open positions](imtmanagerapi_positionget.md "PositionGet")(in the appropriate [pimping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode")) cannot be deleted.
IMTManagerAPI::SelectedDelete
Remove a symbol from the list of selected symbols by the index.
C++
MTAPIRES IMTManagerAPI::SelectedDelete( const UINT pos // Position of the symbol )  
---  
.NET
MTRetCode CIMTManagerAPI.SelectedDelete( uint pos // Position of the symbol )  
---  
Python
ManagerAPI.SelectedDelete( int pos # Position of the symbol )  
---  
Parameters
pos
[in] Position of the symbol in the list of selected symbols, ranging from 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Symbols for which there are [unfulfilled orders](imtmanagerapi_ordergetopen.md "OrderGetOpen") pr [open positions](imtmanagerapi_positionget.md "PositionGet")(in the appropriate [pimping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode")) cannot be deleted.