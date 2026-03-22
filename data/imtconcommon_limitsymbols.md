# LimitSymbols (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ LimitSymbols | [](imtconcommon_limitgroups.md "LimitGroups") [](imtconcommon_liveupdatemode.md "LiveUpdateMode") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::LimitSymbols
Get the maximum number of [financial instruments](config_symbol.md "Symbols") that can be created in the trading platform.
C++
UINT IMTConCommon::LimitSymbols() const  
---  
.NET (Gateway/Manager API)
uint CIMTConCommon.LimitSymbols()  
---  
Python (Manager API)
MTConCommon.LimitSymbols  
---  
Return value
The maximum number of symbols.
Note
The maximum number of symbols is specified in the license.
The parameter is not currently used.