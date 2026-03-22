# Add (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ Add | [](imtexposurearray_clear.md "Clear") [](imtexposurearray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::Add
Adds an asset record object at the end of an array.
C++
MTAPIRES IMTExposureArray::Add( IMTExposure* exposure // The asset record to add )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExposureArray.Add( CIMTExposure exposure // The asset record to add )  
---  
Parameters
exposure
[in] The object of the asset record.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, the control over the life time of the 'exposure' object is passed to the array object. Thus, when deleting an array object (call of [IMTExposureArray::Release](imtexposurearray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the array object to become invalid, and its call (including the case of array object deletion) will cause crash of the application.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
IMTExposureArray::Add
Adds an object of arrays of exposure records to the end of an array.
C++
MTAPIRES IMTExposureArray::Add( IMTExposureArray* array // An object of exposure records array )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExposureArray.Add( CIMTExposureArray array // An object of exposure records array )  
---  
Parameters
array
[in] An object of arrays of exposure records.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers, which are in the array object, at the end of the current array and clears the array object.
After a successful call of this method, control of objects that earlier belonged to the array object is passed to the current array object. The array object is cleared (call of [IMTExposureArray::Total](imtexposurearray_total.md "Total") returns 0). When deleting the current array object (call of [IMTExposureArray::Release](imtexposurearray_release.md "Release")), earlier inserted objects are automatically removed.
In turn, the removal of a newly inserted object will cause the pointer stored within the current array object to become invalid, and its call (including the case of array object deletion) will cause the crash of the plugin and the server. Use [IMTExposureArray::Delete](imtexposurearray_delete.md "Delete") method to delete the element correctly..
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example:
//--- Example IMTExposureArray *array =api->ExposureCreateArray(); IMTExposure *exposure=api->ExposureCreate(); //--- array->Add(exposure);// After that the lifetime is controlled by the array array->Delete(0); // Delete the first element, after which the pointer in exposure becomes invalid (Release has been called) //--- An example of incorrect use IMTExposureArray *array =api->ExposureCreateArray(); IMTExposure *exposure=api->ExposureCreate(); //--- array->Add(exposure);  array->Add(exposure); // In this case the array contains two pointers to the same object! //--- Array clearing will cause crash, because two attempts will be made to delete the same object  
---