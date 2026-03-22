# IMTECNFilling (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN")/ IMTECNHistoryFilling | [](imtecnhistorymatchingarray_searchright.md "SearchRight") [](imtecnhistoryfilling_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling
This interface provides access to the parameters of a [filling order in history](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_matching_history#filling_orders), which is a service order created within the ECN for the execution of a client order. 
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtecnhistoryfilling_release.md "Release") | Delete the current object. |
| [Assign](imtecnhistoryfilling_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtecnhistoryfilling_clear.md "Clear") | Clear an object. |
| [Order](imtecnhistoryfilling_order.md "Order") | Get and set the order ticket in the MetaTrader 5 platform. |
| [OrderMatching](imtecnhistoryfilling_ordermatching.md "OrderMatching") | Get and set the ticket of the matching orders used for the execution of the current order. |
| [OrderGateway](imtecnhistoryfilling_ordergateway.md "OrderGateway") | Get and set the ticket of the filling order (used within the ECN). |
| [Login](imtecnhistoryfilling_login.md "Login") | Get and set the login of the client, whom the filling order belongs to. |
| [LoginMatching](imtecnhistoryfilling_loginmatching.md "LoginMatching") | Get and set the login of the client who has placed the opposite order which is used to match the current order. |
| [Server](imtecnhistoryfilling_server.md "Server") | Get and set the identifier of the trade server on which the filling order was placed. |
| [TimeSetupMsc](imtecnhistoryfilling_timesetupmsc.md "TimeSetupMsc") | Get and set order creation time in the ECN. |
| [TimeDoneMsc](imtecnhistoryfilling_timedonemsc.md "TimeDoneMsc") | Get and set order execution time in the ECN. |
| [ExternalID](imtecnhistoryfilling_externalid.md "ExternalID") | Get and set the filling order identifier in the external system. |
| [Symbol](imtecnhistoryfilling_symbol.md "Symbol") | Get and set the name of the trading instrument for which the filling order was created. |
| [Type](imtecnhistoryfilling_type.md "Type") | Get and set the type of the order created for sending to the external system. |
| [TypeFill](imtecnhistoryfilling_typefill.md "TypeFill") | Get and set the fill policy used for the filling order. |
| [TypeTime](imtecnhistoryfilling_typetime.md "TypeTime") | Get and set the expiration type for the filling order. |
| [VolumeInitialExt](imtecnhistoryfilling_volumeinitialext.md "VolumeInitialExt") | Get and set the initial volume of the request created in the ECN for the filling of the client order. |
| [VolumeCurrentExt](imtecnhistoryfilling_volumecurrentext.md "VolumeCurrentExt") | Get and set the current filled volume of the request created in the ECN for the filling of the client order. |
| [Price](imtecnhistoryfilling_price.md "Price") | Get and set the price of the order created in the ECN for the filling of the client order. |
| [Digits](imtecnhistoryfilling_digits.md "Digits") | Get and set the number of decimal places in the price of the symbol, for which an order is placed on the ECN side. |
| [Deviation](imtecnhistoryfilling_deviation.md "Deviation") | Get and set the allowable deviation for the filling order. |
| [Provider](imtecnhistoryfilling_provider.md "Provider") | Get and set the identifier of the provider through which the order is forwarded. |
| [Comment](imtecnhistoryfilling_comment.md "Comment") | Get and set a comment to the filling order. |