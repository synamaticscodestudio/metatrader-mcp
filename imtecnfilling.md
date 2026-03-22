# IMTECNFilling (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN")/ IMTECNFilling | [](imtecnmatchingarray_searchright.md "SearchRight") [](imtecnfilling_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling
This interface provides access to the parameters of a [filling order](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_matching_history#filling_orders_current), which is a service order created within the ECN for the execution of a client order. 
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtecnfilling_release.md "Release") | Delete the current object. |
| [Assign](imtecnfilling_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtecnfilling_clear.md "Clear") | Clear an object. |
| [Login](imtecnfilling_login.md "Login") | Get and set the login of the client, whom the filling order belongs to. |
| [Order](imtecnfilling_order.md "Order") | Get and set the filling order ticket in the MetaTrader 5 platform. |
| [Server](imtecnfilling_server.md "Server") | Get and set the identifier of the trade server on which the filling order was placed. |
| [TimeSetupMsc](imtecnfilling_timesetupmsc.md "TimeSetupMsc") | Get and set the time when the filling order was placed in the external system. |
| [ExternalID](imtecnfilling_externalid.md "ExternalID") | Get and set the filling order identifier in the external system. |
| [State](imtecnfilling_state.md "State") | Get and set the current state of the filling order. |
| [Symbol](imtecnfilling_symbol.md "Symbol") | Get and set the name of the trading instrument for which the filling order was created. |
| [Type](imtecnfilling_type.md "Type") | Get and set the type of the order created for sending to the external system. |
| [TypeFill](imtecnfilling_typefill.md "TypeFill") | Get and set the fill policy used for the filling order. |
| [TypeTime](imtecnfilling_typetime.md "TypeTime") | Get and set the expiration type for the filling order. |
| [VolumeInitialExt](imtecnfilling_volumeinitialext.md "VolumeInitialExt") | Get and set the initial volume of the request created in the ECN for the filling of the client order. |
| [VolumeCurrentExt](imtecnfilling_volumecurrentext.md "VolumeCurrentExt") | Get and set the current filled volume of the request created in the ECN for the filling of the client order. |
| [Price](imtecnfilling_price.md "Price") | Get and set the price of the order created in the ECN for the filling of the client order. |
| [Digits](imtecnfilling_digits.md "Digits") | Get and set the number of decimal places in the price of the symbol, for which an order is placed on the ECN side. |
| [Deviation](imtecnfilling_deviation.md "Deviation") | Get and set the allowable deviation for the filling order. |
| [Provider](imtecnfilling_provider.md "Provider") | Get and set the identifier of the provider through which the order is forwarded. |
| [Comment](imtecnfilling_comment.md "Comment") | Get and set a comment to the filling order. |