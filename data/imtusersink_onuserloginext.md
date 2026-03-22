# OnUserLoginExt (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ OnUserLoginExt | [](imtusersink_onuserlogin.md "OnUserLogin") [](imtusersink_onuserlogout.md "OnUserLogout") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::OnUserLoginExt
An extended handler of the event of an account's connection to the server. Passes an extended description of the connection.
C++
virtual void IMTUserSink::OnUserLoginExt( const IMTUser* user, // A pointer to the account object const IMTOnline* online // A pointer to the connection object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTUserSink.OnUserLoginExt( CIMTUser user, // Account object CIMTOnline online // Connection object )  
---  
Parameters
user
[in] A pointer to the [IMTUser](imtuser.md "IMTUser") object.
online
[in] A pointer to the [IMTOnline](imtonline.md "IMTOnline") connection description object.
Note
This method is called by the API to notify that an account has connected to a server. Not used in the Gateway API.
Only the following fields are filled in the passed account record description:
  * [IMTUser::Login](imtuser_login.md "Login")
  * [IMTUser::Group](imtuser_group.md "Group")
  * [IMTUser::PhonePassword](imtuser_phonepassword.md "PhonePassword")
  * [IMTUser::PassworHash](imtuser_passwordhash.md "PasswordHash")
  * [IMTUser::Name](imtuser_name.md "Name")
  * [IMTUser::Rights](imtuser_rights.md "Rights")
  * [IMTUser::MQID](imtuser_mqid.md "MQID")
  * [IMTUser::Registration](imtuser_registration.md "Registration")
  * [IMTUser::LastAccess](imtuser_lastaccess.md "LastAccess")
  * [IMTUser::LastIP](imtuser_lastip.md "LastIP")
  * [IMTUser::Language](imtuser_language.md "Language")
  * [IMTUser::Balance](imtuser_balance.md "Balance")
  * [IMTUser::Credit](imtuser_credit.md "Credit")
  * [IMTUser::Commission*](imtuser_commissionagentdaily.md "CommissionAgentDaily")
  * [IMTUser::Leverage](imtuser_leverage.md "Leverage")
  * [IMTUser::Agent](imtuser_agent.md "Agent")
  * [IMTUser::ExternalAccount*](imtuser_externalaccountadd.md "ExternalAccountAdd")
