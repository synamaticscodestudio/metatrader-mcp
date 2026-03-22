# VolumeGatewayExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ VolumeGatewayExt | [](imtdeal_pricegatewayset.md "PriceGatewaySet") [](imtdeal_actiongateway.md "ActionGateway") |
| --- | --- | --- |
| --- | --- |

IMTDeal::VolumeGatewayExt
Get the volume at which the deal is actually routed to an external trading system through the gateway.
C++
UINT64 IMTDeal::VolumeGatewayExt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.VolumeGatewayExt()  
---  
Return Value
The volume in which the deal is actually routed to an external system, in UINT64 format (one unit corresponds to 1/100000000 of a lot, for example, 105000000 means 1.05 lots).
Note
The method operates with [high-precision volumes](features.htm#volume) (8 decimal places).
IMTDeal::VolumeGatewayExt
Set the volume at which the deal is actually routed to an external trading system through the gateway.
C++
MTAPIRES IMTDeal::VolumeGatewayExt( const UINT64 volume // deal volume )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.VolumeGatewayExt( ulong volume // deal volume )  
---  
Parameters
volume
[in] The volume in which the deal is actually routed to an external system, in UINT64 format (one unit corresponds to 1/100000000 of a lot, for example, 105000000 means 1.05 lots).
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method operates with [high-precision volumes](features.htm#volume) (8 decimal places).
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