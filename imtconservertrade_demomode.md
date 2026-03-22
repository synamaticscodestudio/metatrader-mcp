# DemoMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ DemoMode | [](imtconservertrade_clear.md "Clear") [](imtconservertrade_demoperiod.md "DemoPeriod") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::DemoMode
Get the mode of demo account allocation.
C++
UINT IMTConServerTrade::DemoMode() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerTrade.DemoMode()  
---  
Python (Manager API)
MTConServerTrade.DemoMode  
---  
Return Value
A value of the [IMTConServerTrade::EnDemoMode](imtconservertrade_enum.htm#endemomode) enumeration.
IMTConServerTrade::DemoMode
Set the mode of demo account allocation.
C++
MTAPIRES IMTConServerTrade::DemoMode( const UINT mode // Demo account allocation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerTrade.DemoMode( uint mode // Demo account allocation mode )  
---  
Python (Manager API)
MTConServerTrade.DemoMode  
---  
Parameters
mode
[in] The demo account allocation mode is passed using the [IMTConServerTrade::EnDemoMode](imtconservertrade_enum.htm#endemomode) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.