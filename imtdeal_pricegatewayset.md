# PriceGatewaySet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ PriceGatewaySet | [](imtdeal_pricegateway.md "PriceGateway") [](imtdeal_volumegatewayext.md "VolumeGatewayExt") |
| --- | --- | --- |
| --- | --- |

IMTDeal::PriceGatewaySet
Set the actual price of a deal executed via a gateway in an external trading system.
C++
MTAPIRES IMTDeal::PriceGatewaySet( const double price_gateway // Price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.PriceGatewaySet( double price_gateway // Price )  
---  
Python
MTDeal.PriceGateway  
---  
Parameters
price_gateway
[in] The actual price, at which a deal was executed in an external trading system.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an appropriate error code is returned.
Note
Gateways have the built-in [price markup](imtcongatewaytranslate.md "IMTConGatewayTranslate") option, which can be applied to prices provided by an external system. The markup is applied to prices featured in the Market Watch as well as to prices, at which deals are executed on the platform side. The actual price at which the deal was executed on the external system side (excluding the markup) is written in the PriceGateway field.
A set of three fields — PriceGateway, VolumeGatewayExt, and ActionGateway — provides a clear and unambiguous description of how a deal is routed to an external system. Using these fields, you can implement various coverage strategies, including full, partial, and opposite.
A deal created in the platform as a result of sending a confirmation object ([IMTConfirm](imtconfirm.md "IMTConfirm")) or an execution object ([IMTExecution](imtexecution.md "IMTExecution")), inherits all of these properties:
  * [IMTDeal::PriceGateway](imtdeal_pricegateway.md "PriceGateway")
  * [IMTDeal::VolumeGatewayExt](imtdeal_volumegatewayext.md "VolumeGatewayExt")
  * [IMTDeal::ActionGateway](imtdeal_actiongateway.md "ActionGateway")

The same properties are also inherited by the position that is opened or modified as a result of the deal execution:
  * [IMTPosition::PriceGateway](imtposition_pricegateway.md "PriceGateway")
  * [IMTPosition::VolumeGatewayExt](imtposition_volumegatewayext.md "VolumeGatewayExt")
  * [IMTPosition::ActionGateway](imtposition_actiongateway.md "ActionGateway")

In the case of a position modification, the values are applied to the existing position. For example, a Buy 1.00 EURUSD at 1.12060 deal was opened in the platform. In the external system, the deal was covered by 30%:
| Field | Execution from the gateway (IMTExecution) | Deal in the platform (IMTDeal) | Position in the platform (IMTPosition) |
| --- | --- | --- | --- |
| --- | --- | --- | --- |
| PriceGateway | 1.12058 (external system price) | 1.12058 (external system price) | 1.12058 (external system price) |
| VolumeGatewayExt | 30 000 000 (0.3 lots) | 30 000 000 (0.3 lots) | 30 000 000 (0.3 lots) |
| ActionGateway | DEAL_BUY | DEAL_BUY | DEAL_BUY |

The user then increased the position by opening another Buy 1.00 EURUSD at 1.12050 deal in the platform. In the external system, the deal was also covered by 30%:
| Field | Execution from the gateway (IMTExecution) | Deal in the platform (IMTDeal) | Position in the platform (IMTPosition) |
| --- | --- | --- | --- |
| --- | --- | --- | --- |
| PriceGateway | 1.12048 (external system price) | 1.12048 (external system price) | 1.12053 (weighted average price: (1.12058 * 0.3 + 1.12048 * 0.3)/(0.3 + 0.3)) |
| VolumeGatewayExt | 30 000 000 (0.3 lots) | 30 000 000 (0.3 lots) | 60 000 000 (0.6 lots, total volume) |
| ActionGateway | DEAL_BUY | DEAL_BUY | DEAL_BUY |

The user then partially closed the position by executing a Sell 0.50 EURUSD at 1.12070 deal. The relevant part of the positions is closed in the external system:
| Field | Execution from the gateway (IMTExecution) | Deal in the platform (IMTDeal) | Position in the platform (IMTPosition) |
| --- | --- | --- | --- |
| --- | --- | --- | --- |
| PriceGateway | 1.12068 (external system price) | 1.12068 (external system price) | 1.12053 (weighted average price unchanged) |
| VolumeGatewayExt | 15 000 000 (0.15 lots) | 15 000 000 (0.15 lots) | 45 000 000 (0.45 lots, remaining volume in the external system) |
| ActionGateway | DEAL_SELL | DEAL_SELL | DEAL_BUY (direction unchanged) |