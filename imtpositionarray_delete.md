# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionArray ](imtpositionarray.md "IMTPositionArray")/ Delete | [](imtpositionarray_addcopy.md "AddCopy") [](imtpositionarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTPositionArray::Delete
Delete the object of a trade position by the index.
C++
MTAPIRES IMTPositionArray::Delete( const UINT pos // Position index )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPositionArray.Delete( uint pos // Position index )  
---  
Parameters
pos
[in] The index of a trade position in an array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The deleted object will be automatically released by calling the [IMTPosition::Release](imtposition_release.md "Release") method.