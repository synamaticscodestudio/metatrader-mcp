# TradeMarginCheckExt (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeMarginCheckExt | [](imtserverapi_trademargincheck.md "TradeMarginCheck") [](imtserverapi_tradebalancecheck.md "TradeBalanceCheck") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeMarginCheckExt
Checks the availability of the margin required for the execution of this order with the indication of increased accuracy volume.
MTAPIRES IMTServerAPI::TradeMarginCheckExt( const UINT64 login, // Login LPCWSTR symbol, // Symbol name const UINT type, // Order type const UINT64 volume, // Volume const double price, // Price IMTAccount* account_new=NULL, // New account state IMTAccount* account_current=NULL // Current account state )  
---  
Program Parameters
login
[in] The login of the client for whom the order is executed.
symbol
[in] The name of the trading instrument, for which the order is executed.
type
[in] Type of trade order passed using the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration.
volume
[in] Trading order volume in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots). The final order size is calculated based on the current [contract size](imtconsymbol_contractsize.md "ContractSize") for the specified trading instrument.
price
[in] Price of the trade order execution.
account_new=NULL
[out] An object of the trading state of a client account. If account_new is not NULL, it is filled with the state of the client's trading account after the execution of a trade order with the specified parameters. The final margin on the account ([IMTAccount::Margin](imtaccount_margin.md "Margin") and other related parameters) is calculated on an approximate basis. This method is intended solely to verify whether sufficient margin is available for the requested operation.
The account_new object must be created in advance using the [IMTServerAPI::UserCreateAccount](imtserverapi_usercreateaccount.md "UserCreateAccount") method.
account_current=NULL
[out] An object of the trading state of a client account. If account_current is not NULL, it is filled with state of the client's trading account before the execution of a trade orders with the specified parameters (i.e., the account state at the time of the call of TradeMarginCheck). The account_current object must be created in advance [IMTServerAPI::UserCreateAccount](imtserverapi_usercreateaccount.md "UserCreateAccount").
Return Value
An indication of the availability of the required margin is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
The check is performed taking into account the current state of the [client account](imtaccount.md "IMTAccount") (balance, credit, floating profit, open orders and positions, etc.) and using the current market prices for the [group](config_group.md "Groups") of the client.
Placing of an order can only increase a client's margin ([IMTAccount::Margin](imtaccount_margin.md "Margin")), but not reduce it. When an order to open/increase a position is placed, the new margin value, as if the order has been executed already, appears in the account_new.margin field. This is a feature of the trading platform, which allows you to make sure beforehand that the client has enough money to perform the trading operation. When an order to close a position (or open a hedging position) is placed, the value in account_new.margin is equal to that in account_current.margin. The margin is not released until the actual execution of the order (until a deal is performed).
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTServerAPI::TradeMarginCheck](imtserverapi_trademargincheck.md "TradeMarginCheck") method.