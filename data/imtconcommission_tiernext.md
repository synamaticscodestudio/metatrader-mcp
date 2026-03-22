# TierNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ TierNext | [](imtconcommission_tiertotal.md "TierTotal") [](imtconcommtier.md "IMTConCommTier") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::TierNext
Get a commission range by the index.
C++
MTAPIRES IMTConCommission::TierNext( const UINT pos, // Position of the range IMTConCommTier* tier // An object of commission range ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.TierNext( uint pos, // Position of the range CIMTConCommTier tier // An object of commission range )  
---  
Python (Manager API)
MTConCommission.TierNext( pos # Position of the range )  
---  
MTConCommission.TierGet()  
---  
Parameters
pos
[in] Position of the range, starting with 0.
tier
[out] An object of the commission range. The tier object must be first created using the [IMTAdminAPI::GroupTierCreate](imtadminapi_grouptiercreate.md "GroupTierCreate") or [IMTManagerAPI::GroupTierCreate](imtmanagerapi_grouptiercreate.md "GroupTierCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the parameters of the range with a specified index to the tier object.