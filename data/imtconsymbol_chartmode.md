# ChartMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ ChartMode | [](imtconsymbol_splicetimedays.md "SpliceTimeDays") [](imtconsymbol_optionsmode.md "OptionsMode") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::ChartMode
Getting the chart creation mode for the symbol.
C++
UINT IMTConSymbol::ChartMode() const  
---  
.NET (Gateway/Manager API)
EnChartMode CIMTConSymbol.ChartMode()  
---  
Python (Manager API)
MTConSymbol.ChartMode  
---  
Return Value
One of the values of the [IMTConSymbol::EnChartMode](imtconsymbol_enum.htm#enchartmode) enumeration.
IMTConSymbol::ChartMode
Setting the chart creation mode for the symbol.
C++
MTAPIRES IMTConSymbol::ChartMode( const UINT mode // Charting mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.ChartMode( EnChartMode mode // Charting mode )  
---  
Python (Manager API)
MTConSymbol.ChartMode  
---  
Parameters
mode
[in] To pass the chart drawing mode, the [IMTConSymbol::EnChartMode](imtconsymbol_enum.htm#enchartmode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Further Note
When you change the chart drawing mode, the accumulated price history will not be changed. Settings only apply to new received data.
For the symbols, the charts of which are based on Bid prices ([IMTConSymbol::CHART_MODE_BID_PRICE](imtconsymbol_enum.htm#enchartmode)), the server does no accept Last prices and volumes from gateways and datafeeds ([IMTGatewayAPI::SendTicks](imtgatewayapi_sendticks.md "SendTicks")). Such ticks are not saved and are not provided to other components of the platform.
If the charting mode is not specified explicitly during symbol creation, the default mode will be set to it — CHART_MODE_BID_PRICE.