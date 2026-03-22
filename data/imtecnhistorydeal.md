# IMTECNFilling (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN")/ IMTECNHistoryDeal | [](imtecnhistoryfillingarray_searchright.md "SearchRight") [](imtecnhistorydeal_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal
This interface provides access to the parameters of [deals](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_matching_history#deals) performed as a result of order execution at gateways. These deals contain execution data at the corresponding gateway and client order execution parameters, taking into account slippage settings.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtecnhistorydeal_release.md "Release") | Delete the current object. |
| [Assign](imtecnhistorydeal_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtecnhistorydeal_clear.md "Clear") | Clear an object. |
| [Order](imtecnhistorydeal_order.md "Order") | Get and set the ticket of the original client order in the MetaTrader 5 platform. |
| [OrderGateway](imtecnhistorydeal_ordergateway.md "OrderGateway") | Get and set the internal ticket of the filling order (which is used within the ECN for internal purposes). |
| [DealGateway](imtecnhistorydeal_dealgateway.md "DealGateway") | Get and set the internal ticket of the deal (used within the ECN for internal purposes). |
| [Login](imtecnhistorydeal_login.md "Login") | Get and set the login of the client, to whom the original order belongs. |
| [Server](imtecnhistorydeal_server.md "Server") | Get and set the identifier of the trade server on which the original order was placed. |
| [ExternalID](imtecnhistorydeal_externalid.md "ExternalID") | Get and set the deal identifier in an external system. |
| [TimeMsc](imtecnhistorydeal_timemsc.md "TimeSetupMsc") | Get and set deal execution time at the gateway. |
| [Symbol](imtecnhistorydeal_symbol.md "Symbol") | Get and set the name of the trading symbol for which the deal was executed. |
| [Action](imtecnhistorydeal_action.md "Type") | Get and set the deal type. |
| [VolumeExt](imtecnhistorydeal_volumeext.md "VolumeInitialExt") | Get and set the deal volume. |
| [Price](imtecnhistorydeal_price.md "Price") | Get and set the price at which the deal was executed on the platform side. |
| [PriceGateway](imtecnhistorydeal_pricegateway.md "PriceGateway") | Get and set the price at which the deal was actually executed on the external system side. |
| [Digits](imtecnhistorydeal_digits.md "Digits") | Get and set the number of decimal places in the price of the symbol, for which the deal was executed, on the trading platform side. |
| [DigitsGateway](imtecnhistorydeal_digitsgateway.md "DigitsGateway") | Get and set the number of decimal places in the price of the symbol, for which the deal was executed, on the external system side. |
| [Commission](imtecnhistorydeal_commission.md "Commission") | Get and set the commission charged by an external system for the deal. |
| [Provider](imtecnhistorydeal_provider.md "Provider") | Get and set the identifier of the provider through which the deal was executed. |