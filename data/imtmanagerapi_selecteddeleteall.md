# SelectedDeleteAll (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Selected Symbols ](imtmanagerapi_selected.md "Selected Symbols")/ SelectedDeleteAll | [](imtmanagerapi_selecteddeletebatch.md "SelectedDeleteBatch") [](imtmanagerapi_selectedshift.md "SelectedShift") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SelectedDeleteAll
Delete all symbols from the list of selected symbols
C++
MTAPIRES IMTManagerAPI::SelectedDeleteAll()  
---  
.NET
MTRetCode CIMTManagerAPI.SelectedDeleteAll()  
---  
Python
ManagerAPI.SelectedDeleteAll()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Symbols for which there are [unfulfilled orders](imtmanagerapi_ordergetopen.md "OrderGetOpen") pr [open positions](imtmanagerapi_positionget.md "PositionGet")(in the appropriate [pimping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode")) cannot be deleted.