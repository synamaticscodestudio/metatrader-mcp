# Shift (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ Shift | [](imtexposurearray_updatecopy.md "UpdateCopy") [](imtexposurearray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::Shift
Changes the position of an asset record in the array.
C++
MTAPIRES IMTExposureArray::Shift( const UINT pos, // Position of the record const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCod CIMTExposureArray.Shift( uint pos, // Position of the record int shift // Shift )  
---  
Parameters
pos
[in] The position of an asset record in an array, starting with 0.
shift
[in] Record shift from its current position. A negative value means the shift to the beginning of an array, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.