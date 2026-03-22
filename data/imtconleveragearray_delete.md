# Delete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ Delete | [](imtconleveragearray_addcopy.md "AddCopy") [](imtconleveragearray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::Delete
Delete a floating margin configuration object by position.
C++
MTAPIRES IMTConLeverageArray::Delete( const UINT pos // Configuration position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageArray.Delete( uint  pos // Configuration position )  
---  
Parameters
pos
[in] Position of the configuration in the array, starting from 0.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
The object being deleted will be automatically released by calling [IMTConLeverage::Release](imtconleverage_release.md "Release").