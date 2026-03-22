# UserBalanceCheckBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserBalanceCheckBatch | [](imtmanagerapi_userbalancecheck.md "UserBalanceCheck") [](imtmanagerapi_notificationssend.md "NotificationsSend") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserBalanceCheckBatch
Check and adjust balance and credit funds for multiple clients.
C++
MTAPIRES IMTManagerAPI::UserBalanceCheckBatch( const UINT64*  logins, // list of logins const UINT  logins_total, // number of logins const UINT fixflag, // balance adjustment flag MTAPIRES*  results, // array of check results double* balance_user, // array with balances as of the check time double* balance_history // array with balances from the history of deals double* credit_user, // array with credit funds as of the check time double* credit_history // array with credit funds from the history of deals )  
---  
.NET
MTRetCode CIMTManagerAPI.UserBalanceCheckBatch( ulong[] logins, // list of logins bool fixflag, // balance adjustment flag MTRetCode[] res, // array of check results out double[] balance_user, // array with balances as of the check time out double[] balance_history // array with balances from the history of deals out double[] credit_user, // array with credit funds as of the check time out double[] credit_history // array with credit funds from the history of deals )  
---  
Python
ManagerAPI.UserBalanceCheckBatch( logins, # list of logins fixflag # balance adjustment flag )  
---  
Parameters
logins
[in] The array of client logins for which you want to check balances.
logins_total
[in] Number of logins in the 'logins' array.
fixflag
[in] Flag indicating the need to adjust the client's balance and credit funds after the check. If fixflag is equal to 1, the client's balance and credit funds are adjusted in accordance with the history of [deals](trading_deal.md "Deals"). If the flag is 0, no correction will be made.
results
[out] Array with balance check results. The size of the 'results' array must not be less than that of 'logins'.
balance_user
[out] Array with [balance](imtaccount_balance.md "Balance") values existing on the accounts at the check time. The index of the value corresponds to the index of the account in the source array.
balance_history
[out] Array with balance values calculated based on the history of deals on the accounts. The index of the value corresponds to the index of the account in the source array.
credit_user
[out] Array with [credit](imtaccount_credit.md "Credit") values existing on the accounts at the check time. The index of the value corresponds to the index of the account in the source array.
credit_history
[out] Array with credit values calculated based on the history of deals on the accounts. The index of the value corresponds to the index of the account in the source array. The credit funds are checked based on the deals with the [IMTDeal::DEAL_CREDIT](imtdeal_enum.htm#endealaction) type.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all of the specified accounts have been checked. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") code indicates that only some of the accounts have been checked.
Analyze the 'results' array for further execution details. This array will contain check results for each account from the 'logins'. The index of the result corresponds to the index of the account in the source array. If the balances mismatch but no adjustment is performed (fixflag=0), the [MT_RET_ERR_DATA](retcodes_common.md "Common errors") response code is written to the result.
Note
The method checks the clients' balances based on their trading history and adjust the balances if necessary.