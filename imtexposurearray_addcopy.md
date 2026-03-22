# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ AddCopy | [](imtexposurearray_add.md "Add") [](imtexposurearray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::AddCopy
Adds a copy of an asset record object at the end of an array.
C++
MTAPIRES IMTExposureArray::AddCopy( const IMTExposure* exposure // Asset record object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExposureArray.AddCopy( CIMTExposure  exposure // Asset record object )  
---  
Parameters
exposure
[in] The object of the asset record.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the 'exposure' object and places it at the end of the array.
Unlike [IMTExposureArray::Add(IMTExposure* exposure)](imtexposurearray_add.md "Add"), calling this method does not set any additional conditions for the control of the 'exposure' object, but is more resource-intensive, since an additional object is created.
IMTExposureArray::AddCopy
Adds copies of the asset record objects to an array.
C++
MTAPIRES IMTExposureArray::AddCopy( const IMTExposureArray* array // An object of exposure records array )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExposureArray.AddCopy( CIMTExposureArray  array // An object of exposure records array )  
---  
Parameters
array
[in] An object of arrays of exposure records.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates copies of asset record objects belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTExposureArray::Add(IMTExposureArray* array)](imtexposurearray_add.md "Add"), calling this method does not change the source 'array' object, but is more resource-intensive, since additional objects are created.