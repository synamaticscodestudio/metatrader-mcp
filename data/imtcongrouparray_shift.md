# Shift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupArray ](imtcongrouparray.md "IMTConGroupArray")/ Shift | [](imtcongrouparray_updatecopy.md "UpdateCopy") [](imtcongrouparray_total.md "Total") |
| --- | --- | --- |
| --- | --- |

IMTConGroupArray::Shift
Change the position of a group in an array.
C++
MTAPIRES IMTConGroupArray::Shift( const UINT pos, // Group position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupArray.Shift( uint pos, // Group position int shift // Shift )  
---  
Parameters
pos
[in] Group position in the array, starting with 0.
shift
[in] Shift of a group relative to its current position. A negative value means shifting towards the beginning of an array, a positive value - towards its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.