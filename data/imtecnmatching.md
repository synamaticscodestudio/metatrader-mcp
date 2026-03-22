# IMTECNMatching (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN")/ IMTECNMatching | [](reference_ecn.md "The ECN") [](imtecnmatching_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching
This interface provides access to parameters a [matching order](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_matching_history#matching_orders_current), which is the trader's source request placed in the ECN.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtecnmatching_release.md "Release") | Delete the current object. |
| [Assign](imtecnmatching_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtecnmatching_clear.md "Clear") | Clear an object. |
| [Order](imtecnmatching_order.md "Order") | Get the ticket of the matching order. |
| [Login](imtecnmatching_login.md "Login") | Get and set the login of the client, to whom the matching order belongs. |
| [Server](imtecnmatching_server.md "Server") | Get and set the identifier of the trade server on which the matching order was placed. |
| [Group](imtecnmatching_group.md "Group") | Get and set the group of the client who has placed the matching order. |
| [State](imtecnmatching_state.md "State") | Get and set the current state of the matching order. |
| [Flags](imtecnmatching_flags.md "Flags") | Get and set matching order flags. |
| [TimeSetupMsc](imtecnmatching_timesetupmsc.md "TimeSetupMsc") | Get and set order placing time in the ECN. |
| [TimeExpiration](imtecnmatching_timeexpiration.md "TimeExpiration") | Get and set order expiration time in the ECN. |
| [Symbol](imtecnmatching_symbol.md "Symbol") | Get and set the name of the trading symbol, for which the matching order is placed on the ECN side. |
| [SymbolClient](imtecnmatching_symbolclient.md "SymbolClient") | Get and set the name of the trading symbol, for which the matching order is placed on the client side. |
| [Type](imtecnmatching_type.md "Type") | Get and set the type of the order added into the ECN order book. |
| [TypeFill](imtecnmatching_typefill.md "TypeFill") | Get and set the fill policy used for the matching order. |
| [TypeTime](imtecnmatching_typetime.md "TypeTime") | Get and set the matching order expiration type. |
| [Price](imtecnmatching_price.md "Price") | Get and set the price of the order created in the ECN for the filling of the client order. |
| [PriceClient](imtecnmatching_priceclient.md "PriceClient") | Get and set the price specified in the original client order. |
| [Digits](imtecnmatching_digits.md "Digits") | Get and set the number of decimal places in the price of the symbol, for which an order is placed on the ECN side. |
| [DigitsClient](imtecnmatching_digitsclient.md "DigitsClient") | Get and set the price specified in the original client order. |
| [VolumeInitialExt](imtecnmatching_volumeinitialext.md "VolumeInitialExt") | Get and set the initial volume of the request created in the ECN for the filling of the client order. |
| [VolumeCurrentExt](imtecnmatching_volumecurrentext.md "VolumeCurrentExt") | Get and set the current filled volume of the request created in the ECN for the filling of the client order. |
| [VolumeInitialClientExt](imtecnmatching_volumeinitialclientext.md "VolumeInitialClientExt") | Get and set the initial volume of the request created by the client. |
| [VolumeCurrentClientExt](imtecnmatching_volumecurrentclientext.md "VolumeCurrentClientExt") | Get and set the current filled volume of the request created by the client. |

The IMTECNMatching class contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [ENCMatchingState](imtecnmatching_enum.htm#encmatchingstate) | Possible order states. |
| [EnECNMatchingOrderFlags](imtecnmatching_enum.htm#enecnmatchingorderflags) | Additional order flags. |