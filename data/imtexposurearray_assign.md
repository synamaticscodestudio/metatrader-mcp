# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ Assign | [](imtexposurearray_release.md "Release") [](imtexposurearray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTExposureArray::Assign( const IMTExposureArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExposureArray.Assign( CIMTExposureArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.