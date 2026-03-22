# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPositionArray ](imtpositionarray.md "IMTPositionArray")/ Assign | [](imtpositionarray_release.md "Release") [](imtpositionarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTPositionArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTPositionArray::Assign( const IMTPositionArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPositionArray.Assign( CIMTPositionArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.