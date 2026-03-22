# OvermonthTimePrev (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OvermonthTimePrev | [](imtconservertrade_overmonthtimelast.md "OvermonthTimeLast") [](imtconservertrade_loginsrangeadd.md "LoginsRangeAdd") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OvermonthTimePrev
Get the time of the last but one transition to the next month.
C++
INT64 IMTConServerTrade::OvermonthTimePrev() const  
---  
.NET (Gateway/Manager API)
long CIMTConServerTrade.OvermonthTimePrev()  
---  
Python (Manager API)
MTConServerTrade.OvermonthTimePrev  
---  
Return Value
Time of the last but one transition to the next month - number of seconds elapsed since 01.01.1970.