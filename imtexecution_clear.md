# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Clear | [](imtexecution_assign.md "Assign") [](imtexecution_print.md "Print") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Clear
Clear an object.
C++
MTAPIRES IMTExecution::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.