# Detach (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ Detach | [](imtconleveragearray_delete.md "Delete") [](imtconleveragearray_update.md "Update") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::Detach
Detach a floating margin configuration object from the array.
C++
IMTConLeverage* IMTConLeverageArray::Detach( const UINT pos // Configuration position )  
---  
.NET (Gateway/Manager API)
CIMTConLeverage CIMTConLeverageArray.Detach( uint pos // Configuration position )  
---  
Parameters
pos
[in] Position of the configuration in the array, starting from 0.
Return Value
Returns a pointer to the detached configuration object [IMTConLeverage](imtconleverage.md "IMTConLeverage").
Note
This method removes the pointer to the object at the given position of the array and returns it. The size of the array is decreased by one, while the deleted object is not freed.