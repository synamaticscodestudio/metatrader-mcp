# UserBalanceCheck (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserBalanceCheck | [](imtadminapi_userrestorebatcharray.md "UserRestoreBatchArray") [](imtadminapi_userbalancecheckbatch.md "UserBalanceCheckBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserBalanceCheck
Check and correction of a client's balance and credit assets.
C++
MTAPIRES IMTAdminAPI::UserBalanceCheck( const UINT64 login, // Login const UINT fixflag, // Flag of balance correction double& balance_user, // Balance at the moment of check double& balance_history // Balance calculated on the basis of the history of deals double& credit_user, // Credit assets at the moment of check double& credit_history // Credit assets calculated on the basis of the history of deals )  
---  
.NET
MTRetCode CIMTAdminAPI.UserBalanceCheck( ulong login, // Login bool fixflag, // Flag of balance correction out double balance_user, // Balance at the moment of check out double balance_history // Balance calculated on the basis of the history of deals out double credit_user, // Credit assets at the moment of check out double credit_history // Credit assets calculated on the basis of the history of deals )  
---  
Python
AdminAPI.UserBalanceCheck( login, # Login fixflag # Flag of balance correction )  
---  
Parameters
login
[in] The login of a user whose balance should be checked.
fixflag
[in] Flag of the need to correct a client's balance after the check. If fixflag is equal to 1, the client's balance is corrected in accordance with history of [deals](trading_deal.md "Deals"). If the flag is 0, no correction will be made.
balance_user
[out] The value of the [client's balance](imtaccount_balance.md "Balance") stored in the client record at the time of check.
balance_history
[out] The value of the client's balance calculated by analyzing the history of deals.
credit_user
[out] The value of the [client's credit assets](imtaccount_credit.md "Credit") stored in the client record at the time of check.
credit_history
[out] The value of the client's credit assets calculated by analyzing the history of deals.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
If the balance values do not match but balance correction is not performed (fixflag=0), the function returns the [MT_RET_ERR_DATA](retcodes_common.md "Common errors") response code.
Note
This function checks the client's balance on the basis of the history of his or her deals and makes corrections in the client's balance if necessary. Credit assets are checked on the basis of deals of the [IMTDeal::DEAL_CREDIT](imtdeal_enum.htm#endealaction) type.