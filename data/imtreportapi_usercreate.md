# UserCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Users ](imtreportapi_user.md "User Functions")/ UserCreate | [](imtreportapi_user.md "User Functions") [](imtreportapi_usercreateaccount.md "UserCreateAccount") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::UserCreate
Create an object of a client record.
IMTUser* IMTReportAPI::UserCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTUser](imtuser.md "IMTUser") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTUser::Release](imtuser_release.md "Release") method of this object.