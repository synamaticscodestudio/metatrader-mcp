# OvernightDays (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OvernightDays | [](imtconservertrade_overnighttimeprev.md "OvernightTimePrev") [](imtconservertrade_overmonthmode.md "OvermonthMode") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OvernightDays
Gets the schedule of performing operations connected with the end of a trading day are performed. Report generation, swap calculation, annual interest and commission operations are only performed on these days. This option does not affect the generation of monthly statements.
C++
UINT IMTConServerTrade::OvernightDays() const  
---  
.NET (Gateway/Manager API)
EnOvernightDays CIMTConServerTrade.OvernightDays()  
---  
Python (Manager API)
MTConServerTrade.OvernightDays  
---  
Return Value
A value of the [IMTConServerTrade::EnOvernightDays](imtconservertrade_enum.htm#enovernightdays) enumeration.
IMTConServerTrade::OvernightDays
Sets the schedule of performing operations connected with the end of a trading day are performed. Report generation, swap calculation, annual interest and commission operations are only performed on these days. This option does not affect the generation of monthly statements.
C++
MTAPIRES IMTConServerTrade::OvernightDays( const UINT days // End of day schedule )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.OvernightDays( EnOvernightDays days // End of day schedule )  
---  
Python (Manager API)
MTConServerTrade.OvernightDays  
---  
Parameters
days
[in] To pass the end of day schedule, the [IMTConServerTrade::EnOvernightDays](imtconservertrade_enum.htm#enovernightdays) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
By default, rollover calculations are not performed on Saturday and Sunday (even if flags [IMTConServerTrade::OVERNIGHT_DAYS_SAT](imtconservertrade_enum.htm#enovernightdays) and [IMTConServerTrade::OVERNIGHT_DAYS_SUN](imtconservertrade_enum.htm#enovernightdays) are enabled). When work days are shifted to weekend, you may adjust the operation of the trading platform accordingly. For example, if a work day is shifted from Monday to Saturday, you can enable rollover calculation on Saturday. However, note that traders' rollover will be calculated eight times for that week, instead of seven: five simple swaps and one three-day swap. To compensate for the extra rollover, explicitly disable rollover calculation on Monday (disable the [IMTConServerTrade::OVERNIGHT_DAYS_ROLLOVER_MON](imtconservertrade_enum.htm#enovernightdays) flag). Otherwise, rollover will be charged even if you set up a [holiday](imtconholiday.md "IMTConHoliday") on that day and disable trading in the [server schedule](imtcontime.md "IMTConTime"). On the next day (Tuesday), rollover settings should be reset to the original state.
In addition to enabling rollover calculation, make sure to enable "End of Day" for that day (IMTConServerTrade::OVERNIGHT_DAYS_*). Otherwise, rollover will not be charged.