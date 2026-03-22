# GatewaySet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ GatewaySet | [](imtdeal_gateway.md "Gateway") [](imtdeal_pricegateway.md "PriceGateway") |
| --- | --- | --- |
| --- | --- |

IMTDeal::GatewaySet
Sets the [ID of the gateway](mtgatewayinfo.md "MTGatewayInfo") (module_id), using which the deal was executed.
C++
MTAPIRES IMTDeal::GatewaySet( LPCWSTR gateway // The gateway ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.GatewaySet( string gateway // The gateway ID )  
---  
Python
MTDeal.Gateway  
---  
Parameters
gateway
[in] The ID of the gateway, corresponds to [IMTConGateway::ID](imtcongateway_id.md "ID").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an appropriate error code is returned.