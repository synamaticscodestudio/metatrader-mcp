# Add (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ Add | [](imtconleveragearray_clear.md "Clear") [](imtconleveragearray_addcopy.md "AddCopy") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::Add
Add a floating margin configuration object to the end of the array.
C++
MTAPIRES IMTConLeverageArray::Add( IMTConLeverage* record // Configuration object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageArray.Add( CIMTConLeverage record // Configuration object )  
---  
Parameters
record
[in] [IMTConLeverage](imtconleverage.md "IMTConLeverage") configuration object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
This method places a pointer to a passed object at the end of an array. Upon successful method call, the control over the lifetime of the 'record' object is transferred to the array object. Thus, when the array object is deleted (using[IMTClientArray::Release](imtconleveragearray_release.md "Release")), the earlier added object will be automatically removed.
In turn, deleting the just-inserted object will cause the pointer stored within the array object to become invalid. Accessing it (including when deleting the array object) will result in the application.
Under no circumstances should you add a reference to the same object in the array, as doing so will lead to a crash upon memory release.
IMTConLeverageArray::Add
Add an object of a floating margin configuration array to the end of the array.
C++
MTAPIRES IMTConLeverageArray::Add( IMTConLeverageArray* array // Array of configurations to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageArray.Add( CIMTConLeverageArray array // Array of configurations to be added )  
---  
Parameters
array
[in] Configuration array object [IMTConLeverageArray](imtconleveragearray.md "IMTConLeverageArray").
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
This method appends pointer from the 'array' object to the end of the current array and clears the 'array' object.
Upon successful method call, control over objects that earlier belonged to the 'array' object is passed to the current array object. Subsequently, the 'array' object is cleared (calling [IMTConLeverageArray::Total](imtconleveragearray_total.md "Total") will return 0). When the current array object is deleted (using [IMTConLeverageArray::Release](imtconleveragearray_release.md "Release")), the previously added objects will be automatically removed.
Deleting the just-added object will cause the pointer stored within the current array object to become invalid. Accessing it (including when deleting the array object) will cause the application to crash. Use [IMTConLeverageArray::Delete](imtconleveragearray_delete.md "Delete") to delete the element correctly.
Under no circumstances should you add a reference to the same object in the array, as doing so will lead to a crash upon memory release.