# TierDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ TierDelete | [](imtconcommission_tierupdate.md "TierUpdate") [](imtconcommission_tierclear.md "TierClear") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::TierDelete
Delete a commission range by the index.
C++
MTAPIRES IMTConCommission::TierDelete( const UINT pos // Position of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.TierDelete( uint pos // Position of the range )  
---  
Python (Manager API)
MTConCommission.TierDelete( pos # Position of the range )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.