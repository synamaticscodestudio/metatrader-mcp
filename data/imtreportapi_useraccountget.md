# UserAccountGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Users ](imtreportapi_user.md "User Functions")/ UserAccountGet | [](imtreportapi_userlogins.md "UserLogins") [](imtreportapi_userselect.md "UserSelect") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::UserAccountGet
Obtaining a client's trading account by a login.
MTAPIRES IMTReportAPI::UserAccountGet( const UINT64 login, // Client login IMTAccount* account // An object of a trading account )  
---  
Parameters
login
[in] The login of a client.
account
[out] An object of a client trading account. The account object must be created using the [IMTReportAPI::UserCreateAccount](imtreportapi_usercreateaccount.md "UserCreateAccount") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
To get the trade accounts, generation of an appropriate snapshot must be turned on in a report ([MTReportInfor::SNAPSHOT_ACCOUNTS](mtreportinfo.htm#ensnapshots) or [MTReportInfo::SNAPSHOT_ACCOUNTS_FULL](mtreportinfo.htm#ensnapshots)).
The state of a trade account can be received only in case it has open orders or positions or a trade activity has been detected at the account after the last server restart.