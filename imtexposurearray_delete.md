# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ Delete | [](imtexposurearray_addcopy.md "AddCopy") [](imtexposurearray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::Delete
Deletes the asset record object from the array by its index.
C++
MTAPIRES IMTExposureArray::Delete( const UINT pos // Position of the record )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExposureArray.Delete( uint pos // Position of the record )  
---  
Parameters
pos
[in] The position of an asset starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The object to delete will be automatically released by calling the [IMTExposure::Release](imtexposure_release.md "Release") method.