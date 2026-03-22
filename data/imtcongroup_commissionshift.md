# CommissionShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CommissionShift | [](imtcongroup_commissionclear.md "CommissionClear") [](imtcongroup_commissiontotal.md "CommissionTotal") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CommissionShift
Move a commission setting in the list.
C++
MTAPIRES IMTConGroup::CommissionShift( const UINT pos, // Position of the commission const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CommissionShift( uint pos, // Position of the commission int shift // Shift )  
---  
Python (Manager API)
MTConGroup.CommissionShift( pos, # Position of the commission shift # Shift )  
---  
Parameters
pos
[in] Position of a commission in the list, starting with 0.
shift
[in] Shift of a commission relative to its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.