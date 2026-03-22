# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Clear | [](imtdeal_assign.md "Assign") [](imtdeal_print.md "Print") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Clear
Clear an object.
C++
MTAPIRES IMTDeal::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Clear()  
---  
Python
MTDeal.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.