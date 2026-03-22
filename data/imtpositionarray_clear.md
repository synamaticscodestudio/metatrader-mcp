# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionArray ](imtpositionarray.md "IMTPositionArray")/ Clear | [](imtpositionarray_assign.md "Assign") [](imtpositionarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTPositionArray::Clear
Clear an object.
C++
MTAPIRES IMTPositionArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPositionArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.