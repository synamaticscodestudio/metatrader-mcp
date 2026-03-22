# LimitDeals (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ LimitDeals | [](imtconcommon_limitaccounts.md "LimitAccounts") [](imtconcommon_limitgroups.md "LimitGroups") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::LimitDeals
Get the maximum number of [deals](trading_deal.md "Deals") that can be committed in the trading platform.
C++
UINT IMTConCommon::LimitDeals() const  
---  
.NET (Gateway/Manager API)
uint CIMTConCommon.LimitDeals()  
---  
Python (Manager API)
MTConCommon.LimitDeals  
---  
Return Value
The maximum number of deals.
Note
The maximum number of deals is specified in the license.