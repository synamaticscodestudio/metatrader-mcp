# UserBalanceCheck (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserBalanceCheck | [](imtmanagerapi_userexternalsync.md "UserExternalSync") [](imtmanagerapi_userbalancecheckbatch.md "UserBalanceCheckBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserBalanceCheck
Check and correct the client's balance and credit funds.
C++
MTAPIRES IMTManagerAPI::UserBalanceCheck( const UINT64 login, // Login const UINT fixflag, // Balance correction flags double& balance_user, // Balance at the moment of checking double& balance_history // Balance based on the deals history double& credit_user, // Credit funds at the moment of checking double& credit_history // Credit funds based on the deals history )  
---  
.NET
MTRetCode CIMTManagerAPI.UserBalanceCheck( ulong login, // Login bool fixflag, // Balance correction flags out double balance_user, // Balance at the moment of checking out double balance_history // Balance based on the deals history out double credit_user, // Credit funds at the moment of checking out double credit_history // Credit funds based on the deals history )  
---  
Python
ManagerAPI.UserBalanceCheck( login, # Login fixflag # Balance correction flags )  
---  
Parameters
login
[in] The login of the client whose balance and credit funds should be checked.
fixflag
[in] Flag of the need to correct a client's balance and credit funds after the check. If fixflag is equal to 1, the client's balance and credit funds are adjusted in accordance with the history of [deals](trading_deal.md "Deals"). If the flag is 0, no correction will be made.
balance_user
[out] The value of the [client's balance](imtaccount_balance.md "Balance") stored in the client record at the time of check.
balance_history
[out] The value of the client's balance calculated by analyzing the history of deals.
credit_user
[out] The [client's credit funds](imtaccount_credit.md "Credit"), stored in the client record at the moment of checking.
credit_history
[out] The client's credit funds calculated by analyzing the history of deals.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
If the balance values do not match but balance correction is not performed (fixflag=0), the function returns the [MT_RET_ERR_DATA](retcodes_common.md "Common errors") response code.
Note
This function checks the client's balance on the basis of the history of his or her deals and makes corrections in the client's balance if necessary. The credit funds are checked based on the [IMTDeal::DEAL_CREDIT](imtdeal_enum.htm#endealaction) deals.