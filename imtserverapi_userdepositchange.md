# UserDepositChange (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserDepositChange | [](imtserverapi_userpasswordchange.md "UserPasswordChange") [](imtserverapi_userdepositchangeraw.md "UserDepositChangeRaw") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserDepositChange
Conduct balance operation on a user account.
MTAPIRES IMTServerAPI::UserDepositChange( const UINT64 login, // User's login const double value, // Amount const UINT action, // Type of action LPCWSTR comment, // Comment UINT64& deal_id // Deal ID )  
---  
Parameters
login
[in] The login of a user, on whose account the balance operation is be conducted.
value
[in] The amount to add to an account or subtract from it. A positive value means that funds will be added, a negative value means withdrawal.
action
[in] Type of the balance operation. The type is specified using the following values of the [IMTDeal::EnDealAction](imtdeal_enum.htm#endealaction) enumeration:
  * DEAL_BALANCE — a balance operation.

  * DEAL_CREDIT — a credit operation.
  * DEAL_CHARGE — additional adding/withdrawing.
  * DEAL_CORRECTION — corrective operations.
  * DEAL_BONUS — adding bonuses.
  * DEAL_COMMISSION — charging commissions.

comment
[in] A comment to a balance operation. The maximum comment length is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
deal_id
[out] The ID of the deal in which a balance operation was executed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
Operations with deposit are represented as deals. The ID of the deal in which a balance operation was executed.
In case the deal type is incorrect, the code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.
An amount of money accrued/withdrawn with a single operation cannot exceed 1000000000. In case this value is exceeded, the code [MT_RET_TRADE_MAX_MONEY](retcodes_trades.md "Trade management") is returned.
An amount of withdrawal cannot exceed the current free margin (regardless of the balance operation type). In case this amount is exceeded the code [MT_RET_REQUEST_NO_MONEY](retcodes_trade_request.md "Trade Requests") is returned.
An amount of withdrawal during a credit operation (TYPE=IMTDeal::DEAL_CREDIT) cannot exceed the amount of previously issued credit assets. In case this amount is exceeded the code [MT_RET_REQUEST_NO_MONEY](retcodes_trade_request.md "Trade Requests") is returned.
An amount of withdrawal during any balance operation cannot exceed the current balance. In case this amount is exceeded the code [MT_RET_REQUEST_NO_MONEY](retcodes_trade_request.md "Trade Requests") is returned.
Balance operations can also be conducted by sending [IMTRequest::TA_DEALER_BALANCE](imtrequest_enum.md "Enumerations") type requests to the requests queue using the [IMTServerAPI::TradeRequest](imtserverapi_traderequest.md "TradeRequest") method.
The method cannot be called from trade event handlers and hooks. For example, from [IMTDealSink::OnDealUpdate](imtdealsink_ondealupdate.md "OnDealUpdate").