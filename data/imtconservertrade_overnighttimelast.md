# OvernightTimeLast (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OvernightTimeLast | [](imtconservertrade_overnighttime.md "OvernightTime") [](imtconservertrade_overnighttimeprev.md "OvernightTimePrev") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OvernightTimeLast
Get the time of the last transition to the next day.
C++
INT64 IMTConServerTrade::OvernightTimeLast() const  
---  
.NET (Gateway/Manager API)s
long CIMTConServerTrade.OvernightTimeLast()  
---  
Python (Manager API)
MTConServerTrade.OvernightTimeLast  
---  
Return Value
Time of the last transition to the next day - number of seconds elapsed since 01.01.1970.