# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ Clear | [](imtexposurearray_assign.md "Assign") [](imtexposurearray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::Clear
Clear an object.
C++
MTAPIRES IMTExposureArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExposureArray.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.