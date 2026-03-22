# SelectedDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Selected Symbols ](imtmanagerapi_selected.md "Selected Symbols")/ SelectedDeleteBatch | [](imtmanagerapi_selecteddelete.md "SelectedDelete") [](imtmanagerapi_selecteddeleteall.md "SelectedDeleteAll") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SelectedDeleteBatch
Delete a batch of symbols from the list of selected symbols.
C++
MTAPIRES IMTManagerAPI::SelectedDeleteBatch( LPWSTR*  symbols, // An array of symbols UINT symbols_total // The number of symbols )  
---  
.NET
MTRetCode CIMTManagerAPI.SelectedDeleteBatch( array<String^>^  symbols // An array of symbols )  
---  
Python
ManagerAPI.SelectedDeleteBatch( symbols # An array of symbols )  
---  
Parameters
symbols
[in] An array of pointers to symbol names.
symbols_total
[in] The number of elements in the 'symbols' array.
Return value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
You cannot delete symbols, for which you currently have [unfilled orders](imtmanagerapi_ordergetopen.md "OrderGetOpen") or [open positions](imtmanagerapi_positionget.md "PositionGet")(in appropriate [pumping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode")).