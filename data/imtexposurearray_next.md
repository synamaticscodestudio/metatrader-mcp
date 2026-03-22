# Next (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ Next | [](imtexposurearray_total.md "Total") [](imtexposurearray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::Next
Gets an asset record object by its index.
C++
IMTExposure* IMTExposureArray::Next( const UINT index // Position of the record ) const  
---  
.NET (Gateway/Manager API)
CIMTExposure CIMTExposureArray.Next( uint index // Position of the record )  
---  
Parameters
index
[in] The position of an asset record in an array, starting with 0.
Return Value
If successful, it returns a pointer to the asset record object at the specified position in the array. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when deleting an array object, the returned pointer will be invalid.
Removal of the returned object (by calling [IMTExposure::Release](imtexposure_release.md "Release")) will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause application crash.