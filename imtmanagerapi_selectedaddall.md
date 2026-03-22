# SelectedAddAll (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Selected Symbols ](imtmanagerapi_selected.md "Selected Symbols")/ SelectedAddAll | [](imtmanagerapi_selectedaddbatch.md "SelectedAddBatch") [](imtmanagerapi_selecteddelete.md "SelectedDelete") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SelectedAddAll
Add all available symbols to the list of selected symbols.
C++
MTAPIRES IMTManagerAPI::SelectedAddAll()  
---  
.NET
MTRetCode CIMTManagerAPI.SelectedAddAll()  
---  
Python
ManagerAPI.SelectedAddAll()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This methods adds all the symbols available to a manager into the list of selected symbols.