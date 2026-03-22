# UpdateCopy (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupArray ](imtcongrouparray.md "IMTConGroupArray")/ UpdateCopy | [](imtcongrouparray_update.md "Update") [](imtcongrouparray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray::UpdateCopy
Update a group at the specified position of an array by copying the parameters of a passed group object.
C++
MTAPIRES IMTConGroupArray::UpdateCopy( const UINT  pos, // Position const IMTConGroup*  record // Group object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupArray.UpdateCopy( uint  pos, // Position CIMTConGroup record // Group object )  
---  
Parameters
pos
[in] Group position in the array, starting with 0.
record
[in] Group object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method copies the 'record' object to the parameter object at the specified array position.
Unlike the [IMTConGroupArray::Update](imtcongrouparray_update.md "Update") method, calling this method does not set any additional conditions for the control of the 'record' object, but it is more resource-intensive, since an additional object is created.