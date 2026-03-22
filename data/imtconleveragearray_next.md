# Next (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ Next | [](imtconleveragearray_total.md "Total") [](imtconleveragearray_sort.md "Sort") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::Next
Get a floating margin configuration object by position.
C++
IMTConLeverage* IMTConLeverageArray::Next( const UINT index // Configuration position ) const  
---  
.NET (Gateway/Manager API)
CIMTConLeverage CIMTConLeverageArray.Next( uint index // Configuration position )  
---  
Parameters
index
[in] Position of the configuration in the array, starting from 0.
Return Value
If successful, the method returns a pointer to the [IMTConLeverage](imtconleverage.md "IMTConLeverage") configuration object located at the corresponding position in the array. Otherwise, it returns NULL.
Note
The lifetime of the returned object is controlled by the current array object. Consequently, when the array object is deleted, the returned pointer will become invalid.
Deleting the returned object (by calling [IMTConLeverageArray::Release](imtconleveragearray_release.md "Release")) will cause the pointer stored within the array object to become invalid. Accessing it (including when deleting the array object) will result in the plugin and server crash.