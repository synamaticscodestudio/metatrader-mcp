# PriceDeviationBottom (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ PriceDeviationBottom | [](imtrequest_pricedeviationtop.md "PriceDeviationTop") [](imtrequest_spreaddiff.md "SpreadDiff") |
| --- | --- | --- |
| --- | --- |

IMTRequest::PriceDeviationBottom
Get the allowed [price deviation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_symbols/admin_symbols_settings/symbol_settings_execution#max_deviation) in the decrease direction.
C++
double IMTRequest::PriceDeviationBottom() const  
---  
.NET (Gateway/Manager API)
double CIMTRequest.PriceDeviationBottom()  
---  
Return Value
Allowed price deviation in the decrease direction. Calculated as PriceOrder - PriceDeviation.