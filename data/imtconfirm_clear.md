# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ Clear | [](imtconfirm_assign.md "Assign") [](imtconfirm_print.md "Print") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::Clear
Clear an object.
C++
MTAPIRES IMTConfirm::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.