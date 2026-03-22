# Add (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupArray ](imtcongrouparray.md "IMTConGroupArray")/ Add | [](imtcongrouparray_clear.md "Clear") [](imtcongrouparray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray::Add
Add a group object at the end of an array.
C++
MTAPIRES IMTConGroupArray::Add( IMTConGroup*  record // group object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupArray.Add( CIMTConGrouop record // group object )  
---  
Parameters
record
[in] [IMTConGroup](imtcongroup.md "IMTConGroup") group object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places a pointer to a passed object at the end of an array. After a successful call of this method, control over the lifetime of the 'record' object is transferred to the array object. Thus, when deleting an array object (by calling [IMTConGroupArray::Release](imtcongrouparray_release.md "Release")), an earlier inserted object will be automatically deleted.
In turn, the deletion of a newly inserted object will cause the pointer stored within the array object to become invalid, and therefore its call (also when deleting the array object) will cause the application to crash.
Please be sure to never add a link to one and the same object within an array, as this will lead to a crash during memory release.
IMTConGroupArray::Add
Add an object of the groups array to the end of an array.
C++
MTAPIRES IMTConGroupArray::Add( IMTConGroupArray* array // Array of groups to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupArray.Add( CIMTConGroupArray array // Array of groups to be added )  
---  
Parameters
array
[in] Group array object [IMTConGroupArray](imtcongrouparray.md "IMTConGroupArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method places the pointers from the 'array' object to the end of the current array and clears the 'array' object.
After a successful method call, control of the objects previously owned by the 'array' object is transfered to the current array object. The 'array' object will be cleared (calling [IMTConGroupArray::Total](imtcongrouparray_total.md "Total") will return 0). When deleting the current array object (call of [IMTConGroupArray::Release](imtcongrouparray_release.md "Release")), earlier inserted objects will be automatically deleted.
In turn, the deletion of a newly inserted object will cause the pointer stored within the current array object to become invalid, and therefore its call (also when deleting the array object) will cause the application to crash. Use the [IMTConGroupArray::Delete](imtcongrouparray_delete.md "Delete") method to correctly delete the element.
Please be sure to never add a link to one and the same object within an array, as this will lead to a crash during memory release.