# UserCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserCreate | [](serverapi_users.md "Clients") [](imtserverapi_usercreateaccount.md "UserCreateAccount") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserCreate
Create an object of a client record.
IMTUser* IMTServerAPI::UserCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTUser](imtuser.md "IMTUser") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTUser::Release](imtuser_release.md "Release") method of this object.