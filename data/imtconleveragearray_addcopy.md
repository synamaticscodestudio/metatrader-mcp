# AddCopy (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ AddCopy | [](imtconleveragearray_add.md "Add") [](imtconleveragearray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::AddCopy
Add a copy of a floating margin configuration object to the end of the array.
C++
MTAPIRES IMTConLeverageArray::AddCopy( const IMTConLeverage* record // Configuration to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageArray.AddCopy( CIMTConLeverage record // Configuration to be added )  
---  
Parameters
record
[in] [IMTConLeverage](imtconleverage.md "IMTConLeverage") configuration object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
This method creates a copy of the 'record' object and appends it to the end of the array.
In contrast to [IMTConLeverageArray::Add(IMTConLeverage* record)](imtconleveragearray_add.md "Add"), calling this method does not impose any additional conditions on managing the 'record' object, but it is more resource-intensive since an additional object is created.
IMTConLeverageArray::AddCopy
Add copies of floating margin configuration objects to an array.
C++
MTAPIRES IMTConLeverageArray::AddCopy( const IMTConLeverageArray* array // Array with configurations to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageArray.AddCopy( CIMTConLeverageArray array // Array of configurations to be added )  
---  
Parameters
array
[in] Configuration array object [IMTConSymbolArray](imtconleveragearray.md "IMTConLeverageArray").
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
This method creates copies of the objects belonging to the 'array' object and appends them to the end of the current array.
In contrast to [IMTConLeverageArray::Add(IMTConLeverageArray* array)](imtconleveragearray_add.md "Add"), calling this method does not modify the original 'array' object, but it is more resource-intensive since additional objects are created.