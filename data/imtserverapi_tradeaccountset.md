# TradeAccountSet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeAccountSet | [](imtserverapi_tradeunsubscribeeod.md "TradeUnsubscribeEOD") [](serverapi_dealer.md "Processing of requests") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeAccountSet
The method is used to match client's MetaTrader 5 trading data (current pending orders, positions and balance) with an external trading system. Using this method, a developer can transfer the state of positions, orders and client balance to MetaTrader 5 platform. As a result of executing the method, the current pending orders, positions and client balance will match the passed data.
MTAPIRES IMTServerAPI::TradeAccountSet( const IMTUser* user // An object of a client record const IMTAccount* account // An object of a trading account const IMTOrderArray* orders // Array of orders const IMTPositionArray* positions // Positions array )  
---  
Parameters
user
[in] [An object of the client record](imtuser.md "IMTUser"). The Login field is used for identification of the user, for whom data synchronization is performed. If that feild is not filled, the client's account number in an external system is used. Account in an external system can be defined using [IMTUser::ExternalAccountAdd](imtuser_externalaccountadd.md "ExternalAccountAdd") method.
account
[in] [Trading account object](imtaccount.md "IMTAccount"). Only [Balance](imtaccount_balance.md "Balance") field is used in IMTAccount object for passing the actual balance value.
orders
[in] [An object of the array of orders](imtorderarray.md "IMTOrderArray") placed for the specified account.
positions
[in] [An object of the array of positions](imtpositionarray.md "IMTPositionArray") placed for the specified account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Correcting operations are created as a result of trading data synchronization. These operations are displayed in the client's trading history.
Deals performed as a result of synchronization have value [EnDealReason::DEAL_REASON_SYNC](imtdeal_enum.htm#endealreason) in their Reason field.
Balance synchronization:
Identification is based on the client account number in an external trading system, which corresponds to this gateway (it is set via [IMTUser::ExternalAccountAdd](imtuser_externalaccountadd.md "ExternalAccountAdd")). If the passed balance (the 'account' parameter) and the client's balance on the trade server do not match, a corrective balance deal is formed on the trade server. If the client's balance on the trade server is zero (when balance should be added), the deal type is [IMTDeal::DEAL_BALANCE](imtdeal_enum.htm#endealaction). Otherwise the deal type is [IMTDeal::DEAL_CORRECTION](imtdeal_enum.htm#endealaction).
Synchronization of orders:
When the method is called, firstly all passed orders are checked (the 'orders' parameter). The following fields must be filled in these parameters:
  * [IMTOrder::Symbol](imtorder_symbol.md "Symbol")
  * [IMTOrder::VolumeInitial](imtorder_volumeinitial.md "VolumeInitial")
  * [IMTOrder::VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent") (must be less than or equal to [IMTOrder::VolumeInitial](imtorder_volumeinitial.md "VolumeInitial"))
  * [IMTOrder::PriceOrder](imtorder_priceorder.md "PriceOrder") (must be non-zero)
  * [IMTOrder::State](imtorder_state.md "State") (must be ORDER_STATE_STARTED, ORDER_STATE_PLACED, ORDER_STATE_PARTIAL or ORDER_STATE_REQUEST_*)

If this condition is not met for any of the passed orders, synchronization stops with an error.
Next, the equality of the list of passed orders (the 'orders' parameter) and the client's list of orders on the trade server is checked. The matching of the following fields is checked:
  * [IMTOrder::Order](imtorder_order.md "Order")
  * [IMTOrder::ExternalID](imtorder_externalid.md "ExternalID")
  * [IMTOrder::Symbol](imtorder_symbol.md "Symbol")
  * [IMTOrder::Type](imtorder_type.md "Type")
  * [IMTOrder::VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent")
  * [IMTOrder::PriceOrder](imtorder_priceorder.md "PriceOrder")
  * [IMTOrder::State](imtorder_state.md "State") (if this field in the incoming order is different from ORDER_STATE_STARTED)

The all these fields are identical in a passed order, such an order will not participate in the synchronization. For the remaining orders the system searches for orders with the same ticket ([IMTOrder::Order](imtorder_order.md "Order")) or external system ID ([IMTOrder::ExternalID)](imtorder_externalid.md "ExternalID") at the platform side. When matching is found, data of a passed order is copied into the appropriate order. However the values of the following original fields are preserved:
  * [IMTOrder::Order](imtorder_order.md "Order")
  * [IMTOrder::PriceTP](imtorder_pricetp.md "PriceTP")
  * [IMTOrder::PriceSL](imtorder_pricesl.md "PriceSL")
  * [IMTOrder::State](imtorder_state.md "State") (if this field in the incoming order is ORDER_STATE_STARTED)
  * [IMTOrder::ContractSize](imtorder_contractsize.md "ContractSize")
  * [IMTOrder::Digits](imtorder_digits.md "Digits")
  * [IMTOrder::DigitsCurrency](imtorder_digitscurrency.md "DigitsCurrency")

The [IMTOrder::Login](imtorder_login.md "Login") field is filled in accordance with the account login specified in the 'user' parameter. The [IMTOrder::TimeSetup](imtorder_timesetup.md "TimeSetup") field is filled with the current server time if this field is not specified in the passed order.
After that the system copies the orders which are not available in the current list (which were not found by ticket or ID).
Next, the orders available in the client's current order list but not contained in the passed array are copied.
Synchronization of positions:
When the method is called, the equality of the list of passed positions (the 'positions' parameter) and the client's list of positions on the trade server is checked. The system checks if the following parameters are identical: position identifier in the external system ([IMTPosition::ExternalID](imtposition_externalid.md "ExternalID")), trading instrument ([IMTPosition::Symbol](imtposition_symbol.md "Symbol")), position direction ([IMTPosition::Action](imtposition_action.md "Action")), volume ([IMTPosition::Volume](imtposition_volume.md "Volume")), open price ([IMTPosition::PriceOpen](imtposition_priceopen.md "PriceOpen")) and the contract size ([IMTPosition::ContractSize](imtposition_contractsize.md "ContractSize")). If the lists are equal, synchronization of positions is considered completed. If the lists do not match:
  * Positions which exist on the trade server but are not found in the passed list, are closed with zero profit.
  * Positions which do not exist on the trade server but are included in the passed list, are added to the client's account.
  * Positions with matching trading symbols existing in both lists are compared. If the direction, open price or contract size of a position has changed, the position on the trade server is closed and a new one received via the gateway is opened. If only the volume of a position has changed, the position on the trade server is corrected via an appropriate deal.
