# Detach (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupArray ](imtcongrouparray.md "IMTConGroupArray")/ Detach | [](imtcongrouparray_delete.md "Delete") [](imtcongrouparray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray::Detach
Detach a group object from an array.
C++
IMTConGroup* IMTConGroupArray::Detach( const UINT pos // Group position )  
---  
.NET (Gateway/Manager API)
CIMTConGroup CIMTConGroupArray.Detach( uint pos // Group position )  
---  
Parameters
pos
[in] Group position in the array, starting with 0.
Return Value
Returns a pointer to the detached [IMTConGroup](imtcongroup.md "IMTConGroup") group object.
Note
This method removes the object pointer at the given position of the array and returns it. The size of the array is decreased by one, while the deleted object is not freed.