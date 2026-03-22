# TradeMarginCheck (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Auxiliary Functions ](imtmanagerapi_trade_auxiliary.md "Auxiliary Functions")/ TradeMarginCheck | [](imtmanagerapi_traderatesell.md "TradeRateSell") [](imtmanagerapi_trademargincheckext.md "TradeMarginCheckExt") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TradeMarginCheck
Checks the availability of the margin required for the execution of this order.
C++
MTAPIRES IMTManagerAPI::TradeMarginCheck( const UINT64 login, // Login LPCWSTR symbol, // Symbol name const UINT type, // Type of order const UINT64 volume, // Volume const double price, // Price IMTAccount* account_new=NULL, // New state of account IMTAccount* account_current=NULL // Current state of account )  
---  
.NET
MTRetCode CIMTManagerAPI.TradeMarginCheck( ulong login, // Login string symbol, // Symbol name CIMTOrder.EnOrderType type, // Type of order ulong volume, // Volume double price, // Price CIMTAccount account_new=NULL, // New state of account CIMTAccount account_current=NULL // Current state of account )  
---  
Python
ManagerAPI.TradeMarginCheck( login, # Login symbol, # Symbol name type, # Type of order volume, # Volume price # Price )  
---  
Parameters
login
[in] The login of the client for whom the order is executed.
symbol
[in] The name of the trading instrument, for which the order is executed.
type
[in] Type of trade order passed using the [IMTOrder::EnOrderType](imtorder_enum.htm#enordertype) enumeration.
volume
[in] The volume of a trade order in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots). The final order size is calculated based on the current [contract size](imtconsymbol_contractsize.md "ContractSize") for the specified trading instrument.
price
[in] Price of the trade order execution.
account_new=NULL
[out] An object of the trading state of a client account. If account_new is not NULL, it is filled with the state of the client's trading account after the execution of a trade order with the specified parameters. The final margin on the account ([IMTAccount::Margin](imtaccount_margin.md "Margin") and other related parameters) is calculated on an approximate basis. This method is intended solely to verify whether sufficient margin is available for the requested operation.
The account_new object must be first created using the [IMTManagerAPI::UserCreateAccount](imtmanagerapi_usercreateaccount.md "UserCreateAccount") method.
account_current=NULL
[out] An object of the trading state of a client account. If account_current is not NULL, it is filled with state of the client's trading account before the execution of a trade orders with the specified parameters (i.e., the account state at the time of the call of TradeMarginCheck). The account_current object must be first created using the [IMTManagerAPI::UserCreateAccount](imtmanagerapi_usercreateaccount.md "UserCreateAccount") method.
Return Value
An indication of the availability of the required margin is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
The check is performed taking into account the current state of the [client account](imtaccount.md "IMTAccount") (balance, credit, floating profit, open orders and positions, etc.) and the current market prices for the [group](config_group.md "Groups") of the client.
The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTManagerAPI::TradeMarginCheckExt](imtmanagerapi_trademargincheckext.md "TradeMarginCheckExt") method.
IMTManagerAPI::TradeMarginCheck
Checks the availability of the margin required for the execution of this order.
C++
MTAPIRES IMTManagerAPI::TradeMarginCheck( const IMTOrder* order, // An object of a trade order IMTAccount* account_new=NULL, // New state of account IMTAccount* account_current=NULL // Current state of account )  
---  
.NET
MTRetCode CIMTManagerAPI.TradeMarginCheck( CIMTOrder  order, // An object of a trade order CIMTAccount account_new=NULL, // New state of account CIMTAccount account_current=NULL // Current state of account )  
---  
Parameters
order
[in] An object of a trading order.
account_new=NULL
[out] An object of the trading state of a client account. If account_new is not NULL, it is filled with the state of the client's trading account after the execution of a trade order with the specified parameters. The final margin on the account ([IMTAccount::Margin](imtaccount_margin.md "Margin") and other related parameters) is calculated on an approximate basis. This method is intended solely to verify whether sufficient margin is available for the requested operation.
The account_new object must be first created using the [IMTManagerAPI::UserCreateAccount](imtmanagerapi_usercreateaccount.md "UserCreateAccount") method.
account_current=NULL
[out] An object of the trading state of a client account. If account_current is not NULL, it is filled with state of the client's trading account before the execution of a trade orders with the specified parameters (i.e., the account state at the time of the call of TradeMarginCheck). The account_current object must be first created using the [IMTManagerAPI::UserCreateAccount](imtmanagerapi_usercreateaccount.md "UserCreateAccount") method.
Return Value
An indication of the availability of the required margin is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
The check is performed taking into account the current state of the [client account](imtaccount.md "IMTAccount") (balance, credit, floating profit, open orders and positions, etc.) and the current market prices for the group of the client.