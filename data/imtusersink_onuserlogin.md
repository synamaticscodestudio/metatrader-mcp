# OnUserLogin (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ OnUserLogin | [](imtusersink_onuserclean.md "OnUserClean") [](imtusersink_onuserloginext.md "OnUserLoginExt") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::OnUserLogin
A handler of the event of an account's connection to the server.
C++
virtual void IMTUserSink::OnUserLogin( LPCWSTR ip, // IP address const IMTUser* user, // A pointer to an object of an account const UINT type // Type of connection )  
---  
.NET (Gateway/Manager API)
virtual void CIMTUserSink.OnUserLogin( string ip, // IP address CIMTUser user, // An object of an account EnUsersConnectionTypes type // Type of connection )  
---  
Parameters
ip
[in] The IP address, from which connection is established.
user
[in] A pointer to the object of an account [IMTUser](imtuser.md "IMTUser").
type
[in] Type of connection, passed using the [EnUsersConnectionTypes](imtuser_enum.htm#enusersconnectiontypes) enumeration.
Note
This method is called by the API to notify that an account has connected to a server. The method is not used in Gateway API.
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
