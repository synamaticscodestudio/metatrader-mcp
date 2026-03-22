# HookUserLogin (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ HookUserLogin | [](imtusersink_hookuserdelete.md "HookUserDelete") [](imtusersink_hookuserloginext.md "HookUserLoginExt") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::HookUserLogin
A hook of an account's connection to the server.
virtual MTAPIRES IMTUserSink::HookUserLogin( LPCWSTR ip, // IP address const IMTUser* user, // An object of an account const UINT type // Type of connection )  
---  
.NET(Gateway/Manager API)
virtual MTRetCoed CIMTUserSink.HookUserLogin( string  ip, // IP address CIMTUser  user, // Account object EnUsersConnectionTypes type // Type of connection )  
---  
Parameters
ip
[in] The IP address, from which connection is established.
user
[in] A pointer to the [IMTUser](imtuser.md "IMTUser") object of an account.
type
[in] Type of connection, passed using the [EnUsersConnectionTypes](imtuser_enum.htm#enusersconnectiontypes) enumeration.
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If an event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), connection will be denied for the account. A response code from the event handler will be returned as a reason for the denial.
Note
The hook is called after a successful authorization of an account connection, before the connection starts working.
The main purpose of this hook is to implement the custom logic of protection against unwanted connections.
This method is used only in the MetaTrader 5 Server API.
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
