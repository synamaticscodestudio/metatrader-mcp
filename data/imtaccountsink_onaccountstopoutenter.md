# OnAccountStopOutEnter (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccountSink ](imtaccountsink.md "IMTAccountSink")/ OnAccountStopOutEnter | [](imtaccountsink_onaccountmargincallleave.md "OnAccountMarginCallLeave") [](imtaccountsink_onaccountstopoutleave.md "OnAccountStopOutLeave") |
| --- | --- | --- |
| --- | --- |

IMTAccountSink::OnAccountStopOutEnter
The event handler for the account entering the Stop Out state.
C++
virtual void IMTAccountSink::OnAccountStopOutEnter( const IMTAccount* account, // a pointer to the trading state object const IMTConGroup* group // a pointer to the group object )  
---  
.NET (Manager API)
virtual void CIMTAccountSink::OnAccountStopOutEnter( CIMTAccount account, // trading state object CIMTConGroup  group // group object )  
---  
Parameters
account
[in] A pointer to the [IMTAccount](imtaccount.md "IMTAccount") object of the account's trading state.
group
[in] A pointer to the [IMTConGroup](imtcongroup.md "IMTConGroup") object of a group to which the account belongs.
Note
Used only in the Manager API.
Since the event is generated on the Manager API side, the [IMTAccount::SO*](imtaccount_soactivation.md "SOActivation") fields in the passed object are not filled. This information can be requested from the server using the [IMTManagerAPI::UserAccountRequest](imtmanagerapi_useraccountrequest.md "UserAccountRequest") method.
For information about the Stop Out level, analyze the 'group' parameter ([IMTConGroup::MarginStopOut](imtcongroup_marginstopout.md "MarginStopOut")).