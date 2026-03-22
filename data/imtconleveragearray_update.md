# Update (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ Update | [](imtconleveragearray_detach.md "Detach") [](imtconleveragearray_updatecopy.md "UpdateCopy") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::Update
Update the floating margin configuration at the specified array position.
C++
MTAPIRES IMTConLeverageArray::Update( const UINT pos, // Position IMTConSymbol* record // Configuration object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageArray.Update( uint pos, // Position CIMTConSymbol record // Configuration object )  
---  
Parameters
pos
[in] Position of the configuration in the array, starting from 0.
record
[in] [IMTConLeverage](imtconleverage.md "IMTConLeverage") configuration object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
IMTConLeverageArray::Update deletes the previous element (by calling [IMTConLeverage::Release](imtconleverage_release.md "Release")) and replaces it with a new one. After that, the lifetime of the new element is controlled by the array object. Thus, when the array object is deleted (using IMTConLeverageArray::Release), the earlier added object will be automatically deleted.
In turn, deleting a previously added object will cause the pointer to it, stored within the array object, to become invalid. Consequently, accessing this pointer (including when deleting the array object) will cause the application to crash.
Under no circumstances should you add a reference to the same object in the array, as doing so will lead to a crash upon memory release.