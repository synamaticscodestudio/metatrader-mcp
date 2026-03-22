# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionArray ](imtpositionarray.md "IMTPositionArray")/ UpdateCopy | [](imtpositionarray_update.md "Update") [](imtpositionarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTPositionArray::UpdateCopy
Change a trade position at the specified position of an array by copying the parameters of a passed object of a trade position.
C++
MTAPIRES IMTPositionArray::UpdateCopy( const UINT  pos, // Position const IMTOrder* order // An object of a trade order )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPositionArray.UpdateCopy( uint  pos, // Position CIMTOrder order // An object of a trade order )  
---  
Parameters
pos
[in] The index of a trade position in an array, starting with 0.
order
[in] An object of a trade position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of the position object into an object of a trade position at the specified position of an array.
Unlike the [IMTPositionArray::Update](imtorderarray_update.md "Update") method, calling this method does not set any additional conditions for the control of the position object, but is more resource-intensive, since an additional object is created.