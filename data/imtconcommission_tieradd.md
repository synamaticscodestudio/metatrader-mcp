# TierAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ TierAdd | [](imtconcommission_turnovercurrency.md "TurnoverCurrency") [](imtconcommission_tierupdate.md "TierUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::TierAdd
Add commission range.
C++
MTAPIRES IMTConCommission::TierAdd( IMTConCommTier* tier // An object of commission range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.TierAdd( CIMTConCommTier tier // An object of commission range )  
---  
Python (Manager API)
MTConCommission.TierAdd( tier # An object of commission range )  
---  
Parameters
tier
[in] An object of the commission range.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.