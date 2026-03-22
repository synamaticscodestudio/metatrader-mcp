# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ Clear | [](imtposition_assign.md "Assign") [](imtposition_print.md "Print") |
| --- | --- | --- |
| --- | --- |

IMTPosition::Clear
Clear an object.
C++
MTAPIRES IMTPosition::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.