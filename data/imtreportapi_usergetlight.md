# UserGetLight (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Users ](imtreportapi_user.md "User Functions")/ UserGetLight | [](imtreportapi_userget.md "UserGet") [](imtreportapi_userlogins.md "UserLogins") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::UserGetLight
Get the client record brief description.
MTAPIRES IMTReportAPI::UserGetLight( const UINT64 login, // Client login IMTUser *user // An object of the client record )  
---  
Parameters
login
[in] The login of a user.
*user
[out] An object of the client login. The user object must first be created using the [IMTReportAPI::UserCreate](imtreportapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Request for eased record allows to save resources. This method transfers the following user parameters:
  * [IMTUser::Login](imtuser_login.md "Login")
  * [IMTUser::](imtuser_login.md "Login")[Group](imtuser_group.md "Group")
  * [IMTUser::](imtuser_login.md "Login")[Rights](imtuser_rights.md "Rights")
  * [IMTUser::](imtuser_login.md "Login")[Registration](imtuser_registration.md "Registration")
  * [IMTUser::](imtuser_login.md "Login")[LastAccess](imtuser_lastaccess.md "LastAccess")
  * [IMTUser::](imtuser_login.md "Login")[LastIP](imtuser_lastip.md "LastIP")
  * [IMTUser::](imtuser_login.md "Login")[Name](imtuser_name.md "Name")
  * [IMTUser::](imtuser_login.md "Login")[Language](imtuser_language.md "Language")
  * [IMTUser::](imtuser_login.md "Login")[Leverage](imtuser_leverage.md "Leverage")
  * [IMTUser::](imtuser_login.md "Login")[Balance](imtuser_balance.md "Balance")
  * [IMTUser::](imtuser_login.md "Login")[Credit](imtuser_credit.md "Credit")
  * [IMTUser::](imtuser_login.md "Login")[InterestRate](imtuser_interestrate.md "InterestRate")
  * [IMTUser::](imtuser_login.md "Login")[CommissionDaily](imtuser_commissiondaily.md "CommissionDaily")
  * [IMTUser::](imtuser_login.md "Login")[CommissionMonthly](imtuser_commissionmonthly.md "CommissionMonthly")
  * [IMTUser::](imtuser_login.md "Login")[CommissionAgentDaily](imtuser_commissionagentdaily.md "CommissionAgentDaily")
  * [IMTUser::](imtuser_login.md "Login")[CommissionAgentMonthly](imtuser_commissionagentmonthly.md "CommissionAgentMonthly")
  * [IMTUser::](imtuser_login.md "Login")[BalancePrevDay](imtuser_balanceprevtday.md "BalancePrevDay")
  * [IMTUser::](imtuser_login.md "Login")[BalancePrevMonth](imtuser_balanceprevmonth.md "BalancePrevMonth")
  * [IMTUser::](imtuser_login.md "Login")[EquityPrevDay](imtuser_equityprevday.md "EquityPrevDay")
  * [IMTUser::](imtuser_login.md "Login")[EquityPrevMonth](imtuser_equityprevmonth.md "EquityPrevMonth")
  * [IMTUser::](imtuser_login.md "Login")[Agent](imtuser_agent.md "Agent")
  * [IMTUser::ExternalAccount](imtuser_externalaccountget.md "ExternalAccountGet")
  * [IMTUser::MQID](imtuser_mqid.md "MQID")
  * [IMTUser::PasswordHash](imtuser_passwordhash.md "PasswordHash")
  * [IMTUser::CertSerialNumber](imtuser_certserialnumber.md "CertSerialNumber")
