# Update (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureArray ](imtexposurearray.md "IMTExposureArray")/ Update | [](imtexposurearray_detach.md "Detach") [](imtexposurearray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTExposureArray::Update
Modifies the asset record at the specified position of an array.
C++
MTAPIRES IMTExposureArray::Update( const UINT pos, // The position of the record IMTExposure* exposure // Asset record object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExposureArray.Update( uint pos, // The position of the record CIMTExposure exposure // Asset record object )  
---  
Parameters
pos
[in] The position of an asset record in an array, starting with 0.
exposure
[in] The object of the asset record.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The IMTExposureArray::Update method deletes the previous element (call of [IMTExposure::Release](imtexposure_release.md "Release")) and replaces it with a new one. After that, the lifetime of a new element is controlled by an array object. Thus, when deleting an array object (call of [IMTExposureArray::Release](imtexposurearray_release.md "Release")), an earlier inserted object is automatically removed.
In turn, the removal of a previously inserted object will cause the pointer to it, which is stored inside an array object, to be no longer valid. Therefore, call to this pointer (including the case of array object deletion) will cause crash of the application.
Never add a link to one and the same object in an array, because this will lead to a crash during memory release.
Example:
//--- Example IMTExposureArray *array =api->ExposureCreateArray(); IMTExposure *exposure1=api->ExposureCreate(); IMTExposure *exposure2=api->ExposureCreate(); //--- array->Add(exposure1); array->Update(0,exposure2); // The first element (the exposure1 object) is replaced with exposure2 //--- After that the exposure1 element will be released through Release, and the lifetime of exposure2 will be controlled by the array  
---