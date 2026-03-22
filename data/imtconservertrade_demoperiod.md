# DemoPeriod (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ DemoPeriod | [](imtconservertrade_demomode.md "DemoMode") [](imtconservertrade_overnightmode.md "OvernightMode") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::DemoPeriod
Get the period of a demo account.
C++
UINT IMTConServerTrade::DemoPeriod() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerTrade.DemoPeriod()  
---  
Python (Manager API)
MTConServerTrade.DemoPeriod  
---  
Return Value
The validity of a demo account in days.
IMTConServerTrade::DemoPeriod
Set the period of a demo account.
C++
MTAPIRES IMTConServerTrade::DemoPeriod( const UINT period // Demo account period )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.DemoPeriod( uint period // Demo account period )  
---  
Python (Manager API)
MTConServerTrade.DemoPeriod  
---  
Parameters
period
[in] The period of a demo account in days.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.