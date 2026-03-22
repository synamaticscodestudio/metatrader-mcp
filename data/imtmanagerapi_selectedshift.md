# SelectedShift (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Selected Symbols ](imtmanagerapi_selected.md "Selected Symbols")/ SelectedShift | [](imtmanagerapi_selecteddeleteall.md "SelectedDeleteAll") [](imtmanagerapi_selectedtotal.md "SelectedTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SelectedShift
Shift a symbol in the list of selected symbols
C++
MTAPIRES IMTManagerAPI::SelectedShift( const UINT pos, // Position of the symbol const int shift // Shift )  
---  
.NET
MTRetCode CIMTManagerAPI.SelectedShift( uint pos, // Position of the symbol int shift // Shift )  
---  
Python
ManagerAPI.SelectedShift( pos, # Position of the symbol shift # Shift )  
---  
Parameters
pos
[in] Position of the symbol in the list of selected symbols, ranging from 0.
shift
[in] Shift of a symbol from its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.