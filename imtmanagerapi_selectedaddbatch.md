# SelectedAddBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Selected Symbols ](imtmanagerapi_selected.md "Selected Symbols")/ SelectedAddBatch | [](imtmanagerapi_selectedadd.md "SelectedAdd") [](imtmanagerapi_selectedaddall.md "SelectedAddAll") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SelectedAddBatch
Add a batch of symbols to the list of selected symbols.
C++
MTAPIRES IMTManagerAPI::SelectedAddBatch( LPWSTR*  symbols, // An array of symbols UINT symbols_total // The number of symbols )  
---  
.NET
MTRetCode CIMTManagerAPI.SelectedAddBatch( array<String^>^  symbols // An array of symbols )  
---  
Python
ManagerAPI.SelectedAddBatch( symbols # An array of symbols )  
---  
Parameters
symbols
[in] An array of pointers to symbol names.
symbols_total
[in] The number of elements in the 'symbols' array.
Return value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.