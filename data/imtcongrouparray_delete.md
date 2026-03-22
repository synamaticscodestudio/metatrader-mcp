# Delete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupArray ](imtcongrouparray.md "IMTConGroupArray")/ Delete | [](imtcongrouparray_addcopy.md "AddCopy") [](imtcongrouparray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray::Delete
Delete a group object by position.
C++
MTAPIRES IMTConGroupArray::Delete( const UINT pos // Group position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupArray.Delete( uint  pos // Group position )  
---  
Parameters
pos
[in] Group position in the array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The deleted object will be automatically released by [IMTConGroup::Release](imtcongroup_release.md "Release") method call.