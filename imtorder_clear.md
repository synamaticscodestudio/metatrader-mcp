# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ Clear | [](imtorder_assign.md "Assign") [](imtorder_print.md "Print") |
| --- | --- | --- |
| --- | --- |

IMTOrder::Clear
Clear an object.
C++
MTAPIRES IMTOrder::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.Clear()  
---  
Python
MTOrder.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.