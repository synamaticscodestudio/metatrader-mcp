# OvernightTime (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OvernightTime | [](imtconservertrade_overnightmode.md "OvernightMode") [](imtconservertrade_overnighttimelast.md "OvernightTimeLast") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OvernightTime
Get the time of transition to the next day.
C++
UINT IMTConServerTrade::OvernightTime() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerTrade.OvernightTime()  
---  
Python (Manager API)
MTConServerTrade.OvernightTime  
---  
Return Value
The time of transition to the next day in minutes elapsed since 00:00.
IMTConServerTrade::OvernightTime
Set the time of transition to the next day.
C++
MTAPIRES IMTConServerTrade::OvernightTime( const UINT time // Time of transition to the next day )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.OvernightTime( uint time // Time of transition to the next day )  
---  
Python (Manager API)
MTConServerTrade.OvernightTime  
---  
Parameters
time
[in] The time of transition to the next day in minutes elapsed since 00:00.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.