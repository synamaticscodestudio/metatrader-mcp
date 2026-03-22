# PriceDeviationTop (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ PriceDeviationTop | [](imtrequest_pricedeviation.md "PriceDeviation") [](imtrequest_pricedeviationbottom.md "PriceDeviationBottom") |
| --- | --- | --- |
| --- | --- |

IMTRequest::PriceDeviationTop
Get the allowed [price deviation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_symbols/admin_symbols_settings/symbol_settings_execution#max_deviation) in the increase direction.
C++
double IMTRequest::PriceDeviationTop() const  
---  
.NET (Gateway/Manager API)
double CIMTRequest.PriceDeviationTop()  
---  
Return Value
Allowed price deviation in the increase direction. Calculated as PriceOrder + PriceDeviation.