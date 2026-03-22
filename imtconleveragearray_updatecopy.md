# UpdateCopy (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ UpdateCopy | [](imtconleveragearray_update.md "Update") [](imtconleveragearray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::UpdateCopy
Update the floating margin configuration at the specified array position by copying the passed configuration object.
C++
MTAPIRES IMTConLeverageArray::UpdateCopy( const UINT  pos, // Position const IMTConLeverage* record // Configuration object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageArray.UpdateCopy( uint  pos, // Position CIMTConLeverage record // Configuration object )  
---  
Parameters
pos
[in] Position of the configuration in the array, starting from 0.
record
[in] [IMTConLeverage](imtconleverage.md "IMTConLeverage") configuration object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method copies the 'record' object to the configuration object located at the specified position of the array.
In contrast to [IMTConLeverageArray::Update](imtconleveragearray_update.md "Update"), calling this method does not impose any additional conditions on managing the 'record' object. However, it is more resource-intensive since an additional object is created.