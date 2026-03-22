# TradeMarginCheckExt (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Auxiliary Functions ](imtmanagerapi_trade_auxiliary.md "Auxiliary Functions")/ TradeMarginCheckExt | [](imtmanagerapi_trademargincheck.md "TradeMarginCheck") [](imtmanagerapi_trade_account.md "Account State Control") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TradeMarginCheckExt
Checks the availability of the margin required for the execution of this order with the indication of increased accuracy volume.
C++
MTAPIRES IMTManagerAPI::TradeMarginCheckExt( const UINT64 login, // Login LPCWSTR symbol, // Symbol name const UINT type, // Order type const UINT64 volume, // Volume const double price, // Price IMTAccount* account_new=NULL, // New account state IMTAccount* account_current=NULL // Current account state )  
---  
.NET
MTRetCode CIMTManagerAPI.TradeMarginCheckExt( ulong login, // Login string symbol, // Symbol name CIMTOrder.EnOrderType type, // Order type ulong volume, // Volume double price, // Price CIMTAccount account_new=NULL, // New account state CIMTAccount account_current=NULL // Current account state )  
---  
ManagerAPI.TradeMarginCheckExt( login, # Login symbol, # Symbol name type, # Type of order volume, # Volume price # Price )  
---  
Program Parameters
login
[in] The login of the client for whom the order is executed.
symbol
[in] The name of the trading instrument, for which the order is executed.
type
[in] Type of trade order passed using the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration.
volume
[in] Trading order volume in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots). The final order size is calculated based on the current [contract size](imtconsymbol_contractsize.md "ContractSize") for the specified trading instrument.
price
[in] Price of the trade order execution.
account_new=NULL
[out] An object of the trading state of a client account. If account_new is not NULL, it is filled with the state of the client's trading account after the execution of a trade order with the specified parameters. The final margin on the account ([IMTAccount::Margin](imtaccount_margin.md "Margin") and other related parameters) is calculated on an approximate basis. This method is intended solely to verify whether sufficient margin is available for the requested operation.
The account_new object must be created in advance using the [IMTManagerAPI::UserCreateAccount](imtmanagerapi_usercreateaccount.md "UserCreateAccount") method.
account_current=NULL
[out] An object of the trading state of a client account. If account_current is not NULL, it is filled with state of the client's trading account before the execution of a trade orders with the specified parameters (i.e., the account state at the time of the call of TradeMarginCheck). The account_current object must be created in advance [IMTManagerAPI::UserCreateAccount](imtmanagerapi_usercreateaccount.md "UserCreateAccount").
Return Value
An indication of the availability of the required margin is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
The check is performed taking into account the current state of the [client account](imtaccount.md "IMTAccount") (balance, credit, floating profit, open orders and positions, etc.) and using the current market prices for the [group](config_group.md "Groups") of the client.
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTManagerAPI::TradeMarginCheck](imtmanagerapi_trademargincheck.md "TradeMarginCheck") method.