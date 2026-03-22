# ActivationTime (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ ActivationTime | [](imtorder_activationmode.md "ActivationMode") [](imtorder_activationprice.md "ActivationPrice") |
| --- | --- | --- |
| --- | --- |

IMTOrder::ActivationTime
Get the order activation time.
C++
INT64 IMTOrder::ActivationTime() const  
---  
.NET (Gateway/Manager API)
long CIMTOrder.ActivationTime()  
---  
Python
MTOrder.ActivationTime  
---  
Return Value
Date and time of the activation of an order, in seconds that have elapsed since 01.01.1970.