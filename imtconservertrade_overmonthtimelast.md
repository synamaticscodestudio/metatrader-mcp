# OvermonthTimeLast (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OvermonthTimeLast | [](imtconservertrade_overmonthmode.md "OvermonthMode") [](imtconservertrade_overmonthtimeprev.md "OvermonthTimePrev") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OvermonthTimeLast
Get the time of the last transition to the next month.
C++
INT64 IMTConServerTrade::OvermonthTimeLast() const  
---  
.NET (Gateway/Manager API)
long CIMTConServerTrade.OvermonthTimeLast()  
---  
Python (Manager API)
MTConServerTrade.OvermonthTimeLast  
---  
Return Value
Time of the last transition to the next month - number of seconds elapsed since 01.01.1970.