# OvermonthMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ OvermonthMode | [](imtconservertrade_overnightdays.md "OvernightDays") [](imtconservertrade_overmonthtimelast.md "OvermonthTimeLast") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::OvermonthMode
Get the mode of transition to the next month.
C++
UINT IMTConServerTrade::OvermonthMode() const  
---  
.NET (Gateway/Manager API)
EnOvermonthMode CIMTConServerTrade.OvermonthMode()  
---  
Python (Manager API)
MTConServerTrade.OvermonthMode  
---  
Return Value
A value of the [IMTConServerTrade::EnOvermonthMode](imtconservertrade_enum.htm#enovermonthmode) enumeration.
IMTConServerTrade::OvermonthMode
Set the mode of transition to the next month.
C++
MTAPIRES IMTConServerTrade::OvermonthMode( const UINT mode // The mode of transition to the next month )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.OvermonthMode( EnOvermonthMode mode // The mode of transition to the next month )  
---  
Python (Manager API)
MTConServerTrade.OvermonthMode  
---  
Parameters
mode
[in] The overmonth mode is passed using the [IMTConServerTrade::EnOvermonthMode](imtconservertrade_enum.htm#enovermonthmode) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.