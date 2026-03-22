# OvernightMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OvernightMode | [](imtconservertrade_demoperiod.md "DemoPeriod") [](imtconservertrade_overnighttime.md "OvernightTime") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OvernightMode
Gets the mode of transition to the next day.
C++
UINT IMTConServerTrade::OvernightMode() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerTrade.OvernightMode()  
---  
Python (Manager API)
MTConServerTrade.OvernightMode  
---  
Return Value
A value of the [IMTConServerTrade::EnOvernightMode](imtconservertrade_enum.htm#enovernightmode) enumeration.
IMTConServerTrade::OvernightMode
Sets the mode of transition to the next day.
C++
MTAPIRES IMTConServerTrade::OvernightMode( const UINT mode // The mode of transition to the next day  )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.OvernightMode( uint mode // The mode of transition to the next day  )  
---  
Python (Manager API)
MTConServerTrade.OvernightMode  
---  
Parameters
mode
[in] The overnight mode is passed using the [IMTConServerTrade::EnOvernightMode](imtconservertrade_enum.htm#enovernightmode) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.