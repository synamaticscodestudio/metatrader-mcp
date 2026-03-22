# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionArray ](imtpositionarray.md "IMTPositionArray")/ AddCopy | [](imtpositionarray_add.md "Add") [](imtpositionarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTPositionArray::AddCopy
Add a copy of an object of a trade position at the end of an array.
C++
MTAPIRES IMTPositionArray::AddCopy( const IMTPosition* position // The position that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPositionArray.AddCopy( CIMTPosition position // The position that is being added )  
---  
Parameters
position
[in] An object of a trade position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the position object and places it at the end of the array.
Unlike [IMTPositionArray::Add(IMTPosition* position)](imtpositionarray_add.md "Add"), calling this method does not set any additional conditions for the control of the position object, but is more resource-intensive, since an additional object is created.
IMTPositionArray::AddCopy
Add copies of the objects of trade positions in an array.
C++
MTAPIRES IMTPositionArray::AddCopy( const IMTPositionArray* array // The array of positions that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPositionArray.AddCopy( CIMTPositionArray array // The array of positions that is being added )  
---  
Parameters
array
[in] An object of the array of trade positions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the objects of positions belonging to the array object, and inserts them at the end of the current array.
Unlike [IMTPositionArray::Add(IMTPositionArray* array)](imtpositionarray_add.md "Add"), calling this method does not change the source array object, but is more resource-intensive, since additional objects are created.