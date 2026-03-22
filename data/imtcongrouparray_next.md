# Next (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupArray ](imtcongrouparray.md "IMTConGroupArray")/ Next | [](imtcongrouparray_total.md "Total") [](imtcongrouparray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray::Next
Get a group object by position.
C++
IMTConGroup* IMTConGroupArray::Next( const UINT index // Group position ) const  
---  
.NET (Gateway/Manager API)
CIMTConGroup CIMTConGroupArray.Next( uint index // Group position )  
---  
Parameters
index
[in] Group position in the array, starting with 0.
Return Value
If successful, the method returns a pointer to the [IMTConGroup](imtcongroup.md "IMTConGroup") group object at the corresponding array position. Otherwise, NULL is returned.
Note
The lifetime of the returned object is controlled by the current array object. Thus, when an array object is deleted, the returned pointer becomes invalid.
Deletion of the returned object (by the [IMTConGroupArray::Release](imtcongrouparray_release.md "Release") call) will cause the pointer stored inside the array object to become invalid, while an attempt to access it (also, when deleting an array object) will cause the plugin and the server to crash.