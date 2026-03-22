# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealArray ](imtdealarray.md "IMTDealArray")/ Clear | [](imtdealarray_assign.md "Assign") [](imtdealarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTDealArray::Clear
Clear an object.
C++
MTAPIRES IMTDealArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDealArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.