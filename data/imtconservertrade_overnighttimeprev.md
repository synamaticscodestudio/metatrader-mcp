# OvernightTimePrev (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OvernightTimePrev | [](imtconservertrade_overnighttimelast.md "OvernightTimeLast") [](imtconservertrade_overnightdays.md "OvernightDays") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OvernightTimePrev
Get the time of the last but one transition to the next day.
C++
INT64 IMTConServerTrade::OvernightTimePrev() const  
---  
.NET (Gateway/Manager API)
long CIMTConServerTrade.OvernightTimePrev()  
---  
Python (Manager API)
MTConServerTrade.OvernightTimePrev  
---  
Return Value
Time of the last but one transition to the next day - number of seconds elapsed since 01.01.1970.