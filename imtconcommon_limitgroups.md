# LimitGroups (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ LimitGroups | [](imtconcommon_limitdeals.md "LimitDeals") [](imtconcommon_limitsymbols.md "LimitSymbols") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::LimitGroups
Get the maximum number of [groups](config_group.md "Groups") that can be created in the trading platform.
C++
UINT IMTConCommon::LimitGroups() const  
---  
.NET (Gateway/Manager API)
uint CIMTConCommon.LimitGroups()  
---  
Python (Manager API)
MTConCommon.LimitGroups  
---  
Return Value
The maximum number of groups.
Note
The maximum number of groups is specified in the license. This number includes predefined [groups](config_group.md "Groups").