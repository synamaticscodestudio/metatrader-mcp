# AddCopy (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupArray ](imtcongrouparray.md "IMTConGroupArray")/ AddCopy | [](imtcongrouparray_add.md "Add") [](imtcongrouparray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray::AddCopy
Add a copy of a group object to the end of an array.
C++
MTAPIRES IMTConGroupArray::AddCopy( const IMTConGroup* record // Group to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupArray.AddCopy( CIMTConGroup record // Group to be added )  
---  
Parameters
record
[in] [IMTConGroup](imtcongroup.md "IMTConGroup") group object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the 'record' object and places it to the end of the array.
Unlike [IMTConGroupArray::Add(IMTConGroup* record)](imtcongrouparray_add.md "Add"), calling this method does not set any additional conditions for the control of the daily object, but it is more resource-intensive, since an additional object is created.
IMTConGroupArray::AddCopy
Add copies of group objects to an array.
C++
MTAPIRES IMTConGroupArray::AddCopy( const IMTConGroupArray* array // Group array to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupArray.AddCopy( CIMTConGroupArray array // Group array to be added )  
---  
Parameters
array
[in] Group array object [IMTConGroupArray](imtcongrouparray.md "IMTConGroupArray").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of objects belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTConGroupArray::Add(IMTConGroupArray* array)](imtcongrouparray_add.md "Add"), this method call does no change the original 'array' object but it is more resource intensive as additional objects are created.