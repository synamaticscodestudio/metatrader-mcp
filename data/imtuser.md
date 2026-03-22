# IMTUser (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users")/ IMTUser | [](reference_user.md "Users") [](imtuser_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTUser
The IMTUser class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtuser_release.md "Release") | Delete the current object. |
| [Assign](imtuser_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtuser_clear.md "Clear") | Clear an object. |
| [Login](imtuser_login.md "Login") | Get and set the login of a user. |
| [Group](imtuser_group.md "Group") | Get and set the group of a user. |
| [CertSerialNumber](imtuser_certserialnumber.md "CertSerialNumber") | Get the number of the certificate that was used last by the client for authorization. |
| [Rights](imtuser_rights.md "Rights") | Get and set user permissions. |
| [Registration](imtuser_registration.md "Registration") | Get the client record creation date. |
| [RegistrationSet](imtuser_registrationset.md "RegistrationSet") | Set the client record creation date. |
| [LastAccess](imtuser_lastaccess.md "LastAccess") | Get the date of the last connection using the account. |
| [LastIP](imtuser_lastip.md "LastIP") | Get the IP address from which the user last connected to the server. |
| [Name](imtuser_name.md "Name") | Get and set the client's first name. The method is obsolete. |
| [FirstName](imtuser_firstname.md "FirstName") | Get and set the client's first name. |
| [LastName](imtuser_lastname.md "LastName") | Get and set the client's last name. |
| [MiddleName](imtuser_middlename.md "MiddleName") | Get and set the client's middle name. |
| [Company](imtuser_company.md "Company") | Get and set the name of a client's company. |
| [Account](imtuser_account.md "Account") | Get and set the number of a client's account in an external trading system. |
| [Country](imtuser_country.md "Country") | Get and set a client's country of residence. |
| [Language](imtuser_language.md "Language") | Get and set the language of a user. |
| [City](imtuser_city.md "City") | Get and set a client's city of residence. |
| [State](imtuser_state.md "State") | Get and set a client's state (region) of residence. |
| [ZIPCode](imtuser_zipcode.md "ZipCode") | Get and set a client's zip code. |
| [Address](imtuser_address.md "Address") | Get and set a client's address. |
| [Phone](imtuser_phone.md "Phone") | Get and set a client's phone number. |
| [EMail](imtuser_email.md "EMail") | Get and set a client's email address. |
| [ID](imtuser_id.md "ID") | Get and set the number of a client's identity document. |
| [MQID](imtuser_mqid.md "MQID") | Get the client's MetaQuotes ID. |
| [ClientID](imtuser_clientid.md "ClientID") | Get and set the client ID with which the trading account is associated. |
| [VisitorID](imtuser_visitorid.md "VisitorID") | Get a unique identifier assigned to a user when he/she installs your terminal or visits your site, if a Finteza tracker is installed in it. |
| [Status](imtuser_status.md "Status") | Get and set a client's status. |
| [Comment](imtuser_comment.md "Comment") | Get and set a comment to a client. |
| [Color](imtuser_color.md "Color") | Get and set a client's color. |
| [PhonePassword](imtuser_phonepassword.md "PhonePassword") | Get and set a client's phone password. |
| [LastPassChange](imtuser_lastpasschange.md "LastPassChange") | Get the date of the last change of the user's password. |
| [PasswordHash](imtuser_passwordhash.md "PasswordHash") | Get the password hash of a client record. This method is used only in the MetaTrader 5 Server API. |
| [OTPSecret](imtuser_otpsecret.md "OTPSecret") | Get and set a secret key which links a trading account and a one-time password generator. |
| [Leverage](imtuser_leverage.md "Leverage") | Get and set the size of a client's leverage. |
| [LeadSource](imtuser_leadsource.md "LeadSource") | Get and set a lead source � a website a client has come from. |
| [LeadCampaign](imtuser_leadcampaign.md "LeadCampaign") | Get and set a lead campaign � name of a marketing campaign a client was attracted by. |
| [InterestRate](imtuser_interestrate.md "InterestRate") | Get the amount accrued for the current month calculated based on the annual interest rate. |
| [CommissionDaily](imtuser_commissiondaily.md "CommissionDaily") | Get the amount of commissions from a client for a day. |
| [CommissionMonthly](imtuser_commissionmonthly.md "CommissionMonthly") | Get the total amount of commissions charged from a client for the current month. |
| [CommissionAgentDaily](imtuser_commissionagentdaily.md "CommissionAgentDaily") | Get the size of agent commissions charged from a client's trade operations for a day. |
| [CommissionAgentMonthly](imtuser_commissionagentmonthly.md "CommissionAgentMonthly") | Get and the amount of agent commission charged for a client's trade operations for the current month. |
| [Agent](imtuser_agent.md "Agent") | Get and set the number of a client's agent account. |
| [Balance](imtuser_balance.md "Balance") | Get the current balance of a client. |
| [BalancePrevDay](imtuser_balanceprevtday.md "BalancePrevDay") | Get the value of a client's balance as of the end of the previous day. |
| [BalancePrevMonth](imtuser_balanceprevmonth.md "BalancePrevMonth") | Get the value of a client's balance as of the end of the previous trading month. |
| [EquityPrevDay](imtuser_equityprevday.md "EquityPrevDay") | Get the value of a client's equity as of the end of the previous day. |
| [EquityPrevMonth](imtuser_equityprevmonth.md "EquityPrevMonth") | Get the value of a client's equity as of the end of the previous trading month. |
| [Credit](imtuser_credit.md "Credit") | Get the current amount of funds credited to a client. |
| [LimitOrders](imtuser_limitorders.md "LimitOrders") | Get and set the maximum number of active (placed) pending orders allowed on the account. |
| [LimitPositionsValue](imtuser_limitpositionsvalue.md "LimitPositionsValue") | Get and set the maximum value of open positions allowed on the account. |
| [ApiDataSet](imtuser_apidataset.md "APIDataSet") | Set the user parameter for a client record. |
| [ApiDataGet](imtuser_apidataget.md "APIDataGet") | Get the value of the user parameter of a client record. |
| [APIDataUpdate](imtuser_apidataupdate.md "APIDataUpdate") | Update a custom parameter for a client record. |
| [APIDataNext](imtuser_apidatanext.md "APIDataNext") | Get a custom parameter of a client record by position. |
| [ApiDataClear](imtuser_apidataclear.md "APIDataClear") | Clear all user parameters set by an application. |
| [ApiDataClearAll](imtuser_apidataclearall.md "APIDataClearAll") | Clear all custom parameters of client records. |
| [ExternalAccountAdd](imtuser_externalaccountadd.md "ExternalAccountAdd") | Add the number of a client's trading account in the external system, with which the platform interacts via the specified gateway. |
| [ExternalAccountUpdate](imtuser_externalaccountupdate.md "ExternalAccountUpdate") | Update the number of a client's trading account in the external system, with which the platform interacts via the specified gateway. |
| [ExternalAccountDelete](imtuser_externalaccountdelete.md "ExternalAccountDelete") | Delete the number of a trading account in the external trading system by position. |
| [ExternalAccountClear](imtuser_externalaccountclear.md "ExternalAccountClear") | Clear client account numbers in external trading systems. |
| [ExternalAccountTotal](imtuser_externalaccounttotal.md "ExternalAccountTotal") | Get the number of client's trading accounts in external trading systems. |
| [ExternalAccountNext](imtuser_externalaccountnext.md "ExternalAccountNext") | Get the number of a client's trading account in the external system and the ID of the gateway, through which the platform interacts with the system. |
| [ExternalAccountGet](imtuser_externalaccountget.md "ExternalAccountGet") | Get the number of a client's trading account in the external system by the ID of the gateway, through which the platform interacts with the system. |

The IMTUser class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnUsersRights](imtuser_enum.htm#enusersrights) | Flags of user permissions. |
| [EnUsersPasswords](imtuser_enum.htm#enuserspasswords) | Types of passwords. |
| [EnUsersConnectionTypes](imtuser_enum.htm#enusersconnectiontypes) | Types of connections. |