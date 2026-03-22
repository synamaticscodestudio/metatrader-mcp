# UserCreateAccount (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Users ](imtreportapi_user.md "User Functions")/ UserCreateAccount | [](imtreportapi_usercreate.md "UserCreate") [](imtreportapi_userget.md "UserGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::UserCreateAccount
Create an object of a client's trading account.
IMTAccount* IMTReportAPI::UserCreateAccount()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTAccount](imtaccount.md "IMTAccount") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTAccount::Release](imtaccount_release.md "Release") method of this object.