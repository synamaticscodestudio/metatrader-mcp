# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ UpdateCopy | [](imtexposurearray_update.md "Update") [](imtexposurearray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::UpdateCopy
Changes the asset record at the specified position of an array by copying the parameters of the passed asset object.
C++
MTAPIRES IMTExposureArray::UpdateCopy( const UINT  pos, // Position const IMTExposure* exposure // The asset object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExposureArray.UpdateCopy( uint  pos, // Position CIMTExposure exposure // The asset object )  
---  
Parameters
pos
[in] The position of an asset record in an array, starting with 0.
order
[in] The object of the asset record.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of the 'exposure' object into an asset record object at the specified position of an array.
Unlike the [IMTExposureArray::Update](imtexposurearray_update.md "Update") method, calling this method does not set any additional conditions for the control of the 'exposure' object, but is more resource-intensive, since an additional object is created.