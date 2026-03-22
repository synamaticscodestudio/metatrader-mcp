# Gateway (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Gateway | [](imtdeal_reasonset.md "ReasonSet") [](imtdeal_gatewayset.md "GatewaySet") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Gateway
Gets the [ID of a trade gateway](mtgatewayinfo.md "MTGatewayInfo") (module_id), using which the deal was executed.
C++
LPCWSTR IMTDeal::Gateway() const  
---  
.NET (Gateway/Manager API)
string CIMTDeal.Gateway()  
---  
Python
MTDeal.Gateway  
---  
Return Value
If successful, it returns a pointer to the string with the identifier. If the gateway was not involved in the deal execution or no ID is set for the gateway, a zero value is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTDeal](imtdeal.md "IMTDeal") object.
In order to use the string after the object removal (call of the [IMTDeal::Release](imtdeal_release.md "Release") method of this object), a copy of it should be created.