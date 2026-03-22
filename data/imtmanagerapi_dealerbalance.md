# DealerBalance (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Dealing ](imtmanagerapi_dealing.md "Dealing")/ DealerBalance | [](imtmanagerapi_dealersend.md "DealerSend") [](imtmanagerapi_dealerbalanceraw.md "DealerBalanceRaw") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealerBalance
Conduct balance operations on an account.
C++
MTAPIRES IMTManagerAPI::DealerBalance( const UINT64 login, // Login const double value, // Amount const UINT type, // Type of operation LPCWSTR comment // Comment UINT64& deal_id // Deal ID )  
---  
.NET
MTRetCode CIMTManagerAPI.DealerBalance( ulong login, // Login double value, // Amount uint type, // Type of operation string comment // Comment out ulong deal_id // Deal ID )  
---  
Python
ManagerAPI.DealerBalance( login, # Login value, # Amount type, # Type of operation comment # Comment )  
---  
Parameters
login
[in] A login for conducting a balance operation.
value
[in] The amount to add or subtract from an account. In order to deposit to the account, specify a positive value; to withdraw, specify a negative value.
type
[in] Type of the balance operation. To pass the type, the following values of the [IMTDeal::EnDealAction](imtdeal_enum.htm#endealaction) enumeration are used: DEAL_BALANCE, DEAL_CREDIT, DEAL_CHARGE, DEAL_CORRECTION, DEAL_BONUS, DEAL_COMMISSION, DEAL_TAX, DEAL_DIVIDEND, DEAL_DIVIDEND_FRANKED.
comment
[in] A comment to a balance operation. The length of the comment is limited to 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
deal_id
[out] The ID of the deal in which a balance operation was executed.
Return Value
An indication of successful completion is the [MT_RET_REQUEST_DONE](retcodes_trade_request.md "Trade Requests") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Balance operations are represented as [deals](trading_deal.md "Deals"). The ID of the resulting deal is passed in the deal_id parameter.
In case the deal type is incorrect, the code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.
An amount of money accrued/withdrawn with a single operation cannot exceed 1000000000. In case this value is exceeded, the code [MT_RET_TRADE_MAX_MONEY](retcodes_trades.md "Trade management") is returned.
An amount of withdrawal cannot exceed the current free margin (regardless of the balance operation type). In case this amount is exceeded the code [MT_RET_REQUEST_NO_MONEY](retcodes_trade_request.md "Trade Requests") is returned.
An amount of withdrawal during a credit operation (TYPE=IMTDeal::DEAL_CREDIT) cannot exceed the amount of previously issued credit assets. In case this amount is exceeded the code [MT_RET_REQUEST_NO_MONEY](retcodes_trade_request.md "Trade Requests") is returned.
The free margin is not checked during a correction operation (TYPE=IMTDeal::DEAL_CORRECTION). Be careful with withdrawal operations. If the client has open positions, and you deduct an amount greater than the free margin, Stop Out will trigger on the account.
An amount of withdrawal during any balance operation cannot exceed the current balance. In case this amount is exceeded the code [MT_RET_REQUEST_NO_MONEY](retcodes_trade_request.md "Trade Requests") is returned.
Balance operations can also be conducted by sending [IMTRequest::TA_DEALER_BALANCE](imtrequest_enum.md "Enumerations") type requests to the requests queue using the [IMTManagerAPI::DealerSend](imtmanagerapi_dealersend.md "DealerSend") method.