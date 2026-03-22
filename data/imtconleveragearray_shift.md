# Shift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageArray ](imtconleveragearray.md "IMTConLeverageArray")/ Shift | [](imtconleveragearray_updatecopy.md "UpdateCopy") [](imtconleveragearray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageArray::Shift
Change the position of a floating margin configuration in the array.
C++
MTAPIRES IMTConLeverageArray::Shift( const UINT pos, // Configuration position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageArray.Shift( uint pos, // Position configuration int shift // Shift )  
---  
Parameters
pos
[in] Position of the configuration in the array, starting from 0.
shift
[in] Configuration shift relative to its current position. Negative value indicates a shift towards the beginning of the array, while a positive value indicates a shift towards the end.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.