# IMTECNMatching (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN")/ IMTECNHistoryMatching | [](imtecnproviderarray_searchright.md "SearchRight") [](imtecnhistorymatching_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching
This interface provides access to parameters a [matching order from history](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_matching_history#matching_orders), which is the trader's source request placed in the ECN. History records store information about original client orders as well as filling orders, which are service orders created within ECN to execute client requests at gateways.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtecnhistorymatching_release.md "Release") | Delete the current object. |
| [Assign](imtecnhistorymatching_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtecnhistorymatching_clear.md "Clear") | Clear an object. |
| [Order](imtecnhistorymatching_order.md "Order") | Get the ticket of the matching order. |
| [Login](imtecnhistorymatching_login.md "Login") | Get and set the login of the client, to whom the matching order belongs. |
| [Server](imtecnhistorymatching_server.md "Server") | Get and set the identifier of the trade server on which the matching order was placed. |
| [State](imtecnhistorymatching_state.md "State") | Get and set the current state of the matching order. |
| [TimeSetupMsc](imtecnhistorymatching_timesetupmsc.md "TimeSetupMsc") | Get and set order placing time in the ECN. |
| [TimeDoneMsc](imtecnhistorymatching_timedonemsc.md "TimeDoneMsc") | Get and set order execution time in the ECN. |
| [TimeExpiration](imtecnhistorymatching_timeexpiration.md "TimeExpiration") | Get and set order expiration time in the ECN. |
| [Symbol](imtecnhistorymatching_symbol.md "Symbol") | Get and set the name of the trading symbol, for which the matching order is placed on the ECN side. |
| [SymbolClient](imtecnhistorymatching_symbolclient.md "SymbolClient") | Get and set the name of the trading symbol, for which the matching order is placed on the client side. |
| [Type](imtecnhistorymatching_type.md "Type") | Get and set the type of the order added into the ECN order book. |
| [TypeClient](imtecnhistorymatching_typeclient.md "TypeClient") | Get and set the type of the order placed on the client side. |
| [TypeFill](imtecnhistorymatching_typefill.md "TypeFill") | Get and set the fill policy used for the matching order. |
| [TypeFillClient](imtecnhistorymatching_typefillclient.md "TypeFillClient") | Get and set the fill policy used in the original client order. |
| [TypeTime](imtecnhistorymatching_typetime.md "TypeTime") | Get and set the matching order expiration type. |
| [TypeTimeClient](imtecnhistorymatching_typetimeclient.md "TypeTimeClient") | Get and set the expiration type in the original client order. |
| [Price](imtecnhistorymatching_price.md "Price") | Get and set the price of the order created in the ECN for the filling of the client order. |
| [PriceClient](imtecnhistorymatching_priceclient.md "PriceClient") | Get and set the price specified in the original client order. |
| [Digits](imtecnhistorymatching_digits.md "Digits") | Get and set the number of decimal places in the price of the symbol, for which an order is placed on the ECN side. |
| [DigitsClient](imtecnhistorymatching_digitsclient.md "DigitsClient") | Get and set the price specified in the original client order. |
| [VolumeInitialExt](imtecnhistorymatching_volumeinitialext.md "VolumeInitialExt") | Get and set the initial volume of the request created in the ECN for the filling of the client order. |
| [VolumeInitialClientExt](imtecnhistorymatching_volumeinitialclientext.md "VolumeInitialClientExt") | Get and set the current filled volume of the request created in the ECN for the filling of the client order. |
| [VolumeCurrentExt](imtecnhistorymatching_volumecurrentext.md "VolumeCurrentExt") | Get and set the initial volume of the request created by the client. |
| [VolumeCurrentClientExt](imtecnhistorymatching_volumecurrentclientext.md "VolumeCurrentClientExt") | Get and set the current filled volume of the request created by the client. |