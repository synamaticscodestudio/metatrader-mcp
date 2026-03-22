# TierUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ TierUpdate | [](imtconcommission_tieradd.md "TierAdd") [](imtconcommission_tierdelete.md "TierDelete") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::TierUpdate
Update commission range.
C++
MTAPIRES IMTConCommission::TierUpdate( const UINT pos, // Position of the range IMTConCommTier* tier // An object of commission range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.TierUpdate( uint pos, // Position of the range CIMTConCommTier tier // An object of commission range )  
---  
Python (Manager API)
MTConCommission.TierUpdate( pos, # Position of the range tier # An object of commission range )  
---  
MTConCommission.TierSet( tier_list # A list of commission ranges )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
tier
[in] An object of the commission range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.