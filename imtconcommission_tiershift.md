# TierShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ TierShift | [](imtconcommission_tierclear.md "TierClear") [](imtconcommission_tiertotal.md "TierTotal") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::TierShift
Moves a commission range in the list.
C++
MTAPIRES IMTConCommission::TierShift( const UINT pos, // Position of the range const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.TierShift( uint pos, // Position of the range int shift // Shift )  
---  
Python (Manager API)
MTConCommission.TierShift( pos, # Position of the range shift # Shift )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
shift
[in] Shift of the range relative to its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.